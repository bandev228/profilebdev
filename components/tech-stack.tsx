"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiGithubactions,
  SiPython,
  SiDjango,
  SiTensorflow,
  SiFigma,
} from "react-icons/si"

export default function TechStack() {
  const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB", category: "frontend" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "frontend" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "frontend" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "backend" },
    { name: "Express", icon: SiExpress, color: "#000000", category: "backend" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "database" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "database" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", category: "devops" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", category: "devops" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900", category: "devops" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF", category: "devops" },
    { name: "Python", icon: SiPython, color: "#3776AB", category: "backend" },
    { name: "Django", icon: SiDjango, color: "#092E20", category: "backend" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", category: "ml" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "design" },
  ]

  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "devops", name: "DevOps" },
    { id: "ml", name: "Machine Learning" },
    { id: "design", name: "Design" },
  ]

  return (
    <section id="tech-stack" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Technologies
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Tech Stack</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            The technologies, frameworks, and tools I use to bring ideas to life
          </p>
        </motion.div>

        <Card className="mt-12 border-none bg-transparent shadow-none">
          <CardContent className="p-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex flex-col items-center justify-center p-4 bg-background rounded-xl border hover:border-primary/50 transition-all">
                          <tech.icon style={{ color: tech.color }} className="h-10 w-10 mb-2" />
                          <span className="text-xs font-medium">{tech.name}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tech.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Technology Proficiency</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Frontend Development</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Backend Development</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">DevOps & Cloud</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Machine Learning</span>
                    <span className="text-sm text-muted-foreground">70%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">UI/UX Design</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

