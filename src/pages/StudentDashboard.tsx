
import MainLayout from "@/layouts/MainLayout";
import { CourseCard } from "@/components/ui/course-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Award, Calendar } from "lucide-react";

// Sample enrolled courses data with progress
const enrolledCourses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    instructor: "Sarah Johnson",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Learn the fundamentals of web development including HTML, CSS and JavaScript.",
    duration: "8 weeks",
    totalLessons: 24,
    progress: 65,
    category: "Development"
  },
  {
    id: "2",
    title: "UX/UI Design Principles",
    instructor: "Alex Turner",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Master the fundamentals of user experience and interface design.",
    duration: "6 weeks",
    totalLessons: 18,
    progress: 25,
    category: "Design"
  },
  {
    id: "3",
    title: "Python for Data Analysis",
    instructor: "Michael Chen",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Learn how to analyze and visualize data using Python and its libraries.",
    duration: "10 weeks",
    totalLessons: 30,
    progress: 10,
    category: "Data Science"
  }
];

// Sample upcoming events
const upcomingEvents = [
  { id: 1, title: "Live Q&A Session: Web Development", date: "Apr 25, 2025", time: "3:00 PM" },
  { id: 2, title: "Group Project Submission Due", date: "Apr 28, 2025", time: "11:59 PM" },
  { id: 3, title: "Python Workshop", date: "May 3, 2025", time: "2:00 PM" },
];

const StudentDashboard = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                2 in progress, 1 not started
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hours Studied</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5</div>
              <p className="text-xs text-muted-foreground">
                +2.5 hours this week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">
                2 in progress
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                Next: Live Q&A Session
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="my-courses" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="my-courses">My Courses</TabsTrigger>
            <TabsTrigger value="upcoming-events">Upcoming Events</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="my-courses">
            {/* My Courses */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <CourseCard 
                  key={course.id}
                  {...course}
                  onContinue={(id) => console.log(`Continuing course ${id}`)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming-events">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex justify-between items-center border-b pb-4 last:border-0">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.date} • {event.time}</p>
                      </div>
                      <Button size="sm" variant="outline">Add to Calendar</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            {/* Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Certificates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-8 text-center bg-gray-50 rounded-lg border border-dashed">
                    <Award className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="font-medium mb-2">Foundations of JavaScript</h3>
                    <p className="text-sm text-muted-foreground mb-4">Completed on March 15, 2025</p>
                    <Button variant="outline" size="sm">View Certificate</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm">Complete more courses to earn achievements and certificates.</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Overall Completion</span>
                        <span className="text-sm">33%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: "33%" }}></div>
                      </div>
                    </div>
                    <Button className="w-full">Browse More Courses</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Recommendations Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Recommended For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard
              id="4"
              title="Advanced JavaScript Concepts"
              instructor="David Miller"
              coverImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              description="Dive deep into advanced JavaScript topics like closures, prototypes, and asynchronous programming."
              duration="8 weeks"
              totalLessons={24}
              category="Development"
              onEnroll={(id) => console.log(`Enrolled in course ${id}`)}
            />
            <CourseCard
              id="5"
              title="Mobile App Design"
              instructor="Jennifer Lee"
              coverImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              description="Learn to design beautiful and functional mobile applications for iOS and Android."
              duration="6 weeks"
              totalLessons={18}
              category="Design"
              onEnroll={(id) => console.log(`Enrolled in course ${id}`)}
            />
            <CourseCard
              id="6"
              title="Business Analytics"
              instructor="Robert Thompson"
              coverImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              description="Learn how to use data to make better business decisions and drive growth."
              duration="7 weeks"
              totalLessons={21}
              category="Business"
              onEnroll={(id) => console.log(`Enrolled in course ${id}`)}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudentDashboard;
