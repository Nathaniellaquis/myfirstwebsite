"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Home() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: buttonsRef, inView: buttonsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative w-full py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-8 relative z-10">
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h1 className="purple-gradient-text text-5xl font-extrabold tracking-tight sm:text-6xl mb-4">
              Welcome to My First Website
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A beautiful, responsive website built with Next.js and Shadcn UI components,
              showcasing modern design principles and clean code.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={scrollToFeatures} className="rounded-full shadow-lg hover:shadow-xl transition-all">
              Explore Features
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact} className="rounded-full">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the powerful components and features that make this website special.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Design",
                desc: "Beautiful UI components",
                content: "Built with Shadcn UI, providing a sleek and professional user experience."
              },
              {
                title: "Responsive",
                desc: "Works on all devices",
                content: "Fully responsive design that looks great on desktops, tablets, and mobile phones."
              },
              {
                title: "Fast Performance",
                desc: "Optimized for speed",
                content: "Lightning-fast page loads and smooth animations for the best user experience."
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                custom={i}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="card-hover h-full">
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>
                      {feature.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.content}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-muted/50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <Card className="shadow-xl border-0 overflow-hidden glass-effect">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
                <CardDescription>
                  We'd love to hear from you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Enter your name" className="rounded-md" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Enter your email" className="rounded-md" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <div className="rounded-md border bg-background min-h-[100px] p-3">
                    <textarea
                      id="message"
                      placeholder="Type your message"
                      className="w-full h-full bg-transparent focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="default" className="w-full rounded-md shadow-md hover:shadow-lg transition-all">
                  Send Message
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Button Showcase */}
      <motion.section
        ref={buttonsRef}
        initial="hidden"
        animate={buttonsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Button Styles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore different button variants available in our design system.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto"
          >
            {[
              { variant: "default", label: "Primary" },
              { variant: "secondary", label: "Secondary" },
              { variant: "outline", label: "Outline" },
              { variant: "ghost", label: "Ghost" },
              { variant: "link", label: "Link" },
              { variant: "destructive", label: "Destructive" }
            ].map((btn, i) => (
              <motion.div
                key={btn.variant}
                variants={itemVariants}
                custom={i}
                transition={{ delay: i * 0.05 }}
              >
                <Button
                  variant={btn.variant as any}
                  size="lg"
                  className="w-full"
                >
                  {btn.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
