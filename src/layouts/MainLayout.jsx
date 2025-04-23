
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, Users, User, Settings } from "lucide-react";

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navigation = [
    { name: "Dashboard", href: "/", icon: BookOpen },
    { name: "Student Portal", href: "/student", icon: User },
    { name: "Instructor Portal", href: "/instructor", icon: Users },
    { name: "Admin Portal", href: "/admin", icon: Settings },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-vh-100 bg-light">
      {sidebarOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1040 }}
          onClick={closeSidebar}
        />
      )}
      
      <div className="d-lg-none">
        <div 
          className={`position-fixed top-0 start-0 h-100 bg-white border-end transition ${sidebarOpen ? 'translate-0' : 'translate-start-100'}`} 
          style={{ width: '250px', zIndex: 1050 }}
        >
          <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
            <h2 className="h5 text-primary mb-0">EduSpace</h2>
            <button className="btn btn-link p-0" onClick={closeSidebar} aria-label="Close menu">
              <X size={20} />
            </button>
          </div>
          <nav className="p-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`d-flex align-items-center text-decoration-none p-2 rounded mb-2 ${
                  isActive(item.href)
                    ? 'bg-primary bg-opacity-10 text-primary'
                    : 'text-dark'
                }`}
                onClick={closeSidebar}
              >
                <item.icon size={20} className="me-2" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="d-none d-lg-block position-fixed h-100">
        <div className="d-flex flex-column h-100 bg-white border-end" style={{ width: '250px' }}>
          <div className="p-3 border-bottom">
            <h2 className="h5 text-primary mb-0">EduSpace</h2>
          </div>
          <nav className="p-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`d-flex align-items-center text-decoration-none p-2 rounded mb-2 ${
                  isActive(item.href)
                    ? 'bg-primary bg-opacity-10 text-primary'
                    : 'text-dark'
                }`}
              >
                <item.icon size={20} className="me-2" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="ms-lg-auto" style={{ marginLeft: '250px' }}>
        <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
          <div className="container-fluid">
            <button 
              className="btn btn-link d-lg-none"
              onClick={toggleSidebar}
              aria-label="Toggle navigation"
            >
              <Menu size={24} />
            </button>
            <h1 className="h5 mb-0">EduSpace Online</h1>
            <div className="ms-auto">
              <button className="btn btn-outline-primary">Sign In</button>
            </div>
          </div>
        </nav>
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
