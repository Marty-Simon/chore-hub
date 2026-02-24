# Chore Hub - Household Chore Management App

A comprehensive household chore management application built with Idealyst framework, allowing families to organize, schedule, and track household chores.

## Features

### ✅ Core Features Implemented

1. **Household Management**
   - Create and manage households
   - Add multiple family members
   - View household statistics

2. **Chore Definitions**
   - Create chores with titles and descriptions
   - Set recurrence patterns (daily, weekly, monthly)
   - Add estimated time to complete
   - Create step-by-step instructions for each chore
   - Privacy controls (public or private chores)

3. **Chore Scheduling**
   - Automatic schedule generation based on recurrence
   - Assign chores to specific household members
   - Track chore status (Pending, In Progress, Completed, Skipped)
   - View upcoming chores

4. **Calendar Views**
   - Day, week, and month views
   - Visual calendar with scheduled chores
   - Filter by date range
   - See chore details and assignments

5. **User Interface**
   - **Home Screen**: Quick access to all features with stats
   - **My Chores**: View assigned chores with completion tracking
   - **Calendar View**: Visual calendar with filtering options
   - **All Chores**: Browse all household chores
   - **Chore Detail**: View instructions and schedule history

### 🔄 Database Schema

The app uses PostgreSQL with the following models:

- **Household**: Groups of users sharing chores
- **User**: Household members with email and name
- **Chore**: Chore templates with recurrence settings
- **ChoreInstruction**: Step-by-step instructions
- **ChoreSchedule**: Scheduled instances with assignments
- **CalendarConnection**: External calendar integration (prepared for future)

### 🎯 Privacy Features

- **Private Chores**: Mark chores as private so only assigned users see them
- **User Filtering**: API automatically filters chores based on user permissions

### 📱 Cross-Platform

Built with Idealyst framework:
- **Web**: Full responsive web application
- **Mobile**: iOS and Android (React Native)
- **Shared codebase**: All screens and logic shared between platforms

## Setup Instructions

### 1. Database Setup

The app requires PostgreSQL. When the container is activated with a projectId and featureId:

```bash
# The database will be automatically configured
# Run migrations to create tables:
yarn workspace @chore-hub/database prisma migrate dev
```

### 2. Install Dependencies

Dependencies are already installed, including:
- `@idealyst/datepicker` for calendar functionality
- tRPC for type-safe API
- Prisma for database ORM

### 3. Start Development Servers

```bash
# Start API server
yarn workspace @chore-hub/api dev

# Start web app
yarn workspace @chore-hub/web dev

# Start mobile app (iOS)
yarn workspace @chore-hub/mobile ios

# Start mobile app (Android)
yarn workspace @chore-hub/mobile android
```

## API Endpoints (tRPC)

### Household Router
- `household.list` - Get all households
- `household.getById` - Get household with members and chores
- `household.create` - Create new household
- `household.update` - Update household
- `household.delete` - Delete household

### User Router
- `user.listByHousehold` - Get all members of a household
- `user.getById` - Get user with assigned chores
- `user.create` - Add new household member
- `user.update` - Update user details
- `user.delete` - Remove user

### Chore Router
- `chore.listByHousehold` - Get all chores (with privacy filtering)
- `chore.getById` - Get chore with instructions
- `chore.create` - Create new chore
- `chore.update` - Update chore
- `chore.delete` - Delete chore
- `chore.instructions.create` - Add instruction step
- `chore.instructions.update` - Update instruction
- `chore.instructions.delete` - Remove instruction

### Schedule Router
- `schedule.listByDateRange` - Get schedules in date range
- `schedule.upcoming` - Get user's upcoming chores
- `schedule.getById` - Get schedule details
- `schedule.create` - Create manual schedule
- `schedule.update` - Update schedule
- `schedule.complete` - Mark chore as completed
- `schedule.delete` - Delete schedule
- `schedule.generateForChore` - Auto-generate schedules based on recurrence

## Future Enhancements (Ready for Implementation)

### 🔗 Calendar Integration
The database schema includes `CalendarConnection` model for:
- Google Calendar sync
- Outlook Calendar sync
- Prevent scheduling chores during busy times
- Export chore schedules to external calendars

### 🎨 Additional Features
- Push notifications for upcoming chores
- Chore completion rewards/gamification
- Photo attachments for completed chores
- Chore templates library
- Analytics and reporting
- Recurring chore rotation among members
- Custom recurrence patterns (e.g., "every other Monday")
- Chore categories and tags

### 🔐 Authentication
Currently uses temporary user IDs. Ready to integrate:
- Email/password authentication
- OAuth providers (Google, Apple)
- User sessions and JWT tokens
- Household invitation system

## Tech Stack

- **Frontend**: Idealyst components, React 19
- **Backend**: Node.js, Express, tRPC
- **Database**: PostgreSQL with Prisma ORM
- **Mobile**: React Native with Idealyst
- **Validation**: Zod schemas
- **Type Safety**: TypeScript throughout

## Project Structure

```
packages/
├── api/              # tRPC API server
│   └── src/
│       └── trpc/
│           └── routers/
│               ├── household.ts
│               ├── user.ts
│               ├── chore.ts
│               └── schedule.ts
├── database/         # Prisma schema and client
│   ├── prisma/
│   │   └── schema.prisma
│   └── src/
│       └── schemas.ts    # Zod validation
├── shared/           # Shared UI components & screens
│   └── src/
│       ├── screens/
│       │   ├── Home.tsx
│       │   ├── MyChores.tsx
│       │   ├── CalendarView.tsx
│       │   ├── ChoresList.tsx
│       │   └── ChoreDetail.tsx
│       └── navigation/
│           └── AppRouter.ts
├── web/             # Web application (Vite)
└── mobile/          # React Native mobile app
```

## Notes

- The app is designed with household privacy in mind
- All tRPC endpoints use `publicProcedure` - ready for authentication middleware
- Recurrence scheduling is handled server-side with `generateForChore` endpoint
- Calendar connections table is prepared but not yet implemented
- All screens are cross-platform compatible (web + mobile)

---

Built with ❤️ using Idealyst Framework
