---
title: Decisiones Técnicas
description: Documentación de las decisiones técnicas tomadas en el desarrollo de CuidApp
---

_Documentación técnica del desarrollo de una aplicación de gestión para profesionales de atención domiciliaria_

---

## Introducción

Cuidapp es una aplicación web diseñada para optimizar la gestión de profesionales que brindan atención domiciliaria. Este documento detalla las decisiones técnicas tomadas durante su desarrollo, desde la selección de tecnologías hasta la arquitectura del sistema.

Cada elección se basó en criterios claros: **eficiencia**, **escalabilidad** y **facilidad de mantenimiento**, considerando los desafíos reales del sector salud.

## Stack Tecnológico

### Frontend: Next.js 15 + React 19 + Tailwind CSS 4

**Next.js 15**: Framework de React con renderizado híbrido y optimizaciones de rendimiento.

**React 19**: Incorpora Server Components y Server Actions para mejor experiencia de usuario.

**Tailwind CSS 4**: Framework CSS con clases utilitarias para desarrollo rápido y diseño consistente.

**¿Por qué esta combinación?**

- Rendimiento superior con Server Components
- SEO optimizado mediante renderizado del lado del servidor
- Desarrollo ágil con Tailwind CSS
- Stack moderno con excelente documentación

**Alternativas evaluadas**: Create React App, Vite, Remix. Next.js fue seleccionado por su robustez y enfoque full-stack.

### Backend: Enfoque Evolutivo

**Fase Actual - Simulación de Datos**

Para acelerar el desarrollo del frontend sin depender de infraestructura externa:

- **Datos simulados**: Archivo `placeholder-data.ts` con información realista de pacientes
- **Capa de servicios**: `patients.service.ts` que simula una API real:
  - Funciones asíncronas con delays artificiales
  - Manejo de errores aleatorios para testing
  - Interfaz idéntica a la futura API real

**Próximos Pasos - PostgreSQL + Supabase**

Para la implementación del backend real:

- **PostgreSQL**: Base de datos relacional ideal para datos clínicos
- **Supabase**: Backend-as-a-Service que incluye:
  - API REST generada automáticamente
  - Sistema de autenticación
  - Dashboard de administración
  - Funciones en tiempo real

**Ventajas del enfoque evolutivo**:

- Desarrollo paralelo sin bloqueos
- Código desacoplado y mantenible
- Transición fluida hacia producción
- Testing de UX desde el primer día

### Documentación: Astro + Starlight

**Astro**: Genera sitios web estáticos extremadamente rápidos con optimización automática.

**Starlight**: Tema especializado en documentación técnica con navegación intuitiva y diseño responsive.

## Metodología de Desarrollo

### Desarrollo Modular y Progresivo

Enfoque incremental centrado en el **módulo de pacientes**:

1. **Base sólida**: Funcionalidad más crítica (gestión de pacientes)
2. **Estructura escalable**: Dashboard con navegación lateral extensible
3. **Iteraciones controladas**:
   - Lista de pacientes
   - Vista detallada individual
   - Tarjetas con estadísticas
   - Estados de pacientes

### Herramientas de Desarrollo

**Productividad**:

- **VS Code**: Editor principal con extensiones especializadas
- **Notion**: Planificación y seguimiento de tareas

**Calidad de Código**:

- **TypeScript**: Tipado fuerte para desarrollo seguro
- **ESLint**: Detección automática de errores
- **Prettier**: Formateo consistente

## Gestión de Versiones con Git

### Estrategia de Ramas

```
main (producción)
├── feature/patient-list
├── feature/patient-details
├── feature/dashboard-stats
└── feature/patient-crud (planificado)
```

### Proceso de Trabajo

1. **Crear rama**: `git checkout -b feature/nueva-funcionalidad`
2. **Commits semánticos**: `feat: add patient creation form`
3. **Pull Request**: Revisión antes de fusionar
4. **Fusión a main**: Tras aprobación
5. **Limpieza**: Eliminación de ramas obsoletas

### Despliegue Automático

**Pipeline CI/CD con GitHub Actions + Vercel**:

```
Código → GitHub → Actions → Build → Deploy → Vercel
```

- **Trigger**: Push a rama `main`
- **Proceso**: Build automático y despliegue
- **Resultado**: Actualización inmediata en producción

## Arquitectura del Sistema

### Diseño por Capas

```
┌─────────────────────────────────────┐
│        CAPA DE PRESENTACIÓN         │
│     Next.js 15 + React 19          │
│     Server & Client Components      │
└─────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────┐
│        CAPA DE SERVICIOS            │
│       patients.service.ts           │
│    (Abstracción de datos)           │
└─────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────┐
│         CAPA DE DATOS               │
│   Simulación → PostgreSQL + Supabase│
└─────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────┐
│      CAPA DE INFRAESTRUCTURA        │
│    Vercel + GitHub Actions          │
└─────────────────────────────────────┘
```

### Principios de Diseño

**Server-First Architecture**:

- Server Components para mejor rendimiento
- Client Components solo para interacciones JavaScript
- Optimización automática de renderizado

**Separación de Responsabilidades**:

- Componentes enfocados en presentación
- Servicios con lógica de negocio abstraída
- Capa de datos independiente y intercambiable

## Decisiones de Diseño Clave

### 1. Simulación vs Backend Real

**Decisión**: Comenzar con datos simulados  
**Razón**: Desarrollo paralelo del frontend sin dependencias externas  
**Beneficio**: Iteración rápida y testing de UX inmediato

### 2. PostgreSQL vs NoSQL

**Decisión**: Base de datos relacional (PostgreSQL)  
**Razón**: Datos de salud requieren integridad y relaciones claras  
**Beneficio**: Consistencia y facilidad para auditorías

### 3. Supabase vs Backend Custom

**Decisión**: Backend-as-a-Service (Supabase)  
**Razón**: Acelerar desarrollo sin sacrificar funcionalidades  
**Beneficio**: Autenticación, API REST y dashboard incluidos

### 4. TypeScript vs JavaScript

**Decisión**: TypeScript en todo el proyecto  
**Razón**: Aplicaciones de salud requieren máxima confiabilidad  
**Beneficio**: Detección temprana de errores

## Funcionalidades Planificadas

### Próxima Iteración

- **Sistema CRUD completo**: Formularios para crear, editar y eliminar pacientes
- **Validación de datos**: Esquemas robustos con manejo de errores
- **Estados avanzados**: Workflow completo del estado del paciente

### Expansiones Futuras

- **Módulo de citas**: Calendario y programación
- **Sistema de notificaciones**: Recordatorios y alertas
- **Reportes**: Estadísticas y análisis
- **Integración con mapas**: Optimización de rutas

## Conclusión

Las decisiones técnicas de Cuidapp equilibran velocidad de desarrollo, escalabilidad y experiencia de usuario. La elección de un stack moderno, arquitectura modular y prácticas profesionales proporciona una base sólida para el crecimiento del proyecto.

Este enfoque facilita el desarrollo actual y prepara la aplicación para futuras expansiones, manteniendo el foco en resolver desafíos reales del sector de atención domiciliaria.

---

_Documentación actualizada: Junio 2025_
