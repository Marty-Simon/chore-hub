# Chore Hub - Setup Instructions

This document explains how to properly configure the Chore Hub application so that chores can be created and displayed.

## Current Status

The application has been configured with:
- ✅ DATABASE_URL environment variable set for the API package
- ✅ Seed script created to initialize default household and user
- ✅ Chore creation form that saves to database
- ✅ Calendar view that displays schedules
- ✅ Chores list view that displays all chores

## Database Setup Required

The database server needs to be accessible at `10.2.4.2:5432`. Once accessible, follow these steps:

### 1. Push Database Schema

Run this to create the database tables:

```bash
cd packages/database
yarn prisma db push
```

### 2. Seed Initial Data

The app uses temporary hardcoded IDs (`temp-household-id` and `temp-user-id`). To create these records in the database:

```bash
cd packages/api
yarn seed
```

This will create:
- A household with ID: `temp-household-id`, name: "My Household"
- A user with ID: `temp-user-id`, name: "Default User", email: "user@example.com"

### 3. Restart the API Server

After database setup, restart the API server:

```bash
yarn api:dev
```

## How It Works

### Creating Chores

1. Navigate to "All Chores" → "New Chore"
2. Fill in the form:
   - Title (required)
   - Description (optional)
   - Task Breakdown - bullet points (optional)
   - Frequency: Daily, Weekly, or Monthly
   - For Weekly: Select specific days of the week
   - Schedule Duration: How many months to generate schedules (default 6)
   - Scheduled Time: When the chore should be done each day
   - Estimated Duration: How long the chore takes
   - Privacy: Make it private (only visible to assignees)

3. Click "Create Chore"

The system will:
- Create the chore in the database
- Automatically generate schedule instances based on:
  - Start date: Today
  - End date: Today + selected months
  - Recurrence pattern (daily/weekly/monthly)
  - Selected weekdays (for weekly chores)

### Viewing Chores

**Calendar View** (`/calendar`):
- Shows all scheduled chore instances on a calendar
- Color-coded by status (pending, in progress, completed)
- Click on a date to see chores scheduled for that day

**Chores List** (`/chores`):
- Shows all chore definitions
- Search functionality
- Click on a chore to see details and all its schedules

**My Chores** (`/my-chores`):
- Shows upcoming chores assigned to the current user
- Filtered by date range
- Mark chores as complete

## Database Schema

Key models:

- **Household**: Container for users and chores
- **User**: Household members who can be assigned chores
- **Chore**: Chore definition/template
- **ChoreSchedule**: Individual scheduled instances of a chore
- **ChoreInstruction**: Step-by-step instructions (future use)

## Temporary IDs

Currently using hardcoded IDs for development:
- Household ID: `temp-household-id`
- User ID: `temp-user-id`

These need to be replaced with proper authentication once implemented.

## Troubleshooting

### "Loading chores..." Never Finishes

This means the database connection is failing. Check:
1. DATABASE_URL environment variable is set correctly
2. Database server is accessible at the specified host and port
3. Database exists and tables have been created (run `db push`)
4. Seed data has been created (run `yarn seed`)

### Chores Not Appearing After Creation

1. Check browser console for errors
2. Check API server logs for database errors
3. Verify the household and user exist in the database
4. Ensure schedules were generated (check `ChoreSchedule` table)

### Calendar Shows No Events

1. Verify chores exist in the database
2. Verify schedules were generated for those chores
3. Check that the calendar view is querying with the correct householdId
4. Check the date range - the calendar shows current month by default
