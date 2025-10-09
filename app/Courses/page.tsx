"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingParticles from "../../src/components/FloatingParticles";

const courses = [
  {
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript basics to build responsive websites from scratch.",
    duration: "8 weeks",
    level: "Beginner",
    price: "₹2,999",
  },
  {
    title: "React.js Mastery",
    description: "Master React.js with hooks, state management, and modern development practices.",
    duration: "10 weeks",
    level: "Intermediate",
    price: "₹4,999",
  },
  {
    title: "Full Stack Development",
    description: "Complete web development course covering frontend, backend, and database technologies.",
    duration: "16 weeks",
    level: "Advanced",
    price: "₹8,999",
  },
  {
    title: "Python Programming",
    description: "Learn Python from basics to advanced concepts including data structures and algorithms.",
    duration: "12 weeks",
    level: "Beginner",
    price: "₹3,499",
  },
  {
    title: "Data Science & Analytics",
    description: "Analyze data, build models, and visualize results using Python and industry tools.",
    duration: "14 weeks",
    level: "Intermediate",
    price: "₹7,499",
  },
  {
    title: "Mobile App Development",
    description: "Build cross-platform mobile apps using React Native and modern frameworks.",
    duration: "12 weeks",
    level: "Intermediate",
    price: "₹6,999",
  },
  {
    title: "UI/UX Design",
    description: "Design beautiful, user-friendly interfaces and experiences for web and mobile.",
    duration: "8 weeks",
    level: "Beginner",
    price: "₹3,999",
  },
  {
    title: "Cloud Computing & DevOps",
    description: "Learn cloud platforms, CI/CD, and DevOps practices for scalable deployments.",
    duration: "10 weeks",
    level: "Advanced",
    price: "₹9,499",
  },
];

export default function CoursesPage(): React.ReactElement {
  return (
    <main className="min-h-screen relative text-gray-800 overflow-x-hidden">
      {/* Navbar (same as About Us) */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full z-50 glass border-b border-white/10 backdrop-blur-xl"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary"
          >
            <Link href="/">PadhaiDunia</Link>
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/AboutUs" className="text-foreground hover:text-primary transition-colors">About Us</Link>
            <Link href="/Courses" className="text-foreground hover:text-primary transition-colors">Courses</Link>
            <Link href="/teams" className="text-foreground hover:text-primary transition-colors">Team</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact Us</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:inline-block bg-primary text-primary-foreground px-3 py-2 rounded-md">Login</button>
            <button className="hidden md:inline-block bg-primary-600 text-white px-4 py-2 rounded-xl">Sign Up</button>
          </div>
        </div>
      </motion.nav>
      {/* Animated background */}
      <FloatingParticles />

      {/* Courses Section */}
      <section className="px-4 sm:px-6 lg:px-10 py-16 lg:py-20 max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white mb-4">
            Explore Our Courses
          </h1>
          <p className="mx-auto max-w-2xl text-white/80 mb-8">
            Learn cutting-edge skills with our modern, interactive courses.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {courses.map((course, idx) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{
                  y: -16,
                }}
                className="rounded-2xl p-10 min-h-[410px] flex flex-col justify-between border border-cyan-400/20 bg-white/10 backdrop-blur-md transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <h2 className="text-xl font-bold text-cyan-300 mb-2">{course.title}</h2>
                  <p className="text-white/80 mb-8">{course.description}</p>
                </div>
                <div className="flex justify-between items-center text-sm text-white/70 mb-4">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                <div className="text-lg font-semibold text-cyan-300 mb-6">{course.price}</div>
                <div className="mt-auto">
                  <button className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-2 rounded-lg transition-colors">
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}