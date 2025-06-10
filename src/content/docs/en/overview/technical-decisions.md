---
title: Technical Decisions
description: Documentation of technical decisions made in CuidApp development
---

_Technical documentation for developing a management application for home healthcare professionals_

---

## Introduction

Cuidapp is a web application designed to optimize management for home healthcare professionals. This document details the technical decisions made during development, from technology selection to system architecture.

Each choice was based on clear criteria: **efficiency**, **scalability**, and **maintainability**, considering real-world healthcare sector challenges.

## Technology Stack

### Frontend: Next.js 15 + React 19 + Tailwind CSS 4

**Next.js 15**: React framework with hybrid rendering and performance optimizations.

**React 19**: Incorporates Server Components and Server Actions for enhanced user experience.

**Tailwind CSS 4**: CSS framework with utility classes for rapid development and consistent design.

**Why this combination?**

- Superior performance with Server Components
- Optimized SEO through server-side rendering
- Agile development with Tailwind CSS
- Modern stack with excellent documentation

**Alternatives evaluated**: Create React App, Vite, Remix. Next.js was chosen for its robustness and full-stack approach.

### Backend: Evolutionary Approach

**Current Phase - Data Simulation**

To accelerate frontend development without external infrastructure dependencies:

- **Mock data**: `placeholder-data.ts` file with realistic patient information
- **Service layer**: `patients.service.ts` simulating a real API:
  - Asynchronous functions with artificial delays
  - Random error handling for testing
  - Interface identical to future real API

**Next Steps - PostgreSQL + Supabase**

For real backend implementation:

- **PostgreSQL**: Relational database ideal for clinical data
- **Supabase**: Backend-as-a-Service including:
  - Automatically generated REST API
  - Authentication system
  - Administration dashboard
  - Real-time functions

**Evolutionary approach advantages**:

- Parallel development without blockers
- Decoupled and maintainable code
- Smooth transition to production
- UX testing from day one

### Documentation: Astro + Starlight

**Astro**: Generates extremely fast static websites with automatic optimization.

**Starlight**: Theme specialized in technical documentation with intuitive navigation and responsive design.

## Development Methodology

### Modular and Progressive Development

Incremental approach centered on the **patient module**:

1. **Solid foundation**: Most critical functionality (patient management)
2. **Scalable structure**: Dashboard with extensible side navigation
3. **Controlled iterations**:
   - Patient list
   - Individual detailed view
   - Statistics cards
   - Patient states

### Development Tools

**Productivity**:

- **VS Code**: Main editor with specialized extensions
- **Notion**: Planning and task tracking

**Code Quality**:

- **TypeScript**: Strong typing for safe development
- **ESLint**: Automatic error detection
- **Prettier**: Consistent formatting

## Version Control with Git

### Branch Strategy

```
main (production)
├── feature/patient-list
├── feature/patient-details
├── feature/dashboard-stats
└── feature/patient-crud (planned)
```

### Workflow Process

1. **Create branch**: `git checkout -b feature/new-functionality`
2. **Semantic commits**: `feat: add patient creation form`
3. **Pull Request**: Review before merging
4. **Merge to main**: After approval
5. **Cleanup**: Remove obsolete branches

### Automated Deployment

**CI/CD Pipeline with GitHub Actions + Vercel**:

```
Code → GitHub → Actions → Build → Deploy → Vercel
```

- **Trigger**: Push to `main` branch
- **Process**: Automatic build and deployment
- **Result**: Immediate production update

## System Architecture

### Layered Design

```
┌─────────────────────────────────────┐
│        PRESENTATION LAYER           │
│     Next.js 15 + React 19          │
│     Server & Client Components      │
└─────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────┐
│         SERVICE LAYER               │
│       patients.service.ts           │
│     (Data abstraction)              │
└─────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────┐
│          DATA LAYER                 │
│   Simulation → PostgreSQL + Supabase│
└─────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────┐
│      INFRASTRUCTURE LAYER           │
│    Vercel + GitHub Actions          │
└─────────────────────────────────────┘
```

### Design Principles

**Server-First Architecture**:

- Server Components for better performance
- Client Components only for JavaScript interactions
- Automatic rendering optimization

**Separation of Concerns**:

- Components focused on presentation
- Services with abstracted business logic
- Independent and interchangeable data layer

## Key Design Decisions

### 1. Simulation vs Real Backend

**Decision**: Start with simulated data  
**Reason**: Parallel frontend development without external dependencies  
**Benefit**: Rapid iteration and immediate UX testing

### 2. PostgreSQL vs NoSQL

**Decision**: Relational database (PostgreSQL)  
**Reason**: Healthcare data requires integrity and clear relationships  
**Benefit**: Consistency and ease of auditing

### 3. Supabase vs Custom Backend

**Decision**: Backend-as-a-Service (Supabase)  
**Reason**: Accelerate development without sacrificing functionality  
**Benefit**: Authentication, REST API, and dashboard included

### 4. TypeScript vs JavaScript

**Decision**: TypeScript throughout the project  
**Reason**: Healthcare applications require maximum reliability  
**Benefit**: Early error detection

## Planned Features

### Next Iteration

- **Complete CRUD system**: Forms to create, edit, and delete patients
- **Data validation**: Robust schemas with error handling
- **Advanced states**: Complete patient state workflow

### Future Expansions

- **Appointment module**: Calendar and scheduling
- **Notification system**: Reminders and alerts
- **Reports**: Statistics and analytics
- **Map integration**: Route optimization

## Conclusion

Cuidapp's technical decisions balance development speed, scalability, and user experience. Choosing a modern stack, modular architecture, and professional practices provides a solid foundation for project growth.

This approach facilitates current development and prepares the application for future expansions, maintaining focus on solving real challenges in home healthcare.

---

_Documentation updated: June 2025_
