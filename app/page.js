"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";

export default function LandingPage() {
  return (
    <>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
<section className="w-full py-12 md:py-24 lg:py-32 bg-background">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-extrabold tracking-tight text-center mb-16 gradient-title animate-gradient">
      Powerful Features for Your Career Growth
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px 4px rgba(129, 90, 213, 0.5)" }}
          className="bg-white dark:bg-slate-900 rounded-2xl p-8 cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-400 flex items-center justify-center mb-6 text-white text-3xl drop-shadow-lg">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{feature.title}</h3>
          <p className="text-gray-700 dark:text-gray-400 max-w-xs">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-muted-foreground">Industries Covered</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">1000+</h3>
              <p className="text-muted-foreground">Interview Questions</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-muted-foreground">AI Support</p>
            </div>
          </div>
        </div>
      </section>

     {/* How It Works Section */}
<section className="w-full py-12 md:py-24 bg-background">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl font-bold mb-4 gradient-title animate-gradient">How It Works</h2>
      <p className="text-muted-foreground">
        Four simple steps to accelerate your career growth
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {howItWorks.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(132, 86, 236, 0.4)" }}
          className="cursor-pointer"
        >
          <div className="rounded-xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400">
          
            <div className="clean-card p-6 flex flex-col items-center text-center space-y-4 bg-background rounded-lg">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Testimonial Section */}
<section className="w-full py-12 md:py-24 bg-muted/50">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-extrabold text-center mb-16 gradient-title animate-gradient">
      What Our Users Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {testimonial.map((item, index) => (
        <motion.div
          key={index}
          className="bg-background rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 p-8 flex flex-col cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
        >
          <div className="flex items-center space-x-5 mb-6">
            <div className="relative h-16 w-16 flex-shrink-0 rounded-full overflow-hidden border-4 border-gradient-to-tr from-purple-500 via-pink-600 to-yellow-400 shadow-lg">
              <Image
                width={64}
                height={64}
                src={item.image}
                alt={item.author}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="font-semibold text-lg text-foreground">{item.author}</p>
              <p className="text-sm text-muted-foreground">{item.role}</p>
              <p className="text-sm text-primary font-semibold">{item.company}</p>
            </div>
          </div>
          <blockquote className="relative pl-10 text-gray-700 dark:text-gray-300 italic text-lg">
            <span className="absolute top-0 left-0 text-5xl text-primary select-none pointer-events-none">“</span>
            {item.quote}
            <span className="absolute bottom-0 right-0 text-5xl text-primary select-none pointer-events-none">”</span>
          </blockquote>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-title animate-gradient">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Find answers to common questions about our platform</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

     {/* CTA Section */}
<section className="w-full">
  <div className="mx-auto py-24 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-400 shadow-xl">
    <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto px-6 md:px-0">
      <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
         Advance. Achieve. Aspire.
      </h2>
      <p className="max-w-[600px] text-white text-opacity-80 text-lg md:text-xl drop-shadow-md">
         Join a new wave of professionals scaling new heights with Aspireon's smart tools, career insights, and interview mastery.
      </p>
      <Link href="/dashboard" passHref>
        <Button
          size="lg"
          variant="secondary"
          className="h-12 px-8 mt-5 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center gap-2 animate-pulse"
        >
           Begin Your Career Upgrade <ArrowRight className="ml-1 h-5 w-5 stroke-2" />
        </Button>
      </Link>
    </div>
  </div>
</section>
    </>
  );
}
