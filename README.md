# Chatterly
**Chatterly** is a responsive and modern chat application built with **Next.js**, **React**, and **Supabase**. It supports real-time messaging, user authentication, contact management, and seamless conversation history.

## 🚀 Overview
Chatterly delivers a smooth messaging experience with a focus on real-time communication and clean UI. It’s ideal for developers exploring Supabase and full-stack real-time applications with Next.js.

---

## ✨ Core Features

| Feature                | Description                                                                  |
|------------------------|------------------------------------------------------------------------------|
| ⚡ Real-Time Messaging | Instantly send and receive messages using Supabase’s live updates             |
| 🔐 Authentication      | Sign up and log in securely with Supabase Auth                                |
| 👥 Contact Management  | Add, search, and filter contacts effortlessly                                  |
| 🕓 Message Status      | See when messages are sent, delivered, or read                                |
| 📱 Responsive Design   | Works seamlessly on both desktop and mobile devices                           |
| 🔍 Smart Search        | Debounced search for users and contacts                                       |
| 🕘 Conversation History| Scroll through entire chat history with ease                                  |
| 📩 Unread Filter       | Quickly identify unread conversations                                         |

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** – React framework with server-side rendering
- **React 19** – Modern JavaScript UI library
- **TailwindCSS 4** – Utility-first CSS framework
- **React Icons** – Icon component library

### Backend
- **Supabase** – Real-time backend-as-a-service (BaaS)
- **PostgreSQL** – Relational database
- **Row Level Security (RLS)** – Secure, rule-based data access

### Authentication
- **Supabase Auth** – Email-based authentication
- **Next.js Middleware** – Route protection and access control

---

## 🗂️ Project Directory Structure

├── app/ # Next.js app directory (routing & pages)
│ ├── auth/ # Login and signup pages
│ ├── chats/ # Chat UI and conversation pages
│ ├── layout.tsx # Root layout wrapper
│ └── page.tsx # Homepage
├── components/ # Reusable UI components
│ ├── auth/ # Auth form components
│ ├── chat/ # Messaging interface components
├── public/ # Static files
├── utils/ # Helper functions
├── types/ # TypeScript types/interfaces
├── middleware.ts # Auth middleware logic
├── supabase-schema.sql # SQL schema for initializing the database
└── ... # Additional configuration files

---
### 📋 Prerequisites

- Node.js (v18+)
- npm or Yarn
- Supabase account

### ⚙️ Setup Instructions

#### 1. Clone the Repository
git clone https://github.com/yourusername/periskope.git
cd periskope
#### 2. Install Dependencies
npm install
# or
yarn install
#### 3. Set Up Environment Variables
Create a .env.local file in the root directory:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
#### 4. Configure Supabase
Create a new project at https://supabase.io
Run supabase-schema.sql in the Supabase SQL editor
Enable and configure authentication providers

#### 5. Run Development Server
npm run dev
Visit: http://localhost:3000

🗃️ Database Schema
Table	Purpose
profiles-	Stores user profile data like usernames and avatars
messages-	Stores messages with metadata like status
contacts- Manages connections between users

