---
title: "Requerimientos de CuidApp"
description: "Requerimientos funcionales y no funcionales para la aplicación de atención domiciliaria"
---

# Requerimientos de CuidApp

## Introducción

CuidApp es una aplicación web diseñada para optimizar la gestión de profesionales de atención domiciliaria y mejorar la experiencia de los pacientes, nacida de mi experiencia como kinesiólogo en Argentina.  
A diferencia de otras herramientas centradas en la administración, CuidApp pone en primer plano las necesidades de los profesionales en terreno y los pacientes, ofreciendo acceso directo a citas, registros clínicos y datos de profesionales (como especialidad y matrícula).  
Este documento detalla los requerimientos funcionales y no funcionales, reflejando el estado actual del proyecto (módulo de pacientes al 55%) y su visión futura, con un enfoque técnico pero accesible para mostrar cómo la tecnología puede resolver problemas reales en la atención domiciliaria.

---

## Alcance del Proyecto

CuidApp se estructura en cuatro módulos principales:

- **Pacientes:** Gestión de datos, dashboard con estadísticas y lista de pacientes, usado por profesionales y administradores.
- **Profesionales:** Registro de evaluaciones, reportes y mensajería (en desarrollo).
- **Admin:** Gestión de datos, configuración de accesos y cambio de estados de pacientes.
- **Vista de Paciente:** Interfaz de solo lectura para que los pacientes accedan a citas, registros y datos de profesionales (futuro).

El enfoque inicial está en el módulo de pacientes, con funcionalidades como lista de pacientes, vista detallada y estadísticas. El próximo paso es el módulo de profesionales, seguido de citas y mensajería.

### Diagrama de Casos de Uso

```
+-------------------+         +-------------------+
|   Profesional     |         |      Admin        |
+-------------------+         +-------------------+
         |                             |
         |                             |
         v                             v
   Ver lista de pacientes        Gestionar pacientes
   Ver detalles de paciente      Configurar accesos
   Generar reportes              Cambiar estados
   Enviar mensajes               Enviar mensajes
         |
         v
+-------------------+
|     Paciente      |
+-------------------+
         |
         v
   Ver detalles propios
   Ver reportes
   Ver citas
   Enviar mensajes
```

---

## Requerimientos Funcionales

Los requerimientos funcionales se organizan como historias de usuario, agrupadas por rol, para reflejar las necesidades de cada tipo de usuario. También se describen flujos clave y validaciones.

### Historias de Usuario

#### Profesional

- Como profesional, quiero ver una lista de pacientes para planificar mis visitas, filtrada por estado (activo/inactivo/fallecido).
- Como profesional, quiero acceder a los datos y registros clínicos de un paciente para preparar la atención domiciliaria.
- Como profesional, quiero generar reportes de visitas o evaluaciones para documentar el progreso del paciente.
- Como profesional, quiero enviar mensajes a admin, otros profesionales o pacientes para coordinar tareas.

#### Admin

- Como admin, quiero gestionar datos de pacientes y profesionales (crear, editar) para mantener la información actualizada.
- Como admin, quiero ver reportes generados por profesionales para supervisar la atención.
- Como admin, quiero cambiar el estado de un paciente (activo/inactivo/fallecido) desde el dashboard para reflejar su situación.
- Como admin, quiero configurar accesos y la app (por ejemplo, permisos) para garantizar un uso seguro.
- Como admin, quiero enviar mensajes a profesionales o pacientes para comunicarme directamente.

#### Paciente

- Como paciente, quiero ver mis registros clínicos y reportes para seguir mi progreso.
- Como paciente, quiero acceder a datos de los profesionales asignados (especialidad, matrícula) para mayor confianza.
- Como paciente, quiero ver mis próximas citas para organizarme.
- Como paciente, quiero enviar mensajes o contactar al equipo para consultas o coordinación.

---

### Flujo de Trabajo: Creación de Paciente

**Usuario:** Admin

**Pasos:**

1. Accede al formulario de creación de paciente desde el dashboard.
2. Ingresa datos obligatorios: nombre completo, DNI, contacto (teléfono/email).
3. Opcionalmente, añade dirección, fecha de nacimiento, contacto de emergencia.
4. El sistema valida los datos (DNI, teléfono, email).
5. Si es válido, guarda el paciente con estado "activo" por defecto.
6. Si hay errores, muestra un mensaje claro.

**Estado Actual:** No implementado (planeado para próximo sprint).

#### Diagrama de Flujo

#### Diagrama de Flujo

```
[Admin]
   |
   v
[Formulario Crear Paciente]
   |
   v
[Ingresa nombre, DNI, contacto]
   |
   v
[Valida Datos]
   |---------------------------|
   |                           |
   v                           v
[Datos válidos]           [Error]
   |                           |
   v                           v
[Guarda Paciente]       [Muestra Mensaje]
   |
   v
[Paciente Creado (Estado: Activo)]
```

---

### Validaciones

