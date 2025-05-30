---
title: Installation
description: Step-by-step guide to get Domi Health running on your local machine.
---

## Installation Guide

This guide will walk you through setting up Domi Health on your local development environment. The entire process should take about 10-15 minutes.

## Step 1: Clone the Repository

First, let's get the code onto your machine.

### Option A: Using Git (Recommended)

```bash
# Clone the repository
git clone https://github.com/RadikeCosa/domi-health

# Navigate to the project directory
cd domi-health
```

### Option B: Download ZIP

1. Visit the [GitHub repository](https://github.com/RadikeCosa/domi-health)
2. Click the green **"Code"** button
3. Select **"Download ZIP"**
4. Extract the ZIP file to your desired location
5. Open terminal/command prompt in the extracted folder

## Step 2: Install Dependencies

Install all required packages using your preferred package manager:

```bash
# Using npm (recommended for beginners)
npm install

# OR using yarn
yarn install

# OR using pnpm
pnpm install

# OR using bun
bun install
```

**This step will:**

- Download all required packages (~200MB)
- Set up the project dependencies
- Prepare the development environment

**Expected output:**

```bash
added 312 packages, and audited 313 packages in 45s
found 0 vulnerabilities
```

## Step 3: Environment Configuration

### Create Environment File

```bash
# Copy the example environment file
cp .env.local.example .env.local

# On Windows, use:
copy .env.local.example .env.local
```

### Configure Supabase Settings

Open the `.env.local` file in your text editor and add your Supabase credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**How to find your Supabase credentials:**

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Navigate to **Settings** → **API**
4. Copy the **Project URL** and **anon/public key**

## Step 4: Database Setup

### Create the Patients Table

1. In your Supabase dashboard, go to the **SQL Editor**
2. Create a new query and paste this SQL:

```sql
-- Create patients table
CREATE TABLE patients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index for better performance
CREATE INDEX idx_patients_created_at ON patients(created_at DESC);

-- Add Row Level Security (RLS) - Optional but recommended
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations for now
-- In production, you'll want more restrictive policies
CREATE POLICY "Allow all operations on patients" ON patients
  FOR ALL USING (true);
```

3. Click **Run** to execute the query

**Expected result:**

```
Success. No rows returned
```

### Verify Database Setup

You can verify the table was created by running:

```sql
-- Check if the table exists and view its structure
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'patients';
```

## Step 5: Start the Development Server

Now let's run the application:

```bash
# Start the development server
npm run dev

# OR with other package managers
yarn dev
pnpm dev
bun dev
```

**Expected output:**

```
▲ Next.js 15.0.0
- Local:        http://localhost:3000
- Environments: .env.local

✓ Starting...
✓ Ready in 2.3s
```

## Step 6: Verify Installation

### Access the Application

1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
2. You should see the Domi Health homepage

### Test Basic Functionality

1. **Navigate to Admin Dashboard**

   - Click **"Admin Dashboard"** button on the homepage
   - Or go directly to [http://localhost:3000/admin](http://localhost:3000/admin)

2. **Add a Test Patient**

   - Enter a patient name (e.g., "John Doe")
   - Click **"Add Patient"**
   - You should see a success message

3. **View Patients List**
   - Navigate to [http://localhost:3000/patient](http://localhost:3000/patient)
   - Your test patient should appear in the list
   - Click on the patient to view their detail page

## Troubleshooting Common Issues

### Issue: "Module not found" errors

**Solution:**

```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall dependencies
npm install
```

### Issue: Supabase connection errors

**Symptoms:** Database operations fail, can't add patients
**Solutions:**

1. Verify your `.env.local` file has correct Supabase credentials
2. Check that your Supabase project is active (not paused)
3. Ensure the patients table was created successfully

### Issue: Port 3000 already in use

**Solution:**

```bash
# Use a different port
npm run dev -- --port 3001
```

### Issue: TypeScript errors

**Solution:**

```bash
# Check TypeScript compilation
npm run type-check
```

## Development Commands

Here are the key commands you'll use during development:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run TypeScript type checking
npm run type-check

# Format code with Prettier
npm run format

# Lint code
npm run lint
```

## Project Structure Overview

After installation, your project structure should look like this:

```
domi-health/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable UI components
│   ├── lib/             # Utilities and configurations
│   └── schemas/         # Validation schemas
├── .env.local           # Your environment variables
├── package.json         # Project dependencies
└── README.md           # Project documentation
```

## Next Steps

Congratulations! 🎉 You now have Domi Health running locally.

**Ready to dive deeper?** Continue with:

- **[Quick Start Guide](/getting-started/quick-start)** - Take a tour of the application
- **[Core Concepts](/getting-started/core-concepts)** - Understand the architecture
- **[User Guide](/guides/patient-management)** - Learn how to use all features

**Having issues?** Check our [Troubleshooting Guide](/troubleshooting) or [open an issue](https://github.com/yourusername/domi-health/issues) on GitHub.

---

**Pro tip:** Keep the development server running while you explore the documentation - you can test features as you learn about them!
