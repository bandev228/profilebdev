"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "AI-Powered Task Manager",
      description: "A task management application with AI features to prioritize and categorize tasks automatically.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "TensorFlow.js"],
      category: "web",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
      details: {
        challenge:
          "Creating an intelligent system that can understand and categorize tasks based on natural language input.",
        solution:
          "Implemented a machine learning model trained on task descriptions to automatically categorize and prioritize tasks.",
        features: [
          "Natural language processing for task analysis",
          "Automatic task categorization and prioritization",
          "Smart deadline suggestions based on task complexity",
          "Personalized task recommendations",
        ],
        technologies: ["React", "Node.js", "Express", "MongoDB", "TensorFlow.js", "Natural.js"],
      },
    },
    {
      id: 2,
      title: "Real-time Collaboration Platform",
      description:
        "A platform for teams to collaborate in real-time with document editing, chat, and project management.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
      category: "web",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
      details: {
        challenge: "Building a system that allows multiple users to edit documents simultaneously without conflicts.",
        solution:
          "Implemented operational transformation algorithms and WebSocket connections to enable real-time collaboration.",
        features: [
          "Real-time document editing with conflict resolution",
          "Integrated chat and commenting system",
          "Project management with Kanban boards",
          "File sharing and version control",
        ],
        technologies: ["Next.js", "Socket.io", "PostgreSQL", "Redis", "AWS S3", "Docker"],
      },
    },
    {
      id: 3,
      title: "Smart Home IoT Dashboard",
      description: "A dashboard for monitoring and controlling IoT devices in a smart home environment.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MQTT", "InfluxDB"],
      category: "iot",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      details: {
        challenge: "Creating a unified interface for diverse IoT devices with different protocols and capabilities.",
        solution:
          "Developed a modular architecture with protocol adapters and a unified API for device control and monitoring.",
        features: [
          "Real-time device monitoring and control",
          "Automated routines and scenes",
          "Energy usage analytics",
          "Voice command integration",
        ],
        technologies: ["React", "Node.js", "MQTT", "InfluxDB", "Raspberry Pi", "Arduino"],
      },
    },
    {
      id: 4,
      title: "Predictive Analytics Dashboard",
      description: "A dashboard for visualizing and analyzing business data with predictive analytics capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Python", "Flask", "TensorFlow"],
      category: "ml",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      details: {
        challenge: "Processing large datasets efficiently and generating accurate predictions for business metrics.",
        solution:
          "Implemented a data pipeline with preprocessing, feature engineering, and machine learning models for prediction.",
        features: [
          "Interactive data visualizations",
          "Predictive analytics for key metrics",
          "Anomaly detection",
          "Automated reporting",
        ],
        technologies: ["React", "Python", "Flask", "TensorFlow", "Pandas", "D3.js"],
      },
    },
    {
      id: 5,
      title: "Mobile Fitness Tracker",
      description: "A mobile application for tracking fitness activities, nutrition, and health metrics.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Firebase", "HealthKit", "Google Fit"],
      category: "mobile",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      details: {
        challenge: "Integrating with various health and fitness APIs while ensuring data privacy and accuracy.",
        solution:
          "Created a modular architecture with adapters for different health platforms and implemented secure data storage.",
        features: [
          "Activity tracking with GPS",
          "Nutrition logging and analysis",
          "Health metrics monitoring",
          "Personalized workout recommendations",
        ],
        technologies: ["React Native", "Firebase", "HealthKit", "Google Fit", "Redux", "Node.js"],
      },
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Stripe", "MongoDB", "Redux"],
      category: "web",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
      details: {
        challenge: "Building a scalable and secure e-commerce platform with seamless payment processing.",
        solution:
          "Implemented a microservices architecture with separate services for product management, cart, and payments.",
        features: [
          "Product catalog with search and filtering",
          "Shopping cart and wishlist",
          "Secure payment processing",
          "Order management and tracking",
        ],
        technologies: ["Next.js", "Stripe", "MongoDB", "Redux", "Node.js", "AWS"],
      },
    },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ml", name: "Machine Learning" },
    { id: "iot", name: "IoT" },
  ]

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Portfolio
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Explore my latest projects showcasing my skills and expertise in software engineering
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mt-12" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden group">
                    <div className="relative overflow-hidden aspect-video">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {project.github && (
                          <Button
                            size="icon"
                            variant="ghost"
                            asChild
                            className="text-white border border-white/20 hover:bg-white/10"
                          >
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-5 w-5" />
                              <span className="sr-only">GitHub</span>
                            </Link>
                          </Button>
                        )}
                        {project.demo && (
                          <Button
                            size="icon"
                            variant="ghost"
                            asChild
                            className="text-white border border-white/20 hover:bg-white/10"
                          >
                            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-5 w-5" />
                              <span className="sr-only">Live Demo</span>
                            </Link>
                          </Button>
                        )}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="text-white border border-white/20 hover:bg-white/10"
                              onClick={() => setSelectedProject(project)}
                            >
                              <Eye className="h-5 w-5" />
                              <span className="sr-only">View Details</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            {selectedProject && (
                              <>
                                <DialogHeader>
                                  <DialogTitle>{selectedProject.title}</DialogTitle>
                                  <DialogDescription>{selectedProject.description}</DialogDescription>
                                </DialogHeader>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                  <div>
                                    <Image
                                      src={selectedProject.image || "/placeholder.svg"}
                                      alt={selectedProject.title}
                                      width={600}
                                      height={400}
                                      className="rounded-lg object-cover w-full"
                                    />
                                  </div>
                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="font-semibold mb-2">Challenge</h4>
                                      <p className="text-sm text-muted-foreground">
                                        {selectedProject.details.challenge}
                                      </p>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">Solution</h4>
                                      <p className="text-sm text-muted-foreground">
                                        {selectedProject.details.solution}
                                      </p>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">Key Features</h4>
                                      <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                                        {selectedProject.details.features.map((feature, idx) => (
                                          <li key={idx}>{feature}</li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">Technologies</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {selectedProject.details.technologies.map((tech, idx) => (
                                          <Badge key={idx} variant="secondary">
                                            {tech}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                      {selectedProject.github && (
                                        <Button size="sm" variant="outline" asChild>
                                          <Link href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="h-4 w-4 mr-2" />
                                            View Code
                                          </Link>
                                        </Button>
                                      )}
                                      {selectedProject.demo && (
                                        <Button size="sm" asChild>
                                          <Link href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            Live Demo
                                          </Link>
                                        </Button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <CardHeader className="flex-grow">
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex flex-wrap gap-2 pt-0">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