- **DNI:** Formato numérico válido (Argentina, 7-8 dígitos).
- **Teléfono:** Formato internacional o local (+54 o 11-xxxx-xxxx).
- **Email:** Formato estándar (ejemplo@dominio.com).
- **Dirección:** Validada para uso en mapas (formato compatible con APIs como Google Maps).

**Estado Actual:** Planeado, no implementado.

---

### Funcionalidades Futuras

- Compartir agendas entre profesionales.
- Calcular rutas óptimas para visitas domiciliarias.
- Enviar recordatorios automáticos de citas.

---

## Requerimientos No Funcionales

Los requerimientos no funcionales aseguran que CuidApp sea rápida, accesible, segura y escalable, especialmente en el contexto de atención domiciliaria en Argentina.

### Rendimiento

- La lista de pacientes carga en menos de 2 segundos (hasta 100 pacientes).
- La vista detallada carga en menos de 1 segundo.
- Optimizada para conexiones lentas (3G) en visitas domiciliarias.

### Accesibilidad

- Cumple con WCAG 2.1 (nivel AA): alto contraste, compatibilidad con lectores de pantalla, navegación por teclado.

### Seguridad

- Autenticación de usuarios (planeada, por ejemplo, con Supabase Auth).
- Cifrado de datos en tránsito (SSL/TLS).
- Cumplimiento con la Ley 25.326 de Protección de Datos Personales (Argentina).

### Plataformas

- Web responsiva, soportando desktop (≥1024px), tablet (≥768px) y móvil (≥320px), usando Tailwind CSS.

### Escalabilidad

- Soporta 50-100 pacientes activos y hasta 10 profesionales concurrentes.

### Usabilidad

- Crear un paciente en menos de 1 minuto.
- Acceder al dashboard en menos de 3 clics desde el inicio.

---

## Tabla de Requerimientos

| Requerimiento          | Tipo        | Detalle                     |
| ---------------------- | ----------- | --------------------------- |
| Ver lista de pacientes | Funcional   | Filtrable por estado, <2s   |
| Crear paciente         | Funcional   | Admin, <1 minuto            |
| Carga de lista         | Rendimiento | <2 segundos                 |
| Accesibilidad          | Usabilidad  | WCAG 2.1 (AA)               |
| Seguridad              | Seguridad   | Cifrado SSL/TLS, Ley 25.326 |

---

## Wireframe: Vista Detallada de Paciente

```
----------------------------------------
| CuidApp - Vista Detallada de Paciente |
----------------------------------------
| [Nombre: Juan Pérez (blureado)]       |
| DNI: 12345678                        |
| Edad: 65 | Estado: Activo            |
| Dirección: Av. Libertador 123, CABA  |
| Teléfono: +54 11 1234-5678           |
| Email: juan@email.com                |
| Contacto Emergencia: María (hija)    |
----------------------------------------
| Registros Clínicos                   |
| - 01/06/2025: Signos vitales (120/80)|
| - 15/06/2025: Nota de visita         |
----------------------------------------
| [Botón: Volver] [Botón: Editar]      |
----------------------------------------
```

---

## Validación de Requerimientos

- **Pruebas de Aceptación:**  
  Ejemplo: "La lista de pacientes carga en <2s con 100 pacientes, verificado en Chrome con conexión 3G simulada."  
  Criterios claros por historia de usuario (por ejemplo, "El formulario de creación valida DNI correctamente").

- **Pruebas de Usabilidad (planeadas):**  
  Feedback con profesionales (kinesiólogos, enfermeros) para evaluar la navegación y utilidad.  
  Feedback con pacientes para confirmar accesibilidad de la vista de paciente.

**Estado Actual:** Validación inicial en pruebas internas; pruebas con usuarios reales en futuros sprints.

---

## Estado Actual y Roadmap

### Estado Actual (módulo de pacientes, 55% completado):

- Lista de pacientes (filtrable por estado).
- Vista detallada (datos básicos: nombre, DNI, dirección, edad, teléfono, email, contacto de emergencia).
- Dashboard con estadísticas estáticas (distribución por estado, geográfica, edad, tendencia mensual).

### Próximos Pasos

- Implementar creación de pacientes (admin).
- Añadir registros clínicos y reportes en la vista detallada.
- Desarrollar módulo de profesionales (evaluaciones, reportes).

### Futuro

- Módulo de citas (agendas, recordatorios).
- Integración con mapas (rutas).
- Sistema de mensajería.

---

## Conclusión

CuidApp combina una arquitectura técnica moderna (Next.js, Supabase) con un enfoque centrado en el usuario, resolviendo problemas reales de la atención domiciliaria en Argentina.  
Los requerimientos aquí descritos aseguran una aplicación intuitiva, segura y escalable, que empodera a profesionales y pacientes.  
Este documento no solo guía el desarrollo, sino que refleja un compromiso con la calidad técnica y la empatía por las necesidades del sector salud.

---

**Última actualización:** Junio 2025
