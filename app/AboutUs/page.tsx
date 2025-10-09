"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingParticles from "../../src/components/FloatingParticles";

export default function AboutUsPage(): React.ReactElement {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<main className="min-h-screen relative text-gray-800 overflow-x-hidden">
			{/* Navbar (match landing page) */}
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
			{/* Landing page animated background */}
			<FloatingParticles />

			{/* Centered three-card layout */}
			<section className="px-4 sm:px-6 lg:px-10 py-16 lg:py-20 max-w-6xl mx-auto">
				{/* About Us */}
				<div className="relative mb-8 text-center">
					<div className="absolute -inset-6 bg-blue-500/10 blur-2xl rounded-3xl" />
					<div className="relative rounded-3xl border border-white/25 bg-white/5 backdrop-blur-sm p-6 sm:p-10 shadow-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
						<p className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-white bg-white/6 border border-white/10 rounded-full px-3 py-1 mb-3">
							<span>🚀</span> About PadhaiDunia
						</p>
						<h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
							<span>Empowering the </span>
							<span className="text-white/90">Future of Learners</span>
						</h1>
						<p className="mt-4 mx-auto max-w-3xl text-white/80">
							PadhaiDunia is a modern learning platform where students explore curated courses, practise exams, and discover top colleges—all in one place. We blend technology, mentorship, and community to make high‑quality education accessible, engaging, and outcome‑driven.
						</p>
						<p className="mt-3 mx-auto max-w-3xl text-white/70">
							We help every learner build real skills, gain confidence, and accelerate their careers through personalized learning paths and measurable progress.
						</p>
					</div>
				</div>

				{/* Mission */}
				<div className="relative mb-8 text-center">
					<div className="absolute -inset-6 bg-purple-500/10 blur-2xl rounded-3xl" />
					<div className="relative rounded-3xl border border-white/20 bg-white/6 backdrop-blur-sm p-6 sm:p-10 shadow-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
						<h2 className="text-2xl sm:text-3xl font-bold text-white">Our Mission</h2>
						<p className="mt-3 mx-auto max-w-3xl text-white/80">
							To deliver accessible, outcome‑oriented education through interactive learning, real‑time feedback, and actionable insights—so every student can learn faster, smarter, and with confidence.
						</p>
						<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
							{[
								{ title: "Personalized Paths", desc: "Adaptive recommendations keep learning relevant." },
								{ title: "Practice That Counts", desc: "Exam‑style questions with analytics." },
								{ title: "Guided Decisions", desc: "Transparent college data for choices." },
							].map((card, idx) => (
								<motion.div
									key={card.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: idx * 0.08 }}
									whileHover={{ y: -6 }}
									className="glass rounded-xl p-8 text-center hover-glow group cursor-pointer"
								>
									<h3 className="font-semibold text-white">{card.title}</h3>
									<p className="text-sm text-white/70 mt-2">{card.desc}</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				{/* Features */}
				<div className="relative text-center">
					<div className="absolute -inset-6 bg-pink-500/10 blur-2xl rounded-3xl" />
					<div className="relative rounded-3xl border border-white/20 bg-white/6 backdrop-blur-sm p-6 sm:p-10 shadow-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
						<h2 className="text-2xl sm:text-3xl font-bold text-white">Key Features</h2>
						<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
							{[
								{
									title: "AI-Powered Learning",
									desc: "Personalized learning paths powered by advanced AI algorithms that adapt to your learning style and pace.",
									icon: "🧠",
								},
								{
									title: "Personalized Progress Tracking",
									desc: "Advanced analytics to track your learning journey with detailed insights and performance metrics.",
									icon: "📈",
								},
								{
									title: "Community & Collaboration",
									desc: "Connect with fellow learners, join study groups, and collaborate on projects with peers worldwide.",
									icon: "👥",
								},
								{
									title: "Gamified Learning Experience",
									desc: "Earn badges, complete challenges, and level up your skills with our engaging gamification system.",
									icon: "🎮",
								},
								// Original landing page features (keep these)
								{
									title: "Interactive Courses",
									desc: "Video + hands‑on tasks",
									icon: "📘",
								},
								{
									title: "Mock Exams",
									desc: "Timed/topic‑wise",
									icon: "🧠",
								},
								{
									title: "College Finder",
									desc: "Compare programs",
									icon: "🏫",
								},
								{
									title: "Mentor Support",
									desc: "Guidance that sticks",
									icon: "🤝",
								},
							].map((f, idx) => (
								<motion.div
									key={f.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: idx * 0.08 }}
									whileHover={{ y: -6 }}
									className="glass rounded-xl p-8 text-center hover-glow group cursor-pointer"
								>
									<div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
										<span className="text-2xl">{f.icon}</span>
									</div>
									<h3 className="mt-2 font-semibold text-white">{f.title}</h3>
									<p className="text-sm text-white/70 mt-2">{f.desc}</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
