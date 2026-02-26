/**
 * Database seeder - creates default household and user for development
 */

import { prisma } from '@chore-hub/database';

async function seed() {
  console.log('🌱 Seeding database...');

  // Create or update default household
  const household = await prisma.household.upsert({
    where: { id: 'temp-household-id' },
    update: {},
    create: {
      id: 'temp-household-id',
      name: 'My Household',
    },
  });

  console.log('✅ Created household:', household.name);

  // Create or update default user
  const user = await prisma.user.upsert({
    where: { id: 'temp-user-id' },
    update: {},
    create: {
      id: 'temp-user-id',
      name: 'Default User',
      email: 'user@example.com',
      householdId: household.id,
      role: 'ADMIN',
    },
  });

  console.log('✅ Created user:', user.name);
  console.log('🎉 Seeding complete!');
}

seed()
  .catch((error) => {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
