import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import TechStack from "@/components/tech-stack"
import GithubActivity from "@/components/github-activity"

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description: "Personal portfolio showcasing software engineering projects and skills",
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <GithubActivity />
      <Experience />
      <Blog />
      <Contact />
    </main>
  )
}

