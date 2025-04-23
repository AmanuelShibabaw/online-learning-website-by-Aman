
import MainLayout from "@/layouts/MainLayout";
import { CourseCard } from "@/components/ui/course-card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Sample course data
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
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-xl p-8 mb-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Expand Your Knowledge and Skills</h1>
            <p className="text-xl mb-6">
              Discover courses taught by expert instructors from around the world.
              Learn at your own pace and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-white text-purple-700 hover:bg-gray-100">
                Browse Courses
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-purple-600">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Search and Categories Section */}
        <div className="mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search for courses..." 
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {popularCategories.map((category) => (
              <Button 
                key={category} 
                variant="outline" 
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Courses */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Courses</h2>
            <Button variant="ghost" className="text-purple-600">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard 
                key={course.id}
                {...course}
                onEnroll={(id) => console.log(`Enrolled in course ${id}`)}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-xl p-8 text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">Ready to Start Learning?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of students who are already expanding their knowledge and skills on our platform.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Sign Up Now
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
