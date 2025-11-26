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

function StatCardInline() {
  return null;
}

function StatCard({ icon, from = 0, to = 100, suffix = "", label = "", delay = 0, accent }) {
  const { useState, useEffect, useRef } = React;
  const [value, setValue] = useState(from);
  const rafRef = useRef(null);

  useEffect(() => {
    let start = null;
    const duration = 1100 + delay;
    const diff = to - from;

    function step(t) {
      if (!start) start = t;
      const elapsed = t - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(from + diff * eased);
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(to);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [from, to, delay]);

  return (
    <motion.div
      className="stat-card rounded-xl p-6 flex flex-col items-start gap-4 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] border border-white/6"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      whileHover={{ scale: 1.02 }}
      style={{ backdropFilter: "blur(6px)", boxShadow: "0 10px 30px rgba(2,6,23,0.45)" }}
      tabIndex={0}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div style={{ width: 44, height: 44, borderRadius: 12, display: "grid", placeItems: "center", background: accent }}>
            <div className="text-white">{icon}</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white leading-none">
              {value}
              <span className="text-lg ml-1">{suffix}</span>
            </div>
            <div className="text-sm text-muted-foreground">{label}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function LandingPage() {
  return (
    <>
      <div className="grid-background"></div>

      <HeroSection />

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

      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <img
          src="/mnt/data/b7bcf541-4759-4b8d-bc32-27336863130e.png"
          alt="decor"
          className="pointer-events-none absolute right-0 top-6 w-[420px] opacity-8 mix-blend-overlay rounded-xl"
        />

        <div aria-hidden className="absolute -left-24 top-6 w-72 h-72 rounded-full blur-3xl" style={{ background: "radial-gradient(circle,#7C3AED18,#06B6D418)" }} />
        <div aria-hidden className="absolute right-8 -bottom-20 w-96 h-96 rounded-full blur-3xl" style={{ background: "radial-gradient(circle,#FF9A7620,#FFD66B18)" }} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold gradient-title animate-gradient">Numbers That Matter</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Real-world impact — measurable growth for our users powered by AI and tailored coaching.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <StatCard
              icon={<Trophy className="h-6 w-6" />}
              from={0}
              to={50}
              suffix="+"
              label="Industries Covered"
              delay={0}
              accent="linear-gradient(90deg,#7C3AED,#FF9A76)"
            />
            <StatCard
              icon={<Sparkles className="h-6 w-6" />}
              from={0}
              to={1000}
              suffix="+"
              label="Interview Questions"
              delay={120}
              accent="linear-gradient(90deg,#06B6D4,#7C3AED)"
            />
            <StatCard
              icon={<CheckCircle2 className="h-6 w-6" />}
              from={0}
              to={95}
              suffix="%"
              label="Success Rate"
              delay={240}
              accent="linear-gradient(90deg,#FFD66B,#FF9A76)"
            />
            <StatCard
              icon={<Target className="h-6 w-6" />}
              from={0}
              to={24}
              suffix="/7"
              label="AI Support"
              delay={360}
              accent="linear-gradient(90deg,#FF9A76,#7C3AED)"
            />
          </div>
        </div>

        <style jsx>{`
          .stat-card {
            transition: transform .28s ease, box-shadow .28s ease;
          }
          .stat-card:hover,
          .stat-card:focus {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 18px 50px rgba(12,8,24,0.6);
          }
        `}</style>

        <StatCardInline />
      </section>

      <section className="w-full py-16 md:py-24 bg-background relative overflow-hidden">
        <div aria-hidden className="absolute -left-28 top-6 w-72 h-72 rounded-full blur-3xl" style={{ background: "radial-gradient(circle,#7C3AED25,#06B6D425)" }} />
        <div aria-hidden className="absolute right-6 -bottom-16 w-96 h-96 rounded-full blur-3xl" style={{ background: "radial-gradient(circle,#FF9A7620,#FFD66B20)" }} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 gradient-title animate-gradient">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth — fast, clear, and effective.
            </p>
          </div>

          <div className="hidden md:block absolute left-0 right-0 top-[50%] pointer-events-none z-0">
            <div className="mx-auto max-w-6xl relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/6 to-transparent" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
            {howItWorks.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.03, rotate: -0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12, type: "spring", stiffness: 110 }}
                className="relative"
              >
                <div
                  className="p-6 md:p-8 rounded-2xl shadow-lg overflow-hidden"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.018), rgba(255,255,255,0.01))",
                    backdropFilter: "blur(8px)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.04)"
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg"
                      style={{ background: "linear-gradient(135deg,#7C3AED,#FF9A76)", boxShadow: "0 6px 20px rgba(124,58,237,0.16)" }}
                    >
                      {i + 1}
                    </div>
                    <div className="hidden md:block flex-1">
                      <div className="h-1/2" />
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4" style={{ background: "linear-gradient(90deg, rgba(124,58,237,0.12), rgba(6,182,212,0.08))" }}>
                    <div className="text-2xl text-white/90">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-white/95">{item.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)" }} />
                      <span className="text-xs text-gray-400">Step {i + 1}</span>
                    </div>
                    <motion.div
                      initial={{ x: -6, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.05, duration: 0.45 }}
                      className="text-xs text-gray-400"
                    >
                      {i === howItWorks.length - 1 ? "Finish" : "Next"}
                    </motion.div>
                  </div>
                </div>

                <div className={`hidden md:block absolute -left-10 top-6 w-5 h-5 rounded-full`} style={{ background: "linear-gradient(90deg,#7C3AED,#FF9A76)", boxShadow: "0 6px 18px rgba(124,58,237,0.12)" }} />
              </motion.div>
            ))}
          </div>

          <div className="md:hidden mt-8">
            <div className="space-y-6">
              {howItWorks.map((item, i) => (
                <motion.div
                  key={`m-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: "linear-gradient(135deg,#7C3AED,#FF9A76)" }}>{i + 1}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-white/95">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full py-12 md:py-24 relative overflow-hidden"
        style={{
          background: `
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' fill='none' stroke='rgba(255,255,255,0.04)'><path d='M0 0 L300 0 L300 300 L0 300 Z M50 0 L50 300 M100 0 L100 300 M150 0 L150 300 M200 0 L200 300 M250 0 L250 300 M0 50 L300 50 M0 100 L300 100 M0 150 L300 150 M0 200 L300 200 M0 250 L300 250'/></svg>"),
  linear-gradient(180deg, #07040f, #0e0918);
background-size: 300px 300px, 100% 100%;
    `
        }}
      >
        <img
          src="/mnt/data/b7bcf541-4759-4b8d-bc32-27336863130e.png"
          alt="decor"
          className="pointer-events-none absolute -right-6 top-6 w-[480px] opacity-10 mix-blend-overlay rounded-xl"
        />
        <div aria-hidden className="absolute -left-24 top-8 w-72 h-72 rounded-full blur-3xl" style={{ background: "radial-gradient(circle,#7C3AED30,#06B6D430)" }} />
        <div aria-hidden className="absolute right-8 -bottom-20 w-96 h-96 rounded-full blur-3xl" style={{ background: "radial-gradient(circle,#FF9A7630,#FFD66B30)" }} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#FF9A76,#7C3AED)" }}>
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#FF9A76,#FFD66B)" }}>
                  Aspireon Stories
                </h2>
                <p className="text-sm text-gray-400 mt-1">Real results from people using Aspireon to accelerate their careers.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {testimonial.map((item, idx) => (
              <motion.div
                key={item.author}
                initial={{ opacity: 0, y: 30, rotate: idx === 1 ? 0 : idx === 0 ? -1 : 1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ scale: 1.02, y: -4 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.12, type: "spring", stiffness: 100 }}
                className={`relative transform-gpu ${idx === 1 ? "md:-mt-6" : idx === 0 ? "md:mt-6 md:-rotate-1" : "md:mt-12 md:rotate-1"}`}
              >
                <div
                  className="rounded-2xl p-6 md:p-8 overflow-hidden shadow-[0_20px_60px_rgba(2,6,23,0.65)]"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                    backdropFilter: "blur(8px)",
                    borderRadius: "18px",
                    border: "2px solid transparent",
                    borderImageSlice: 1,
                    borderImageSource: "linear-gradient(90deg,#7C3AED,#06B6D4)",
                  }}
                >
                  <div aria-hidden className="absolute -top-6 -right-6 w-28 h-20 rounded-tr-2xl rounded-bl-2xl" style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", transform: "skewX(-12deg)" }} />

                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full p-0.5" style={{ background: "linear-gradient(90deg,#7C3AED,#FF9A76)" }}>
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/5">
                        <Image src={item.image} width={64} height={64} alt={item.author} className="object-cover w-full h-full" />
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-semibold leading-tight">{item.author}</p>
                      <p className="text-xs text-gray-400">{item.role} <span className="text-purple-300">— {item.company}</span></p>
                    </div>
                  </div>

                  <blockquote className="text-gray-200 md:text-lg leading-relaxed italic relative pl-6">
                    <span className="absolute left-0 top-0 text-4xl text-primary/30 select-none pointer-events-none">“</span>
                    {item.quote}
                    <span className="absolute right-0 bottom-0 text-4xl text-primary/30 select-none pointer-events-none">”</span>
                  </blockquote>

                  <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <div className="flex items-center gap-2 mt-4 justify-end">
                    <span className="w-2 h-2 rounded-full bg-purple-400 opacity-80" />
                    <span className="w-2 h-2 rounded-full bg-blue-400 opacity-50" />
                    <span className="w-2 h-2 rounded-full bg-pink-400 opacity-30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
  className="w-full py-16 md:py-24 relative overflow-hidden"
  style={{
    backgroundImage: `
      linear-gradient(180deg, rgba(8,6,12,0.86), rgba(11,7,16,0.92)),
      radial-gradient(circle at 10% 20%, rgba(124,58,237,0.12), transparent 8%),
      radial-gradient(circle at 90% 80%, rgba(255,154,118,0.10), transparent 12%),
      url("/mnt/data/b7bcf541-4759-4b8d-bc32-27336863130e.png")
    `,
    backgroundSize: "cover, cover, cover, cover",
    backgroundBlendMode: "overlay, normal, normal, overlay",
    WebkitBackdropFilter: "saturate(120%) blur(6px)",
    backdropFilter: "saturate(120%) blur(6px)"
  }}
>
  <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none" />
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="max-w-3xl mx-auto text-center mb-10">
      <div className="inline-flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#FF9A76,#7C3AED)" }}>
          <span className="text-white font-bold">Q</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#FF9A76,#FFD66B)" }}>
          Frequently Asked Questions
        </h2>
      </div>
      <p className="text-sm md:text-base text-muted-foreground">
        Clear answers to common questions — get started faster and with confidence.
      </p>
    </div>

    <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
        >
          <div
            className="rounded-2xl p-1"
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
              border: "1px solid rgba(255,255,255,0.04)",
              backdropFilter: "blur(8px)"
            }}
          >
            <Accordion type="single" collapsible>
              <AccordionItem value={`faq-${i}`}>
                <AccordionTrigger
  className="flex items-center justify-between gap-4 px-5 py-4 text-left rounded-xl bg-transparent [&>svg]:hidden"
>
  <div className="flex items-start gap-4">
    <div
      className="w-10 h-10 rounded-lg grid place-items-center"
      style={{ background: "linear-gradient(90deg,#7C3AED,#FF9A76)" }}
    >
      <span className="text-white font-semibold">{i + 1}</span>
    </div>
    <span className="font-medium text-white/95">{faq.question}</span>
  </div>

 
  <svg className="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="none">
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-sm text-gray-300">
                  <div style={{ lineHeight: 1.7 }}>
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="mt-8 text-center">
      
    </div>
  </div>

  <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle,#FF9A7630,#FFD66B20)" }} />
  <div className="absolute -left-24 -top-20 w-72 h-72 rounded-full blur-3xl opacity-25" style={{ background: "radial-gradient(circle,#7C3AED30,#06B6D430)" }} />
</section>


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
