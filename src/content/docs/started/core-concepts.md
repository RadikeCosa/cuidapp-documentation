---
title: Core Concepts
description: Understanding the fundamental concepts and architecture behind Domi Health's patient management system.
---

## Core Concepts

Understanding the key concepts behind Domi Health will help you make the most of the platform, whether you're a healthcare professional managing patients or a developer contributing to the project.

## Healthcare Domain Concepts

### Patient Management Philosophy

**Domi Health** is built around the concept of **comprehensive patient records** that reflect real-world domiciliary care needs. Unlike generic healthcare systems, every data point collected serves a specific purpose in home healthcare delivery.

#### The Complete Patient Profile

Each patient in Domi Health represents more than just medical information:

- **Personal Identity**: Complete demographic data (name, DNI, age, civil status)
- **Reachability**: Multiple contact methods for reliable communication
- **Location Context**: Detailed address information for home visits and care coordination
- **Healthcare Network**: Insurance details, referring physicians, and care relationships
- **Clinical Context**: Reason for consultation and ongoing observations

### Domiciliary Care Workflow

**Home Healthcare** operates differently from clinic-based care. Domi Health is designed around these key principles:

#### Geographic Organization

- **Address-First Design**: Every patient has a complete, mappable address
- **Route Optimization**: Patient locations are integrated with Google Maps for efficient visit planning
- **Regional Context**: City-based organization reflecting local healthcare delivery networks

#### Communication Centricity

- **Multiple Contact Points**: Primary and alternative phone numbers
- **Emergency Networks**: Dedicated emergency contact information
- **Professional Coordination**: Direct links to referring physicians and care teams

#### Insurance & Administrative Efficiency

- **Financiador System**: Healthcare funding source management (obras sociales, private insurance, etc.)
- **Affiliate Numbers**: Direct integration with Argentine healthcare system identifiers
- **Referral Tracking**: Clear chain of medical referrals and authorizations

## Technical Architecture Concepts

### Modern Stack Philosophy

Domi Health leverages contemporary web technologies chosen specifically for healthcare applications:

#### Next.js App Router

- **Server Components**: Improved performance for data-heavy patient records
- **Server Actions**: Secure, streamlined data mutations
- **File-based Routing**: Intuitive navigation structure

#### TypeScript-First Development

- **Type Safety**: Reduces errors in critical healthcare data handling
- **Developer Experience**: Enhanced IDE support and code reliability
- **Schema Validation**: Ensures data integrity at compile time

#### Supabase Integration

- **Real-time Capabilities**: Instant updates across care team members
- **Row-level Security**: HIPAA-aligned data protection
- **Authentication**: Secure access control for healthcare teams

### Data Model Concepts

#### Patient Entity Design

The `Patient` model is the cornerstone of the application, designed with Argentine healthcare context in mind:

```typescript
// Core patient structure reflects real-world domiciliary care needs
interface Patient {
  // Identity & Demographics
  name: string; // Full legal name
  dni: number; // Argentine national ID
  fecha_nacimiento: Date; // Birth date (age calculated dynamically)
  sexo: "masculino" | "femenino" | "otro";

  // Contact & Location
  telefono_principal: string;
  telefono_alternativo?: string;
  email?: string;
  calle: string;
  numero: string;
  ciudad: string;
  codigo_postal?: string;

  // Healthcare Context
  financiador: string; // Insurance/funding source
  numero_afiliado?: string; // Insurance member number
  medico_derivante?: string; // Referring physician
  motivo_consulta: string; // Reason for consultation

  // Emergency & Additional Info
  contacto_emergencia_nombre?: string;
  contacto_emergencia_telefono?: string;
  observaciones?: string;
}
```

#### Form-Driven Data Collection

The application uses a **comprehensive intake approach**:

- **Grouped Information**: Related data is visually and logically grouped
- **Progressive Disclosure**: Optional fields don't overwhelm but are available when needed
- **Validation at Entry**: Real-time feedback prevents data quality issues
- **Smart Defaults**: Argentine-specific options (cities, insurance types) pre-populated

### State Management Concepts

#### Server-First Architecture

Domi Health follows a **server-first** approach for data management:

- **Server Actions**: All data mutations happen on the server
- **Optimistic Updates**: UI responds immediately while server processes
- **Error Boundaries**: Graceful handling of network and validation errors
- **Form State**: Managed through React's `useActionState` for reliable form handling

#### Component Composition

The application uses a **component composition** strategy:

- **Patient Views**: Modular components for different aspects of patient information
- **Reusable UI**: Consistent form fields, cards, and layout components
- **Separation of Concerns**: Display components separate from data fetching logic

## User Experience Concepts

### Healthcare Professional Workflow

#### Quick Patient Access

- **Search & Filter**: Rapid patient lookup by name, DNI, or other identifiers
- **Visual Scanning**: Patient list designed for quick visual identification
- **One-Click Navigation**: Direct access to complete patient profiles

#### Comprehensive Patient View

- **Tabbed Information**: Related information grouped logically
- **Action-Oriented**: Direct links to call patients, view addresses on maps
- **Clinical Context**: Prominent display of consultation reasons and medical context

#### Administrative Efficiency

- **Complete Forms**: All necessary information captured in single session
- **Validation Feedback**: Immediate error correction during data entry
- **Success Confirmation**: Clear feedback when operations complete successfully

### Developer Experience Concepts

#### Code Organization

The project follows modern React patterns:

```
src/
├── components/           # Reusable UI components
│   ├── patientBasicInfo.tsx
│   ├── patientContactInfo.tsx
│   ├── patientMedicalInfo.tsx
│   └── addPatientForm.tsx
├── lib/                 # Business logic and utilities
│   └── actions.ts       # Server actions for data operations
└── schemas/             # Data validation and types
    └── patientSchema.ts
```

#### Development Principles

- **Type Safety**: Every data structure is typed
- **Server Actions**: Secure, server-side data operations
- **Component Isolation**: Each component has a single, clear responsibility
- **Accessibility**: Form fields and interactions follow accessibility standards

## Security & Privacy Concepts

### Healthcare Data Protection

#### Data Validation

- **Schema-based Validation**: All patient data validated against defined schemas
- **Server-side Processing**: Critical validation happens on the server
- **Input Sanitization**: Protection against malicious data entry

#### Access Control

- **Authentication Required**: All patient data requires authenticated access
- **Session Management**: Secure session handling through Supabase
- **Role-based Access**: Foundation for future role-based permissions

## Regional Context

### Argentine Healthcare System Integration

#### Document Types

- **DNI Integration**: Native support for Argentine national identification
- **Insurance Systems**: Pre-configured for common Argentine healthcare funders
- **Regional Cities**: City dropdown populated with regional healthcare centers

#### Language & Culture

- **Spanish Interface**: Native Spanish language throughout
- **Cultural Sensitivity**: Form fields and options reflect Argentine healthcare culture
- **Local Workflows**: Designed around actual domiciliary care practices in Argentina

---

## Getting Started with These Concepts

Now that you understand the core concepts, you can:

1. **Explore the Patient Form** - See how comprehensive data collection works in practice
2. **Review Patient Profiles** - Understand how information is organized for healthcare workflows
3. **Examine the Code Structure** - See how these concepts translate into clean, maintainable code
4. **Consider Extensions** - Think about how these concepts could support additional healthcare workflows

These concepts form the foundation for everything else in Domi Health - from the simple patient registration form to the comprehensive patient management system.
