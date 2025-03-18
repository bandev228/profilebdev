"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, GitBranch, GitCommit, GitPullRequest, Star, Code, Calendar } from "lucide-react"
import Link from "next/link"

export default function GithubActivity() {
  // Mock data - in a real app, this would come from GitHub API
  const repositories = [
    {
      name: "ai-task-manager",
      description: "AI-powered task management application",
      language: "TypeScript",
      stars: 124,
      forks: 32,
      lastUpdated: "2 days ago",
      url: "https://github.com/username/ai-task-manager",
    },
    {
      name: "realtime-collab",
      description: "Real-time collaboration platform",
      language: "JavaScript",
      stars: 98,
      forks: 24,
      lastUpdated: "1 week ago",
      url: "https://github.com/username/realtime-collab",
    },
    {
      name: "smart-home-dashboard",
      description: "Dashboard for IoT smart home devices",
      language: "TypeScript",
      stars: 76,
      forks: 18,
      lastUpdated: "3 weeks ago",
      url: "https://github.com/username/smart-home-dashboard",
    },
    {
      name: "ml-analytics",
      description: "Machine learning analytics library",
      language: "Python",
      stars: 145,
      forks: 37,
      lastUpdated: "1 month ago",
      url: "https://github.com/username/ml-analytics",
    },
  ]

  const contributions = [
    { date: "2024-03-01", count: 5 },
    { date: "2024-03-02", count: 3 },
    { date: "2024-03-03", count: 7 },
    { date: "2024-03-04", count: 2 },
    { date: "2024-03-05", count: 4 },
    { date: "2024-03-06", count: 6 },
    { date: "2024-03-07", count: 8 },
  ]

  const activities = [
    {
      type: "commit",
      repo: "ai-task-manager",
      message: "Add natural language processing for task analysis",
      date: "2 days ago",
    },
    {
      type: "pr",
      repo: "realtime-collab",
      message: "Implement real-time document editing",
      date: "4 days ago",
    },
    {
      type: "issue",
      repo: "smart-home-dashboard",
      message: "Fix device connection issues",
      date: "1 week ago",
    },
    {
      type: "star",
      repo: "ml-analytics",
      message: "Starred tensorflow/tensorflow",
      date: "2 weeks ago",
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "commit":
        return <GitCommit className="h-4 w-4" />
      case "pr":
        return <GitPullRequest className="h-4 w-4" />
      case "issue":
        return <Activity className="h-4 w-4" />
      case "star":
        return <Star className="h-4 w-4" />
      default:
        return <Code className="h-4 w-4" />
    }
  }

  const getLanguageColor = (language: string) => {
    switch (language) {
      case "TypeScript":
        return "bg-blue-500"
      case "JavaScript":
        return "bg-yellow-500"
      case "Python":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section id="github" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Open Source
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">GitHub Activity</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            My contributions to open source and personal projects
          </p>
        </motion.div>

        <Tabs defaultValue="repositories" className="mt-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="repositories">Repositories</TabsTrigger>
            <TabsTrigger value="contributions">Contributions</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="repositories">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repositories.map((repo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">
                        <Link
                          href={repo.url}
                          className="hover:underline flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code className="h-5 w-5" />
                          {repo.name}
                        </Link>
                      </CardTitle>
                      <CardDescription>{repo.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <div className={`h-3 w-3 rounded-full ${getLanguageColor(repo.language)}`} />
                            <span>{repo.language}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            <span>{repo.stars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitBranch className="h-4 w-4" />
                            <span>{repo.forks}</span>
                          </div>
                        </div>
                        <div className="text-muted-foreground">Updated {repo.lastUpdated}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contributions">
            <Card>
              <CardHeader>
                <CardTitle>Contribution Activity</CardTitle>
                <CardDescription>My GitHub contributions over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-1 p-4">
                  {contributions.map((day, index) => (
                    <motion.div
                      key={index}
                      className="w-full bg-primary rounded-t-md"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${day.count * 10}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={{ maxHeight: "100%" }}
                    >
                      <div className="sr-only">
                        {day.count} contributions on {day.date}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Last 7 days</span>
                  </div>
                  <div>Total: {contributions.reduce((acc, day) => acc + day.count, 0)} contributions</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>My latest actions on GitHub</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 pb-4 border-b last:border-0"
                    >
                      <div className="bg-muted rounded-full p-2">{getActivityIcon(activity.type)}</div>
                      <div className="flex-1">
                        <div className="font-medium">{activity.message}</div>
                        <div className="text-sm text-muted-foreground">
                          in <span className="font-medium">{activity.repo}</span> • {activity.date}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

