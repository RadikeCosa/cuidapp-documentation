---
title: Introduction
description: Welcome to Domi Health - Where healthcare expertise meets modern web development.
---

## Introduction to the Project: Nest Care Hub

## Context and Motivation

In 2020, amid the pandemic, I began my journey as a full stack developer, a significant career shift after 20 years as a kinesiologist. During my healthcare career, I worked in diverse areas such as sports and palliative kinesiology, which taught me to tackle complex challenges with empathy and precision. Now, as a developer, I aim to combine my healthcare experience with my technical skills to create impactful digital solutions.

Nest Care Hub: Utilities for Home Health Care is a project that embodies this vision. I designed it as a cornerstone of my professional portfolio to showcase my capabilities as a full stack developer to potential employers while also serving as a personal diary of my development process. Through this documentation, I will narrate the step-by-step creation of the app, highlighting technical decisions, challenges faced, and solutions implemented.

## Purpose of Nest Care Hub

Nest Care Hub is a web application designed for healthcare professionals working in home care, a sector I consider vital yet often overlooked. During the pandemic, home care proved essential in maintaining accessible medical services, but post-crisis, it has reverted to being underappreciated. My goal is to provide simple, efficient digital tools to help these professionals manage patients, organize data, and streamline their daily work.

The app starts with basic functionalities, such as registering and listing patients with essential information (name, ID, date of birth), but it is designed to scale toward advanced features, such as conducting functional tests (e.g., Barthel or fall risk assessments) and generating reports. This modular approach reflects my intent to build a practical and adaptable solution, inspired by my healthcare experience.

## Technology Choices

To develop Nest Care Hub, I chose a modern tech stack that balances productivity, scalability, and technical learning:

**Next.js 15.3**: This full stack framework is the core of the project. Its App Router system simplifies layout and route management, while support for server-side rendering (SSR) and static site generation (SSG) ensures optimal performance. I chose Next.js over alternatives like React with Vite or Express because it integrates frontend and backend in a single tool, reducing complexity for a portfolio project.

**Supabase**: I opted for this PostgreSQL-based platform for its intuitive JavaScript client and open-source nature. Compared to alternatives like Firebase, Supabase offers greater flexibility and avoids vendor lock-in, making it ideal for an evolving project.

**Tailwind CSS**: For design, I chose Tailwind for its utility-first approach, which enables rapid creation of responsive interfaces without writing custom CSS. This allows me to focus on application logic while maintaining a modern design.

**TypeScript**: I incorporated TypeScript for static typing, improving code maintainability and reducing errors in a project I plan to scale.

**Zod**: This library enables robust data validation on both frontend and backend, ensuring patient data is consistent and secure.

While these are the primary technologies, I'm open to incorporating additional tools as the project evolves, and I will document each decision along the way.

## Documentation Approach

This documentation serves a dual purpose: to demonstrate my technical skills to recruiters and fellow developers and to act as a personal journal of my learning as a programmer. Each article will cover a stage of development, from initial setup to implementing advanced features, focusing on:

- **Technical decisions**: Why I chose specific tools, patterns, or approaches.
- **Challenges and solutions**: How I tackled technical issues, such as configurations, validations, or integrations.
- **Lessons learned**: Reflections on what worked, what didn't, and how I improved in the process.

For example, in upcoming articles, I will detail how I set up the development environment, designed responsive navigation, and addressed issues like data validation with Zod and Supabase. This narrative approach aims to showcase not only the final product but also my ability to think critically and solve problems as a developer.

## Next Steps

In the next article, I will describe the initial setup of Nest Care Hub, including the application structure, Supabase integration, and interface design with Tailwind CSS. Throughout the project, I plan to add authentication, expand patient management functionalities, and explore features like functional tests and report generation, always documenting decisions and learnings.

Nest Care Hub is more than a portfolio project: it's an opportunity to blend my passion for healthcare with my new career in software development, creating a tool that can make a difference in home care.
