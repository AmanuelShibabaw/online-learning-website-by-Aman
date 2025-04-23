
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, Users, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigation = [
    { name: "Dashboard", href: "/", icon: BookOpen },
    { name: "Student Portal", href: "/student", icon: User },
    { name: "Instructor Portal", href: "/instructor", icon: Users },
    { name: "Admin Portal", href: "/admin", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40" 
             style={{ display: sidebarOpen ? 'block' : 'none' }} 
             onClick={() => setSidebarOpen(false)} />
        
        <div className={cn(
          "fixed inset-y-0 left-0 flex flex-col w-64 bg-white border-r transition-transform duration-300 ease-in-out z-50",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <h2 className="text-xl font-semibold text-purple-600">EduSpace</h2>
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-4">
            <nav className="px-2 space-y-1">
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                      active
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                    )}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className={cn(
                      "mr-3 h-5 w-5",
                      active ? "text-purple-500" : "text-gray-400 group-hover:text-purple-500"
                    )} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r">
          <div className="flex items-center h-16 px-4 border-b">
            <h2 className="text-xl font-semibold text-purple-600">EduSpace</h2>
          </div>
          <div className="flex-1 overflow-auto py-4">
            <nav className="px-2 space-y-1">
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                      active
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                    )}
                  >
                    <item.icon className={cn(
                      "mr-3 h-5 w-5",
                      active ? "text-purple-500" : "text-gray-400 group-hover:text-purple-500"
                    )} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col">
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b">
          <Button 
            variant="ghost"
            size="icon"
            className="lg:hidden px-4 border-r"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex items-center">
              <h1 className="text-lg font-semibold">EduSpace Online</h1>
            </div>
            <div className="flex items-center">
              {/* Profile dropdown placeholder */}
              <Button variant="outline" size="sm" className="ml-3">
                Sign In
              </Button>
            </div>
          </div>
        </div>
        <main className="flex-1">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
