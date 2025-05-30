---
title: Quick Start
description: Get familiar with Domi Health in just 5 minutes.
---

## Quick Start Guide

Welcome to your first hands-on experience with Domi Health! This guide will walk you through the core features in about 5 minutes, giving you a solid understanding of how the application works.

## Before You Begin

Make sure you have:

- ✅ Completed the [Installation](/getting-started/installation) process
- ✅ The development server running at [http://localhost:3000](http://localhost:3000)
- ✅ A web browser open and ready

## 1. Homepage Overview (30 seconds)

Start at [http://localhost:3000](http://localhost:3000) - this is your application's front door.

**What you'll see:**

- **Welcome message** introducing Domi Health
- **Two main action buttons:**
  - **"View Patients"** - Access the patient management system
  - **"Admin Dashboard"** - Administrative functions
- **Feature highlights** showing key capabilities

**Healthcare Context:** This landing page serves as a quick access point for different user roles - administrators who need to add patients, and healthcare staff who need to access patient information.

## 2. Patient Management Workflow (2 minutes)

Let's follow the typical workflow of a healthcare team managing patients.

### Step 1: Add Your First Patient

1. **Click "Admin Dashboard"** from the homepage
2. **You'll see the patient registration form**
3. **Enter a patient name** (try "Maria Rodriguez")
4. **Click "Add Patient"**

**Expected result:** Green success message confirming the patient was added.

**Real-world context:** This simulates the intake process when a new patient is referred to your home healthcare service.

### Step 2: View Patient List

1. **Click "View Patients"** (or navigate to `/patient`)
2. **You'll see your newly added patient** in a clean, organized list
3. **Notice the patient information displayed:**
   - Full name
   - Truncated Patient ID (for privacy)
   - Registration date

**Healthcare workflow:** This view gives care teams quick access to their patient roster, similar to a daily assignment list.

### Step 3: Access Patient Details

1. **Click on the patient card** you just created
2. **Explore the patient detail page:**
   - **Basic Information section** with full patient data
   - **Medical Records placeholder** (future feature)
   - **Appointments placeholder** (future feature)

**Clinical perspective:** This detailed view is where healthcare providers would access comprehensive patient information before a home visit.

## 3. Navigation System (1 minute)

Understanding the navigation will help you move efficiently through the application.

### Sidebar Navigation (Desktop)

On larger screens, you'll see a persistent sidebar with:

- **🏠 Home** - Return to the main dashboard
- **👥 Patients** - Patient list and management
- **⚙️ Admin** - Administrative functions

### Mobile Navigation

On mobile devices:

- **Hamburger menu** (≡) in the top-left corner
- **Same navigation options** in a collapsible menu
- **Responsive design** that works on any device size

**Practical tip:** The sidebar highlights your current location, making it easy to navigate during busy workdays.

## 4. Understanding the Data Flow (1 minute)

Here's what happens behind the scenes when you add a patient:

1. **Form Validation** - The system ensures required fields are filled
2. **Data Processing** - Patient information is formatted and validated
3. **Database Storage** - Securely stored in Supabase (PostgreSQL)
4. **Real-time Updates** - Patient list automatically refreshes
5. **UUID Generation** - Each patient gets a unique, secure identifier

**Security note:** Patient IDs are UUIDs (universally unique identifiers), providing better security than sequential numbers.

## 5. Key Features to Explore (30 seconds)

Now that you understand the basics, here are features worth exploring:

### Current Features

- **Responsive Design** - Try resizing your browser window
- **Form Validation** - Try submitting an empty patient name
- **Clean UI** - Notice the healthcare-focused design choices
- **Real-time Updates** - Changes appear immediately without page refreshes

### Placeholder Features (Coming Soon)

- **Medical Records** - Will store patient history and treatment notes
- **Appointment Scheduling** - Calendar integration for home visits
- **Advanced Search** - Filter and find patients quickly

## Common Use Cases

Based on real healthcare scenarios, here's how teams typically use Domi Health:

### Morning Routine

1. **Check patient list** for today's scheduled visits
2. **Review patient details** before leaving for home visits
3. **Note any special requirements** or recent updates

### New Patient Intake

1. **Admin adds patient** during initial referral call
2. **Basic information entered** into the system
3. **Patient becomes available** for care team assignment

### Care Coordination

1. **Multiple team members** can access the same patient information
2. **Consistent data** across all healthcare providers
3. **Centralized management** reduces communication errors

## Tips for Healthcare Professionals

### Best Practices

- **Add patients immediately** when referrals come in
- **Use full legal names** for proper identification
- **Keep browser tabs open** for quick access during phone calls
- **Bookmark frequently used pages** for faster navigation

### Privacy Considerations

- **Patient IDs are truncated** in list views for privacy
- **Full information** only visible in detail pages
- **Secure database storage** with industry-standard practices

## What's Next?

You've now completed the essential Domi Health workflow! Here's how to continue your learning:

### Immediate Next Steps

- **Explore [Core Concepts](/getting-started/core-concepts)** - Understand the architecture
- **Read [Patient Management Guide](/guides/patient-management)** - Detailed feature walkthrough
- **Check [Admin Dashboard Guide](/guides/admin-dashboard)** - Administrative features

### For Developers

- **Review [Architecture Overview](/architecture/overview)** - Technical deep dive
- **Explore [API Documentation](/api/server-actions)** - Server actions and database schema
- **Study [Tech Stack Details](/architecture/tech-stack)** - Framework choices and decisions

### For Healthcare Teams

- **Plan your [Deployment Strategy](/guides/deployment)** - Moving to production
- **Consider [Customization Options](/customization/overview)** - Adapting to your workflow
- **Review [Security Guidelines](/security/overview)** - HIPAA considerations

## Need Help?

**Stuck on something?**

- Check the [Troubleshooting Guide](/troubleshooting)
- Review [Common Issues](/support/common-issues)
- [Open an issue](https://github.com/yourusername/domi-health/issues) on GitHub

**Want to contribute?**

- Read the [Contributing Guide](/contributing/development)
- Check the [Project Roadmap](/contributing/roadmap)

---

**Congratulations!** 🎉 You've successfully completed the Domi Health quick start. You now understand the core workflow and are ready to explore the advanced features that make this application perfect for healthcare teams.

_Ready to dive deeper? The [Core Concepts](/getting-started/core-concepts) section awaits!_
