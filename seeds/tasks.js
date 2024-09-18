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
      },
      {
        id: 5,
        category_id: 2,
        name: 'Reach out to 2 Product Managers',
        description: 'Cold reachout on LinkedIn to two Product Managers in your industry',
        month: 'January',
        date: '9'
      },      
      {
        id: 6,
        category_id: 3,
        name: 'Pull day',
        description: '4x Barbell Rows\n3x Wide-grip Lat Pull-downs\n3x Seated Cable Rows\n4x Preacher Curls\n3x Seated DB curls\n5x Cable Shrugs\n5x Y-Cable Pulldowns',
        month: 'January',
        date: '18'
      },      
      {
        id: 7,
        category_id: 2,
        name: 'Register for CodeDex hackathon and find a team',
        description: 'Register for Hackathon and message Ben to start a team together',
        month: 'January',
        date: '5'
      },      
      {
        id: 8,
        category_id: 3,
        name: 'Finalize final encounter in Dread',
        description: 'Research how to incorporate challenging fight dynamics for final boss',
        month: 'January',
        date: '26'
      },      
      {
        id: 9,
        category_id: 1,
        name: 'Finish Lecture 2 on PostGRE SQL',
        description: 'Finish lecture 2 on postgre sql and create your own database with tables ahead of the mini-project',
        month: 'January',
        date: '24'
      },      
      {
        id: 10,
        category_id: 2,
        name: 'Push day',
        description: 'Respond to riverside.fm',
        month: 'Research what the company is, then tailor response to show openness to other roles related to Product',
        date: '27'
      },      
      {
        id: 11,
        category_id: 3,
        name: 'Push day',
        description: '4x Chest press\n3x Incline DB Press\n3x Chest Flyes\n4x Overhead Cable Extensions\nTricep Dips\n5x Single-arm tricep extensions\n5x Rotator Cuff pivots',
        month: 'January',
        date: '16'
      },
      {
        id: 12,
        category_id: 2,
        name: 'Thank Edward',
        description: 'Send a quick message to eddy saying thanks',
        month: 'January',
        date: '30'
      }
    ]);
  };