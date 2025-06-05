---
title: "Initial Setup"
description: "Setting Up the App: Layouts, Navigation, and Patient Flow"
---

## Initial Setup: Structure, Navigation, and Patient Flow

## Introduction

As outlined in the introduction to Nest Care Hub: Utilities for Home Health Care, my goal is to develop a web application that streamlines patient management for healthcare professionals in home care. This article details the initial steps of the project, focusing on the setup, global structure, navigation, and patient registration flow. Throughout this documentation, I narrate the technical decisions, challenges overcome, and solutions implemented, showcasing my journey as a full stack developer transitioning from a 20-year career as a kinesiologist.

## Initial Setup and Core Features

I started the project with **Next.js 15.3**, leveraging its App Router system to manage layouts and routes efficiently. I chose not to implement authentication at this stage to prioritize core functionalities: registering and listing patients. This allowed me to quickly validate the integration between the frontend and backend, keeping the homepage publicly accessible. While I considered adding authentication early on, I opted for simplicity to test the app's basic flow, a decision I'll revisit to meet home care security requirements.

For the design, I used **Tailwind CSS** for its utility-first approach, which speeds up the creation of responsive interfaces. I incorporated **TypeScript** for robust, maintainable code and **Zod** for data validation on both frontend and backend, ensuring patient data consistency. These choices reflect my intent to build a scalable project that stands out in my professional portfolio while serving as a record of my learning process.

## Global Structure

I set up a RootLayout in Next.js to ensure a consistent Header and Footer across all pages, leveraging the App Router's layout system. In the `<main>` section, I included two initial navigation links:

- A form to register new patients.
- A component to list all registered patients.

This minimalist structure allowed me to test the core patient management flow without unnecessary complexity. I initially considered adding more links, such as for reports or settings, but focused on essential features to validate the app's basic architecture. This decision helped me keep the project manageable while learning to work with Next.js's App Router.

## Navigation and Dashboard

For the `/dashboard` route, I designed a layout with a SideNav containing the main links: Home, Patients List, and Add Patient. On mobile devices, the sidebar collapses into a hamburger menu to enhance usability. This choice came after testing a fixed top navigation, which felt cluttered on smaller screens. Using Tailwind CSS for responsive navigation was efficient due to its conditional classes, though it required tweaks to ensure smooth transitions between desktop and mobile.

To highlight the active section, I used the `usePathname` hook from Next.js, a straightforward solution that improved the user experience and deepened my understanding of the App Router. This process reinforced my decision to choose Next.js 15.3, as its routing system significantly simplified navigation implementation.

## Patient Registration Flow

I kept the patient registration form minimal, requesting only essential information: full name, ID (DNI), and date of birth. This was a strategic choice to validate the Supabase integration before adding complex fields like address, contact details, or medical data. I used **React Hook Form** with **Zod** to implement frontend validations, ensuring data correctness before submission to the backend.

An early challenge was ensuring DNI uniqueness. Initially, I relied solely on frontend validation, but this caused issues when multiple users tried registering the same DNI. I resolved this by adding a UNIQUE constraint in the database and handling errors in the frontend with clear user messages, leveraging react-hook-form for immediate feedback. This experience taught me the value of combining client- and server-side validations for robustness and a better user experience.

## Database and Supabase

I chose **Supabase** as the backend for its seamless integration with Next.js and its PostgreSQL foundation, ideal for structured patient data. The patients table is defined as follows:

```sql
CREATE TABLE patients (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name varchar(100) NOT NULL,
  dni varchar(9) NOT NULL UNIQUE,
  birth_date date NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  is_active boolean NOT NULL DEFAULT true
);
```

I considered MongoDB for its flexibility but preferred Supabase for its relational structure, which better aligns with patient data and supports future features like functional tests (e.g., Barthel or fall risk assessments) or report generation. The Supabase connection is managed via environment variables, a practice I adopted after researching secure credential handling in web applications. This was critical for ensuring security, especially since the app will handle sensitive patient data.

For CRUD operations, I implemented functions in a `patientActions` file, using a soft delete approach with the `is_active` field. Instead of physically deleting records, I mark patients as `is_active = false`, preserving data for potential audits or recovery. This approach is standard in applications handling medical data, as it prevents accidental data loss and simplifies managing inactive records, which is critical in home care. Compared to physical deletion, soft delete reduces risks but requires queries to filter only active records (`is_active = true`), which I accounted for in my patientActions functions.

## Next Steps

My next goal is to expand patient data to include fields like address (formatted for compatibility with Google Maps for future map integration), contact information, financier details (e.g., obra social or prepaga in Argentina), and relevant medical data. I'll also focus on designing a component to display each patient's information clearly and accessibly, likely using a "patient profile" interface styled with Tailwind CSS for visual consistency.

Regarding CRUD operations, I've implemented create, read, and update functions in patientActions, using the soft delete approach for logical deletion. My next step is to thoroughly test these functions, ensuring the data visualization respects the `is_active = true` filter and handles edge cases, such as Supabase connection errors. I also plan to explore adding authentication to secure sensitive data, a critical step for home care applications.

This initial setup has been an opportunity to solidify my knowledge of Next.js, Supabase, Tailwind CSS, TypeScript, and Zod while tackling challenges that enhance my problem-solving skills. Nest Care Hub is shaping up as a practical tool for healthcare professionals and a testament to my transition to full stack development.
