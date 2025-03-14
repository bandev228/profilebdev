"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, GraduationCap, Award } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Tech Innovations Inc.",
      period: "Jun 2024 - Present",
      description:
        "Working on full-stack development using React, Node.js, and MongoDB. Implementing new features and improving existing ones.",
      type: "work",
    },
    {
      title: "Frontend Developer (Part-time)",
      company: "Web Solutions Agency",
      period: "Jan 2024 - May 2024",
      description:
        "Developed responsive web applications using React and Next.js. Collaborated with designers to implement UI/UX designs.",
      type: "work",
    },
    {
      title: "Bachelor of Science in Software Engineering",
      company: "University of Technology",
      period: "2022 - 2026 (Expected)",
      description:
        "Focusing on software development, algorithms, data structures, and system design. Maintaining a GPA of 3.8/4.0.",
      type: "education",
    },
    {
      title: "Full Stack Web Development Bootcamp",
      company: "Tech Academy",
      period: "Summer 2023",
      description: "Completed an intensive 12-week program covering modern web development technologies and practices.",
      type: "education",
    },
    {
      title: "Hackathon Winner - Best Use of AI",
      company: "TechFest 2023",
      period: "Nov 2023",
      description:
        "Developed an AI-powered application that won the 'Best Use of AI' category at the university hackathon.",
      type: "award",
    },
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      period: "2023 - Present",
      description:
        "Active contributor to several open-source projects, focusing on web technologies and developer tools.",
      type: "work",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="h-5 w-5" />
      case "education":
        return <GraduationCap className="h-5 w-5" />
      case "award":
        return <Award className="h-5 w-5" />
      default:
        return <Briefcase className="h-5 w-5" />
    }
  }

  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Resume
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience & Education</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="mt-12 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-muted" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${index % 2 === 0 ? "md:ml-auto md:mr-[50%] md:pr-12" : "md:mr-auto md:ml-[50%] md:pl-12"}`}
              style={{ maxWidth: "calc(50% - 24px)" }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                {getIcon(exp.type)}
              </div>

              <Card className={`w-full ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <CardDescription>{exp.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}

