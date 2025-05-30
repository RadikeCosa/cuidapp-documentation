---
title: Prerequisites
description: Everything you need before installing Domi Health.
---

## Prerequisites

Before diving into Domi Health, let's ensure you have everything needed for a smooth installation and development experience.

## Technical Requirements

### System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **RAM**: Minimum 4GB (8GB recommended for development)
- **Storage**: At least 1GB free space for the project and dependencies

### Required Software

#### Node.js (Essential)

- **Version**: Node.js 18.17 or later
- **Why**: Powers the Next.js framework and all build processes
- **Download**: [nodejs.org](https://nodejs.org/)

```bash
# Verify your Node.js version
node --version
# Should output v18.17.0 or higher
```

#### Package Manager (Choose One)

- **npm** (comes with Node.js) - Recommended for beginners
- **yarn** - Alternative package manager
- **pnpm** - Fast, disk space efficient
- **bun** - Modern JavaScript runtime and package manager

```bash
# Using npm (default)
npm --version

# Or install alternatives
npm install -g yarn
npm install -g pnpm
# For bun, visit: https://bun.sh/
```

#### Git (Recommended)

- **Version**: Latest stable version
- **Why**: Version control and cloning the repository
- **Download**: [git-scm.com](https://git-scm.com/)

```bash
# Verify Git installation
git --version
```

## Account Requirements

### Supabase Account (Required)

Domi Health uses Supabase as its backend database and authentication provider.

1. **Create a free account** at [supabase.com](https://supabase.com)
2. **Create a new project** in your Supabase dashboard
3. **Note down** your project URL and anon key (we'll use these during installation)

**Why Supabase?**

- Real-time database capabilities
- Built-in authentication
- Excellent developer experience
- Free tier suitable for development and small deployments

### GitHub Account (Optional but Recommended)

- **Why**: For version control, collaboration, and deployment
- **Sign up**: [github.com](https://github.com)

## Knowledge Prerequisites

### For Healthcare Professionals

**Don't worry!** You don't need extensive technical knowledge, but having basic familiarity with:

- **Web browsers** and basic internet navigation
- **File management** (creating folders, moving files)
- **Text editing** (any text editor works)
- **Command line basics** (we'll guide you through specific commands)

### For Developers

Basic understanding of:

- **React fundamentals** (components, props, state)
- **Next.js concepts** (pages, routing, server components)
- **TypeScript basics** (types, interfaces)
- **Database concepts** (tables, relationships, queries)
- **REST API principles**

**New to these technologies?** Don't worry! The codebase is well-documented and follows modern best practices that are great for learning.

## Development Environment Setup

### Code Editor (Recommended)

**Visual Studio Code** with these extensions:

- **ES7+ React/Redux/React-Native snippets**
- **TypeScript Importer**
- **Tailwind CSS IntelliSense**
- **Prettier - Code formatter**
- **Auto Rename Tag**

### Browser Setup

Any modern browser works, but for development we recommend:

- **Chrome** or **Edge** (excellent DevTools)
- **Firefox Developer Edition**

### Terminal/Command Line

- **Windows**: PowerShell, Command Prompt, or Windows Terminal
- **macOS**: Terminal (built-in) or iTerm2
- **Linux**: Your distribution's default terminal

## Understanding the Healthcare Context

### Key Concepts

Before diving into the technical setup, it's helpful to understand these healthcare concepts that shape the application:

#### Patient Management

- **Patient Records**: Digital representation of patient information
- **HIPAA Awareness**: Privacy and security considerations (US healthcare)
- **Care Coordination**: Managing multiple healthcare providers for one patient

#### Domiciliary Care

- **Home Healthcare**: Medical services provided in the patient's home
- **Care Teams**: Multidisciplinary groups (physiotherapists, nurses, doctors)
- **Visit Scheduling**: Coordinating home visits and appointments

#### Healthcare Workflows

- **Intake Process**: New patient registration and initial assessment
- **Care Planning**: Developing treatment plans and goals
- **Progress Tracking**: Monitoring patient outcomes over time

## Next Steps

Once you have all prerequisites in place, you're ready to move on to the **Installation** guide where we'll:

1. Clone the repository
2. Set up your environment variables
3. Configure your Supabase database
4. Run your first development server
5. Create your first patient record

---

**Ready to proceed?** Let's move on to the installation process!
