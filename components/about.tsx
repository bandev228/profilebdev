"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Code, Database, Globe, Lightbulb, Server } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "Java", "Spring Boot"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "CI/CD", "AWS", "Git", "GitHub Actions"] },
    { category: "Other", items: ["Machine Learning", "Data Science", "UI/UX Design", "Agile", "Problem Solving"] },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of Technology",
      period: "2022 - 2026",
      description: "Focusing on software development, algorithms, data structures, and system design.",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Tech Academy",
      period: "Summer 2023",
      description: "Intensive 12-week program covering modern web development technologies and practices.",
    },
  ]

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2024",
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2023",
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2024",
    },
  ]

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <Badge variant="outline" className="px-3 py-1 text-sm">
            About Me
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vo Tan Ban</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A passionate software engineering student with a focus on creating innovative solutions and learning
            cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Profile"
                width={600}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg">
              <p className="text-sm font-medium">"Passionate about building software that makes a difference."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
              </TabsList>
              <TabsContent value="skills" className="mt-6 space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      {skillGroup.category === "Frontend" && <Globe className="h-4 w-4" />}
                      {skillGroup.category === "Backend" && <Server className="h-4 w-4" />}
                      {skillGroup.category === "Database" && <Database className="h-4 w-4" />}
                      {skillGroup.category === "DevOps" && <Code className="h-4 w-4" />}
                      {skillGroup.category === "Other" && <Lightbulb className="h-4 w-4" />}
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <Badge key={idx} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="education" className="mt-6 space-y-4">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="certifications" className="mt-6 space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                    <Brain className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-medium">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

