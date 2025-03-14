"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Blog() {
  const articles = [
    {
      title: "Building Scalable Web Applications with Next.js",
      excerpt: "Learn how to build scalable and performant web applications using Next.js and React.",
      image: "/placeholder.svg?height=300&width=600",
      date: "Mar 10, 2024",
      readTime: "8 min read",
      tags: ["Next.js", "React", "Web Development"],
      url: "/blog/building-scalable-web-applications",
    },
    {
      title: "Introduction to Machine Learning for Web Developers",
      excerpt: "A beginner-friendly guide to machine learning concepts for web developers.",
      image: "/placeholder.svg?height=300&width=600",
      date: "Feb 25, 2024",
      readTime: "12 min read",
      tags: ["Machine Learning", "JavaScript", "TensorFlow.js"],
      url: "/blog/machine-learning-for-web-developers",
    },
    {
      title: "Optimizing Database Performance in Node.js Applications",
      excerpt: "Tips and techniques for optimizing database performance in Node.js applications.",
      image: "/placeholder.svg?height=300&width=600",
      date: "Jan 18, 2024",
      readTime: "10 min read",
      tags: ["Node.js", "Database", "Performance"],
      url: "/blog/optimizing-database-performance",
    },
  ]

  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Blog
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Articles</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Sharing my knowledge and experiences in software engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={600}
                    height={300}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-col items-start gap-4 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="p-0 h-auto" asChild>
                    <Link href={article.url} className="flex items-center gap-2 text-primary">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

