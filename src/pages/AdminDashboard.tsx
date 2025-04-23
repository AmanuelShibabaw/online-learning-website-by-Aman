
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Users, BookOpen, TrendingUp, Shield } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Sample users data
const users = [
  { id: 1, name: "Alex Johnson", email: "alex@example.com", role: "student", status: "active", joined: "Apr 15, 2025" },
  { id: 2, name: "Sarah Williams", email: "sarah@example.com", role: "instructor", status: "active", joined: "Mar 22, 2025" },
  { id: 3, name: "Michael Brown", email: "michael@example.com", role: "student", status: "inactive", joined: "Feb 10, 2025" },
  { id: 4, name: "Jennifer Davis", email: "jennifer@example.com", role: "instructor", status: "active", joined: "Apr 05, 2025" },
  { id: 5, name: "Robert Wilson", email: "robert@example.com", role: "student", status: "active", joined: "Apr 12, 2025" },
];

// Sample courses data
const courses = [
  { id: 1, title: "Advanced React Development", instructor: "Sarah Williams", students: 245, status: "active", created: "Jan 15, 2025" },
  { id: 2, title: "UI/UX Design Masterclass", instructor: "Jennifer Davis", students: 187, status: "active", created: "Feb 03, 2025" },
  { id: 3, title: "Introduction to Machine Learning", instructor: "David Miller", students: 136, status: "active", created: "Mar 10, 2025" },
  { id: 4, title: "Python for Data Science", instructor: "Sarah Williams", students: 89, status: "pending", created: "Apr 18, 2025" },
  { id: 5, title: "Digital Marketing Fundamentals", instructor: "Jennifer Davis", students: 75, status: "active", created: "Mar 05, 2025" },
];

const AdminDashboard = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,254</div>
              <p className="text-xs text-muted-foreground">
                +48 this week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">
                4 pending approval
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$42,856</div>
              <p className="text-xs text-muted-foreground">
                +15% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Platform Status</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">Healthy</div>
              <p className="text-xs text-muted-foreground">
                All systems operational
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="users" className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <TabsList>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search..." 
                className="pl-10"
              />
            </div>
          </div>

          <TabsContent value="users">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>User Management</CardTitle>
                <Button>Add New User</Button>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">All</Button>
                    <Button variant="outline" size="sm">Students</Button>
                    <Button variant="outline" size="sm">Instructors</Button>
                    <Button variant="outline" size="sm">Admins</Button>
                  </div>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                      <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant={user.role === "instructor" ? "outline" : "secondary"}>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === "active" ? "default" : "destructive"} className={user.status === "active" ? "bg-green-100 text-green-800" : ""}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.joined}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-red-500">Disable</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-muted-foreground">Showing 5 of 1,254 users</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Course Management</CardTitle>
                <Button>Add New Course</Button>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">All</Button>
                    <Button variant="outline" size="sm">Active</Button>
                    <Button variant="outline" size="sm">Pending</Button>
                    <Button variant="outline" size="sm">Archived</Button>
                  </div>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="title-asc">Title (A-Z)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell>{course.title}</TableCell>
                        <TableCell>{course.instructor}</TableCell>
                        <TableCell>{course.students}</TableCell>
                        <TableCell>
                          <Badge variant={course.status === "active" ? "default" : "secondary"} className={course.status === "active" ? "bg-green-100 text-green-800" : ""}>
                            {course.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{course.created}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm">View</Button>
                            {course.status === "pending" && (
                              <Button variant="ghost" size="sm" className="text-green-500">Approve</Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-muted-foreground">Showing 5 of 32 courses</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">General Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Platform Name</label>
                        <Input defaultValue="EduSpace Online" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Support Email</label>
                        <Input defaultValue="support@eduspaceonline.com" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Registration Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Allow New Registrations</h4>
                          <p className="text-sm text-muted-foreground">Enable or disable new user registrations</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">Disable</Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">Enabled</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Instructor Applications</h4>
                          <p className="text-sm text-muted-foreground">Allow users to apply as instructors</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">Disable</Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">Enabled</Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Payments & Billing</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Default Currency</label>
                        <Select defaultValue="usd">
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">USD ($)</SelectItem>
                            <SelectItem value="eur">EUR (€)</SelectItem>
                            <SelectItem value="gbp">GBP (£)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Instructor Revenue Share</h4>
                          <p className="text-sm text-muted-foreground">Percentage of course revenue given to instructors</p>
                        </div>
                        <div className="w-32">
                          <Input defaultValue="70%" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-3">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72 flex items-end justify-between gap-2">
                    {[28, 42, 56, 64, 48, 75].map((height, i) => (
                      <div key={i} className="relative flex flex-col items-center">
                        <div className="text-xs absolute -top-5">${height * 100}</div>
                        <div 
                          className="w-12 bg-purple-500 rounded-t" 
                          style={{ height: `${height}%` }}
                        ></div>
                        <div className="text-xs mt-1">
                          {["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"][i]}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Total Revenue (YTD)</span>
                      <span className="text-sm font-medium">$267,450</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Projected Annual</span>
                      <span className="text-sm font-medium">$512,800</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72 flex items-end justify-between gap-2">
                    {[35, 42, 50, 65, 78, 95].map((height, i) => (
                      <div key={i} className="relative flex flex-col items-center">
                        <div className="text-xs absolute -top-5">{height * 10}</div>
                        <div 
                          className="w-12 bg-blue-500 rounded-t" 
                          style={{ height: `${height}%` }}
                        ></div>
                        <div className="text-xs mt-1">
                          {["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"][i]}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">New Users (This Month)</span>
                      <span className="text-sm font-medium">245</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">User Retention Rate</span>
                      <span className="text-sm font-medium">87%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Top Performing Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Course Title</TableHead>
                        <TableHead>Instructor</TableHead>
                        <TableHead>Enrollments</TableHead>
                        <TableHead>Completion Rate</TableHead>
                        <TableHead>Revenue</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Advanced React Development</TableCell>
                        <TableCell>Sarah Williams</TableCell>
                        <TableCell>245</TableCell>
                        <TableCell>78%</TableCell>
                        <TableCell>$12,250</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>UI/UX Design Masterclass</TableCell>
                        <TableCell>Jennifer Davis</TableCell>
                        <TableCell>187</TableCell>
                        <TableCell>65%</TableCell>
                        <TableCell>$9,350</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Python for Data Science</TableCell>
                        <TableCell>David Miller</TableCell>
                        <TableCell>156</TableCell>
                        <TableCell>82%</TableCell>
                        <TableCell>$7,800</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="flex justify-center mt-4">
                    <Button variant="outline">View Full Report</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;
