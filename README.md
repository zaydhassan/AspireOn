# AI Career Coach (AspireON)

An AI-powered full stack career coaching platform built with **Next.js**, **Tailwind CSS**, **Prisma**, and open AI models (Gemini AI) to help users build ATS-optimized resumes, prepare for interviews, and gain industry insights tailored to their career paths.

---

## Features

- **User Authentication** with Clerk.dev — secure, seamless sign-up and login.
- **Personalized Onboarding** — select industries, skills, and career goals for tailored coaching.
- **AI Resume Builder** — dynamic, ATS-friendly resumes generated with Gemini AI personalization.
- **Smart Interview Preparation** — role-specific mock interviews with real-time AI feedback.
- **Industry Insights Dashboard** — updated weekly insights on job trends, salaries, and top skills.
- **Quiz & Performance Tracking** — quizzes to test knowledge and suggestions for improvement.
- **Cover Letter Generator** — AI-created, customized cover letters based on job descriptions.
- **Downloadable PDF Resumes** with full markdown editing support.
- **Background Jobs** with Inngest for weekly data refreshes.

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm or yarn
- PostgreSQL instance (for NeonDB or local setup)

### Installation

1. Clone the repository
2. git clone
3. cd ai-career-coach
4. npm install

3. Set up environment variables  
Create a `.env.local` file based on `.env.example` and provide your:
- Database URL (PostgreSQL)
- Clerk API keys and frontend API
- Gemini AI API keys
- Other service keys and secrets

4. Run database migrations
   
   npx prisma migrate deploy

5. Run the development server

   npm run dev

## Technologies Used

- Next.js 15 (App Router) & React 19
- Tailwind CSS & Shadcn UI
- Prisma ORM & Neon Postgres database
- Clerk Authentication & User Management
- Gemini AI API for AI-powered features
- Inngest for background job handling (cron tasks)
- React Hook Form & Zod for form state & validation
- Recharts for data visualization (charts & graphs)
- Sonner for toast notifications

---
