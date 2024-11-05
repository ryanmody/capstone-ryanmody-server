export async function seed(knex) {
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
      },
      {
        id: 4,
        name: 'Job Responsibilities',
        details: 'Tasks related to my current job',
        color: 'yellow'
      },
      {
        id: 5,
        name: 'Chill & Hangouts',
        details: 'Spend time with loved ones :-) ',
        color: 'orange'
      },
      {
        id: 6,
        name: 'Hobbies',
        details: 'Bucket for piqued interests',
        color: 'pink'
      },
      {
        id: 7,
        name: 'Other',
        details: 'Other tasks',
        color: 'purple'
      },
    ]);
  };