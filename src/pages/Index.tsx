
import MainLayout from "@/layouts/MainLayout";
import { Search } from "lucide-react";

const featuredCourses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    instructor: "Sarah Johnson",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Learn the fundamentals of web development including HTML, CSS and JavaScript. Build responsive websites from scratch.",
    duration: "8 weeks",
    totalLessons: 24,
    category: "Development"
  },
  {
    id: "2",
    title: "Data Science Fundamentals",
    instructor: "Michael Chen",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Master the basics of data science, including data analysis, visualization, and machine learning fundamentals.",
    duration: "10 weeks",
    totalLessons: 30,
    category: "Data Science"
  },
  {
    id: "3",
    title: "Digital Marketing Mastery",
    instructor: "Emma Williams",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Comprehensive guide to digital marketing strategies, SEO, social media marketing, and analytics.",
    duration: "6 weeks",
    totalLessons: 18,
    category: "Marketing"
  }
];

const popularCategories = [
  "Programming", "Data Science", "Business", "Design", 
  "Marketing", "Personal Development", "Health & Fitness"
];

const Index = () => {
  return (
    <MainLayout>
      <div className="container-fluid">
        {/* Hero Section */}
        <div className="bg-primary bg-gradient text-white p-4 p-md-5 rounded mb-4">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-5 fw-bold mb-3">Expand Your Knowledge and Skills</h1>
              <p className="lead mb-4">
                Discover courses taught by expert instructors from around the world.
                Learn at your own pace and achieve your goals.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-2">
                <button className="btn btn-light">Browse Courses</button>
                <button className="btn btn-outline-light">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Categories */}
        <div className="mb-4">
          <div className="position-relative mb-3">
            <input 
              type="text" 
              className="form-control form-control-lg ps-5" 
              placeholder="Search for courses..."
            />
            <Search className="position-absolute top-50 translate-middle-y ms-3" size={20} />
          </div>
          <div className="d-flex flex-wrap gap-2">
            {popularCategories.map((category) => (
              <button 
                key={category}
                className="btn btn-outline-primary rounded-pill"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Courses */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h3">Featured Courses</h2>
            <button className="btn btn-link text-primary text-decoration-none">View All</button>
          </div>
          <div className="row g-4">
            {featuredCourses.map((course) => (
              <div key={course.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100">
                  <img 
                    src={course.coverImage}
                    className="card-img-top"
                    alt={course.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title mb-0">{course.title}</h5>
                      <span className="badge bg-primary bg-opacity-10 text-primary">
                        {course.category}
                      </span>
                    </div>
                    <p className="text-muted mb-2">{course.instructor}</p>
                    <p className="card-text">{course.description}</p>
                    <div className="d-flex justify-content-between text-muted small mb-3">
                      <span>{course.duration}</span>
                      <span>{course.totalLessons} lessons</span>
                    </div>
                    <button className="btn btn-primary w-100">Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-light p-4 p-md-5 text-center rounded mb-4">
          <h2 className="h3 mb-3">Ready to Start Learning?</h2>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Join thousands of students who are already expanding their knowledge and skills on our platform.
          </p>
          <button className="btn btn-primary btn-lg">Sign Up Now</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
