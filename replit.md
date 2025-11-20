# OGQ 스티커 심리테스트 (OGQ Sticker Personality Quiz)

## Overview

A Korean-language personality quiz web application that helps users discover their matching OGQ sticker character through a series of playful, branching questions. The app features a cute, kawaii-style design inspired by Korean personality test platforms, with a mobile-first approach optimized for social sharing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter (lightweight client-side routing)
- Three main routes: Home (`/`), Quiz (`/quiz`), and Result (`/result/:resultId`)
- No authentication required - fully public application

**State Management**: React hooks with local component state
- Quiz progress tracked in component state (current question, answers history)
- No global state management library (Redux, Zustand, etc.) - simple enough for local state
- React Query for any future server-side data fetching needs

**UI Component Library**: Shadcn/ui with Radix UI primitives
- New York style variant
- Custom Tailwind configuration with extended color palette
- Component aliases configured for clean imports (`@/components`, `@/lib`, etc.)

**Styling Approach**:
- Tailwind CSS for utility-first styling
- Custom CSS variables for theming (light mode focused)
- Google Fonts: 'Noto Sans KR' for body text, 'Jua' for display/headings
- Pastel gradient backgrounds (pink, purple, blue)
- Mobile-first responsive design with breakpoints

**Design Philosophy**:
- Cute and approachable with soft shapes and cheerful interactions
- Large touch targets for mobile usability
- Micro-interactions and animations (bounce, pulse, scale effects)
- Screenshot-friendly result pages for social sharing

### Backend Architecture

**Server**: Express.js with TypeScript
- Minimal API surface - currently no active endpoints
- Configured for future expansion with `/api` prefix convention
- Vite middleware integration for development hot module replacement

**Data Storage Strategy**:
- Quiz content stored in static TypeScript file (`shared/quizData.ts`)
- In-memory storage implementation (`MemStorage`) currently used for future user data
- Drizzle ORM configured for PostgreSQL (via Neon serverless driver)
- Database schema defined but not actively used yet

**Session Management**: Not currently implemented
- `connect-pg-simple` dependency present for future session storage
- No authentication system in place

**Rationale**: The quiz data is static content that doesn't change frequently, making file-based storage ideal for read-heavy operations. Database infrastructure is configured for future features like saving user results, analytics, or user-generated quizzes.

### Application Data Flow

1. **Quiz Structure**: Tree-based branching logic
   - Start question with 3 initial paths
   - Each path leads to 2-4 follow-up questions
   - Questions reference next question ID or result ID
   - ~50+ unique result characters

2. **User Journey**:
   - Home page displays quiz card with start button
   - Quiz page shows one question at a time with progress indicator
   - User selections stored in local state as answer history
   - Final selection navigates to result page with character details
   - Result page includes sharing functionality and link to OGQ product

3. **Quiz Data Schema**:
   ```typescript
   Quiz {
     questions: QuizQuestion[]  // Branching question tree
     results: QuizResult[]      // Character outcomes
   }
   ```

### Build and Deployment

**Development**:
- `npm run dev` - Starts Express server with Vite middleware
- Hot module replacement for client-side changes
- TypeScript compilation without emit (type checking only)

**Production Build**:
- `npm run build` - Vite builds client to `dist/public`, esbuild bundles server to `dist`
- Static assets served from Express in production
- ESM module format throughout

**File Structure**:
- `/client` - React application source
- `/server` - Express backend
- `/shared` - Shared TypeScript types and data
- `/attached_assets` - Quiz content source files (Korean text)

## External Dependencies

### Core Framework Dependencies

- **React 18** - UI rendering library
- **Wouter** - Lightweight routing (~1.2kB)
- **Vite** - Build tool and dev server
- **Express** - Backend web framework

### UI Component Libraries

- **Radix UI** - Headless accessible components (accordion, dialog, dropdown, etc.)
- **Shadcn/ui** - Pre-styled component patterns built on Radix
- **Lucide React** - Icon library

### Styling and Design

- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Type-safe variant styling
- **Google Fonts** - 'Noto Sans KR' and 'Jua' fonts via CDN

### Database and ORM

- **Drizzle ORM** - TypeScript ORM for SQL databases
- **@neondatabase/serverless** - Postgres connection for Neon (serverless PostgreSQL)
- **drizzle-zod** - Zod schema generation from Drizzle tables
- Database configured but not actively used for current quiz functionality

### Data Fetching and Forms

- **@tanstack/react-query** - Server state management (configured but minimal usage)
- **react-hook-form** - Form state management
- **zod** - TypeScript-first schema validation
- **@hookform/resolvers** - React Hook Form + Zod integration

### Development Tools

- **TypeScript** - Type safety throughout application
- **tsx** - TypeScript execution for Node.js
- **esbuild** - Fast bundling for server code
- **@replit/vite-plugin-*** - Replit-specific development tooling

### Rationale for Key Choices

**Why Wouter over React Router?** - Smaller bundle size for a simple three-route application. No need for advanced routing features like loaders or nested routing.

**Why Drizzle over Prisma?** - Better TypeScript integration, lighter weight, and designed for edge/serverless environments (Neon compatibility).

**Why Shadcn/ui over Material-UI or Chakra?** - Copy-paste component pattern provides full control over styling and avoids large dependency bundles. Better alignment with Tailwind CSS workflow.

**Why in-memory storage currently?** - Quiz results don't require persistence for core functionality. Database infrastructure is ready for future features (user accounts, saved results, analytics).