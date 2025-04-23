
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, TrendingUp, MessageSquare } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { CourseCard } from "@/components/ui/course-card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Sample courses data
const instructorCourses = [
  {
    id: "1",
    title: "Advanced React Development",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Master advanced React concepts including hooks, context API, and performance optimization.",
    duration: "10 weeks",
    totalLessons: 30,
    category: "Development",
    enrollments: 245,
    rating: 4.8
  },
  {
    id: "2",
    title: "UI/UX Design Masterclass",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Learn comprehensive UI/UX design principles and create beautiful interfaces.",
    duration: "8 weeks",
    totalLessons: 24,
    category: "Design",
    enrollments: 187,
    rating: 4.6
  }
];

// Sample student data
const recentStudents = [
  { id: 1, name: "Alex Johnson", course: "Advanced React Development", enrolled: "Apr 20, 2025", progress: 35 },
  { id: 2, name: "Maria Garcia", course: "Advanced React Development", enrolled: "Apr 19, 2025", progress: 15 },
  { id: 3, name: "James Wilson", course: "UI/UX Design Masterclass", enrolled: "Apr 18, 2025", progress: 22 },
  { id: 4, name: "Patricia Lee", course: "Advanced React Development", enrolled: "Apr 17, 2025", progress: 8 },
  { id: 5, name: "Robert Brown", course: "UI/UX Design Masterclass", enrolled: "Apr 16, 2025", progress: 42 },
];

// Sample messages
const recentMessages = [
  { id: 1, from: "Alex Johnson", subject: "Question about React Hooks", date: "Apr 22, 2025", read: false },
  { id: 2, from: "Maria Garcia", subject: "Assignment Submission", date: "Apr 21, 2025", read: true },
  { id: 3, from: "James Wilson", subject: "Feedback on Design Project", date: "Apr 20, 2025", read: true },
];

const InstructorDashboard = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Instructor Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                1 in development
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">432</div>
              <p className="text-xs text-muted-foreground">
                +12 this week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Course Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$8,459</div>
              <p className="text-xs text-muted-foreground">
                +$856 this month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                2 require response
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="courses" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Your Courses</h2>
              <Button>Create New Course</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {instructorCourses.map((course) => (
                <div key={course.id} className="flex flex-col">
                  <CourseCard
                    {...course}
                    instructor="You"
                    buttonText="Manage Course"
                    buttonAction={(id) => console.log(`Managing course ${id}`)}
                  />
                  <Card className="mt-4">
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Students Enrolled</span>
                        <span className="text-sm font-medium">{course.enrollments}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Average Rating</span>
                        <span className="text-sm font-medium">{course.rating}/5.0</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-medium">Completion Rate</span>
                        <span className="text-sm font-medium">68%</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <Button variant="outline" className="flex-1 text-xs">View Analytics</Button>
                        <Button variant="outline" className="flex-1 text-xs">Edit Course</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="mt-6 p-8 border rounded-lg border-dashed text-center">
              <h3 className="text-lg font-medium mb-2">Create a New Course</h3>
              <p className="text-muted-foreground mb-4">
                Share your knowledge with students around the world
              </p>
              <Button>Start Creating</Button>
            </div>
          </TabsContent>

          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle>Recent Enrollments</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Enrolled</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.course}</TableCell>
                        <TableCell>{student.enrolled}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={student.progress} className="h-2 w-full" />
                            <span className="text-xs">{student.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">View Profile</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="flex justify-center mt-4">
                  <Button variant="outline">View All Students</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMessages.map((message) => (
                    <div key={message.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                      <div className="flex items-center gap-2">
                        {!message.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                        <div>
                          <h3 className={`font-medium ${!message.read ? 'text-black' : 'text-gray-600'}`}>
                            {message.subject}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            From: {message.from} • {message.date}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Read</Button>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  <Button variant="outline">View All Messages</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Analytics Preview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Course Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-4">Student Engagement</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Advanced React Development</span>
                      <span>76%</span>
                    </div>
                    <Progress value={76} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>UI/UX Design Masterclass</span>
                      <span>62%</span>
                    </div>
                    <Progress value={62} className="h-2" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4">Monthly Enrollments</h3>
                <div className="h-40 flex items-end justify-between gap-2">
                  {[45, 62, 58, 71, 84].map((height, i) => (
                    <div key={i} className="relative flex flex-col items-center">
                      <div className="text-xs absolute -top-5">{height}</div>
                      <div 
                        className="w-12 bg-purple-500 rounded-t" 
                        style={{ height: `${height}%` }}
                      ></div>
                      <div className="text-xs mt-1">
                        {["Jan", "Feb", "Mar", "Apr", "May"][i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline">View Detailed Analytics</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default InstructorDashboard;
