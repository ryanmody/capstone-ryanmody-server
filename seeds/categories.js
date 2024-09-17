export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('categories').del();
    await knex('categories').insert([
      {
        id: 1,
        name: 'Skill Building',
        color: 'green'
      },
      {
        id: 2,
        name: 'Career, Networking, and Events',
        color: 'red'
      },
      {
        id: 3,
        name: 'Nutrition and Fitness',
        color: 'blue'
      }
    ]);
  };