export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('tasks').del();
    await knex('tasks').insert([
      {
        id: 1,
        category_id: 1,
        name: 'Finish TOP lecture 12',
        description: 'Finish all JS lectures in TOP',
        month: 'January',
        date: '11'
      },
      {
        id: 2,
        category_id: 2,
        name: 'Attend Brainstation Networking event',
        description: 'Attend Intro to Product Management networking event at Brainstation',
        month: 'January',
        date: '30'
      },
      {
        id: 3,
        category_id: 3,
        name: 'Log calories for today',
        description: 'Log calories and protein for the day',
        month: 'January',
        date: '22'
      },
      {
        id: 4,
        category_id: 1,
        name: 'Start Ruby lecture in FreeCodeCamp',
        description: 'Complete courses 1-29 on FCC for Ruby',
        month: 'January',
        date: '9'
      }
    ]);
  };