export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('months').del();
    await knex('months').insert([
      {
        id: 1,
        month: 'January',
        startday: 'Monday',
        days: 31,
        year: 2024
      },
      {
        id: 2,
        month: 'February',
        startday: 'Thursday',
        days: 29,
        year: 2024
      },
      {
        id: 3,
        month: 'March',
        startday: 'Friday',
        days: 31,
        year: 2024
      },
      {
        id: 4,
        month: 'April',
        startday: 'Monday',
        days: 30,
        year: 2024
      },
      {
        id: 5,
        month: 'May',
        startday: 'Wednesday',
        days: 31,
        year: 2024
      },
      {
        id: 6,
        month: 'June',
        startday: 'Saturday',
        days: 30,
        year: 2024
      },
      {
        id: 7,
        month: 'July',
        startday: 'Monday',
        days: 31,
        year: 2024
      },
      {
        id: 8,
        month: 'August',
        startday: 'Thursday',
        days: 31,
        year: 2024
      },
      {
        id: 9,
        month: 'September',
        startday: 'Sunday',
        days: 30,
        year: 2024
      },
      {
        id: 10,
        month: 'October',
        startday: 'Tuesday',
        days: 31,
        year: 2024
      },
      {
        id: 11,
        month: 'November',
        startday: 'Friday',
        days: 30,
        year: 2024
      },
      {
        id: 12,
        month: 'December',
        startday: 'Sunday',
        days: 31,
        year: 2024
      },
    ]);
  };