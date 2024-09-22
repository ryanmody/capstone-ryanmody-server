export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('categories').del();
    await knex('categories').insert([
      {
        id: 1,
        name: 'Skill Building',
        details: 'Time allotted for building new skills',
        color: 'green'
      },
      {
        id: 2,
        name: 'Career, Networking, and Events',
        details: 'Activities related to seeking career opportunities or building professional network',
        color: 'red'
      },
      {
        id: 3,
        name: 'Nutrition and Fitness',
        details: 'Actions for maintaining health and wellness!',
        color: 'blue'
      }
    ]);
  };