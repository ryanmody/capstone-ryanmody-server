export async function seed(knex) {
    await knex('tasks').del();
    await knex('tasks').insert([
      {
        id: 1,
        category_id: 1,
        name: 'Finish TOP lecture 12',
        description: 'Finish all JS lectures in TOP',
        month: 'October',
        date: '11'
      },
      {
        id: 2,
        category_id: 2,
        name: 'Attend Brainstation Networking event',
        description: 'Attend Intro to Product Management networking event at Brainstation',
        month: 'October',
        date: '30'
      },
      {
        id: 3,
        category_id: 3,
        name: 'Log calories for today',
        description: 'Log calories and protein for the day',
        month: 'October',
        date: '22'
      },
      {
        id: 4,
        category_id: 1,
        name: 'Start Ruby lecture in FreeCodeCamp',
        description: 'Complete courses 1-29 on FCC for Ruby',
        month: 'October',
        date: '9'
      },
      {
        id: 5,
        category_id: 2,
        name: 'Reach out to 2 Product Managers',
        description: 'Cold reachout on LinkedIn to two Product Managers in your industry',
        month: 'October',
        date: '9'
      },      
      {
        id: 6,
        category_id: 3,
        name: 'Pull day',
        description: '4x Barbell Rows\n3x Wide-grip Lat Pull-downs\n3x Seated Cable Rows\n4x Preacher Curls\n3x Seated DB curls\n5x Cable Shrugs\n5x Y-Cable Pulldowns',
        month: 'October',
        date: '18'
      },      
      {
        id: 7,
        category_id: 2,
        name: 'Register for CodeDex hackathon and find a team',
        description: 'Register for Hackathon and message Ben to start a team together',
        month: 'October',
        date: '5'
      },      
      {
        id: 8,
        category_id: 3,
        name: 'Finalize final encounter in Dread',
        description: 'Research how to incorporate challenging fight dynamics for final boss',
        month: 'October',
        date: '26'
      },      
      {
        id: 9,
        category_id: 1,
        name: 'Finish Lecture 2 on PostGRE SQL',
        description: 'Finish lecture 2 on postgre sql and create your own database with tables ahead of the mini-project',
        month: 'October',
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
        description: '4x Chest press,\n3x Incline DB Press,\n3x Chest Flyes,\n4x Overhead Cable Extensions,\n3x Tricep Dips,\n5x Single-arm tricep extensions,\n5x Rotator Cuff',
        month: 'October',
        date: '16'
      },
      {
        id: 12,
        category_id: 2,
        name: 'Thank Edward',
        description: 'Send a quick message to eddy saying thanks',
        month: 'October',
        date: '30'
      },
      {
        id: 13,
        category_id: 1,
        name: 'Build out logic to select only tasks that have ',
        description: 'Send a quick message to eddy saying thanks',
        month: 'November',
        date: '1'
      },
      {
        id: 14,
        category_id: 2,
        name: 'Update LinkedIn profile',
        description: 'Add recent projects and experiences to your LinkedIn profile',
        month: 'September',
        date: '15'
      },
      {
        id: 15,
        category_id: 3,
        name: 'Meal prep for the week',
        description: 'Prepare meals for the upcoming week focusing on protein and veggies',
        month: 'September',
        date: '20'
      },
      {
        id: 16,
        category_id: 1,
        name: 'Complete React hooks tutorial',
        description: 'Work through tutorials on React hooks like useState and useEffect',
        month: 'October',
        date: '12'
      },
      {
        id: 17,
        category_id: 2,
        name: 'Reach out to recruiter',
        description: 'Cold message a recruiter at a tech company on LinkedIn',
        month: 'October',
        date: '21'
      },
      {
        id: 18,
        category_id: 3,
        name: 'Leg day workout',
        description: '4x Squats\n3x Leg Press\n3x Hamstring Curls\n3x Calf Raises\n4x Lunges',
        month: 'October',
        date: '7'
      },
      {
        id: 19,
        category_id: 1,
        name: 'Read 3 chapters of JavaScript book',
        description: 'Continue reading Eloquent JavaScript, chapters 5-7',
        month: 'November',
        date: '2'
      },
      {
        id: 20,
        category_id: 2,
        name: 'Attend industry webinar',
        description: 'Participate in the tech trends webinar hosted by TechCrunch',
        month: 'November',
        date: '17'
      },
      {
        id: 21,
        category_id: 3,
        name: 'Track daily macros',
        description: 'Use MyFitnessPal to log macros and ensure hitting protein goal',
        month: 'November',
        date: '23'
      },
      {
        id: 22,
        category_id: 1,
        name: 'Start learning Node.js',
        description: 'Watch the first two lessons on Node.js and build a basic server',
        month: 'December',
        date: '5'
      },
      {
        id: 23,
        category_id: 2,
        name: 'Update resume',
        description: 'Revise your resume to include the most recent role and projects',
        month: 'December',
        date: '12'
      },
      {
        id: 24,
        category_id: 3,
        name: 'Full body workout',
        description: '3x Deadlifts\n3x Bench Press\n3x Pull-ups\n3x Squats',
        month: 'December',
        date: '19'
      },
      {
        id: 25,
        category_id: 1,
        name: 'Complete JavaScript project 1',
        description: 'Build a small app using vanilla JavaScript for practice',
        month: 'September',
        date: '10'
      },
      {
        id: 26,
        category_id: 2,
        name: 'Attend product management workshop',
        description: 'Join an online workshop on product management best practices',
        month: 'September',
        date: '17'
      },
      {
        id: 27,
        category_id: 3,
        name: 'Track hydration for the day',
        description: 'Ensure to drink 3L of water throughout the day',
        month: 'September',
        date: '23'
      },
      {
        id: 28,
        category_id: 1,
        name: 'Watch React Context API tutorial',
        description: 'Complete a tutorial on using React Context API for state management',
        month: 'November',
        date: '4'
      },
      {
        id: 29,
        category_id: 2,
        name: 'Reach out to a mentor for feedback',
        description: 'Ask for advice from a mentor on recent project work',
        month: 'November',
        date: '6'
      },
      {
        id: 30,
        category_id: 3,
        name: 'Cardio workout',
        description: '30 min running\n15 min cycling\n10 min stair climbing',
        month: 'November',
        date: '13'
      },
      {
        id: 31,
        category_id: 1,
        name: 'Practice JavaScript array methods',
        description: 'Solve coding challenges focusing on array manipulation in JavaScript',
        month: 'November',
        date: '22'
      },
      {
        id: 32,
        category_id: 2,
        name: 'Update personal website',
        description: 'Add new projects and blog posts to your personal portfolio site',
        month: 'December',
        date: '1'
      },
      {
        id: 33,
        category_id: 3,
        name: 'Leg day workout',
        description: '4x Squats\n3x Lunges\n4x Leg Press\n3x Calf Raises',
        month: 'December',
        date: '7'
      },
      {
        id: 34,
        category_id: 1,
        name: 'Complete React project',
        description: 'Build a small to-do list app using React',
        month: 'September',
        date: '5'
      },
      {
        id: 35,
        category_id: 2,
        name: 'Attend tech meetup',
        description: 'Join a local tech meetup to network with developers and product managers',
        month: 'September',
        date: '20'
      },
      {
        id: 36,
        category_id: 3,
        name: 'Track calories for today',
        description: 'Log your meals and ensure to stay within your calorie limit',
        month: 'September',
        date: '18'
      },
      {
        id: 37,
        category_id: 1,
        name: 'Review JavaScript async/await',
        description: 'Go through tutorials on async/await and promises in JavaScript',
        month: 'November',
        date: '9'
      },
      {
        id: 38,
        category_id: 2,
        name: 'Apply to 3 job openings',
        description: 'Find and apply to three new job postings that match your skill set',
        month: 'November',
        date: '14'
      },
      {
        id: 39,
        category_id: 3,
        name: 'Upper body workout',
        description: '3x Bench Press\n3x Pull-ups\n3x Rows\n3x Shoulder Press',
        month: 'November',
        date: '20'
      },
      {
        id: 40,
        category_id: 1,
        name: 'Learn TypeScript basics',
        description: 'Complete a tutorial on the basics of TypeScript',
        month: 'December',
        date: '9'
      },
      {
        id: 41,
        category_id: 2,
        name: 'Set up an informational interview',
        description: 'Reach out to a product manager for an informational interview',
        month: 'December',
        date: '15'
      },
      {
        id: 42,
        category_id: 3,
        name: 'Full body workout',
        description: '3x Deadlifts\n3x Squats\n3x Bench Press\n3x Rows',
        month: 'December',
        date: '18'
      },
      {
        id: 43,
        category_id: 1,
        name: 'Solve JavaScript coding challenges',
        description: 'Solve 5 coding challenges on HackerRank focused on JavaScript',
        month: 'September',
        date: '22'
      },
      {
        id: 44,
        category_id: 2,
        name: 'Attend industry conference online',
        description: 'Participate in a virtual industry conference to stay up-to-date on trends',
        month: 'September',
        date: '28'
      },
      {
        id: 45,
        category_id: 3,
        name: 'Track macronutrient intake',
        description: 'Log protein, carbs, and fats for the day and adjust your meal plan',
        month: 'September',
        date: '30'
      },
      {
        id: 46,
        category_id: 1,
        name: 'Refactor JavaScript code',
        description: 'Go back and refactor your old JavaScript code for better readability',
        month: 'November',
        date: '3'
      },
      {
        id: 47,
        category_id: 2,
        name: 'Follow up on LinkedIn messages',
        description: 'Check in with professionals you previously connected with on LinkedIn',
        month: 'November',
        date: '8'
      },
      {
        id: 48,
        category_id: 3,
        name: 'Mobility exercises',
        description: '15 min mobility exercises for joints, focusing on flexibility and range',
        month: 'November',
        date: '15'
      },
      {
        id: 49,
        category_id: 1,
        name: 'Complete Python project',
        description: 'Work through the first 3 projects in a Python tutorial',
        month: 'December',
        date: '4'
      },
      {
        id: 50,
        category_id: 2,
        name: 'Research tech events',
        description: 'Find tech events happening in December and plan to attend',
        month: 'December',
        date: '10'
      },
      {
        id: 51,
        category_id: 3,
        name: 'Push day workout',
        description: '4x Bench Press\n3x Overhead Press\n3x Dips\n3x Push-ups',
        month: 'December',
        date: '20'
      },
      {
        id: 52,
        category_id: 1,
        name: 'Learn Node.js fundamentals',
        description: 'Go through the Node.js official docs and build a simple API',
        month: 'September',
        date: '24'
      },
      {
        id: 53,
        category_id: 2,
        name: 'Attend online job fair',
        description: 'Sign up and attend a virtual job fair for tech professionals',
        month: 'September',
        date: '26'
      },
      {
        id: 54,
        category_id: 3,
        name: 'Track sleep quality',
        description: 'Log sleep hours and aim for 7-8 hours of restful sleep',
        month: 'September',
        date: '29'
      },
      {
        id: 55,
        category_id: 1,
        name: 'Review React useEffect hook',
        description: 'Revisit useEffect tutorials and practice examples in your project',
        month: 'November',
        date: '11'
      },
      {
        id: 56,
        category_id: 2,
        name: 'Cold message 3 potential employers',
        description: 'Reach out to potential employers via LinkedIn with personalized messages',
        month: 'November',
        date: '19'
      },
      {
        id: 57,
        category_id: 3,
        name: 'Track protein intake for the day',
        description: 'Make sure to hit your daily protein target',
        month: 'November',
        date: '25'
      },
      {
        id: 58,
        category_id: 1,
        name: 'Complete SQL practice exercises',
        description: 'Solve 10 practice exercises for SQL queries',
        month: 'December',
        date: '6'
      },
      {
        id: 59,
        category_id: 2,
        name: 'Prepare for networking event',
        description: 'Research attendees and prepare questions for an upcoming networking event',
        month: 'December',
        date: '13'
      },
      {
        id: 60,
        category_id: 3,
        name: 'Active recovery day',
        description: '30 min walk and 10 min stretching to aid recovery',
        month: 'December',
        date: '21'
      },
      {
        id: 61,
        category_id: 1,
        name: 'Read 2 chapters of tech book',
        description: 'Continue reading a technical book of choice, 2 chapters',
        month: 'September',
        date: '14'
      },
      {
        id: 62,
        category_id: 2,
        name: 'Reach out to tech community',
        description: 'Post on a tech forum to get feedback on a project or idea',
        month: 'September',
        date: '27'
      },
      {
        id: 63,
        category_id: 3,
        name: 'Focus on meal timing',
        description: 'Ensure meals are spread out throughout the day for energy consistency',
        month: 'September',
        date: '25'
      },
      {
        id: 64,
        category_id: 1,
        name: 'Deep dive into CSS Grid',
        description: 'Complete a comprehensive tutorial on CSS Grid layout',
        month: 'September',
        date: '5'
      },
      {
        id: 65,
        category_id: 2,
        name: 'Attend virtual startup event',
        description: 'Participate in a virtual event to learn about startup trends',
        month: 'September',
        date: '5'
      },
      {
        id: 66,
        category_id: 3,
        name: 'Upper body workout',
        description: '3x Bench Press\n3x Rows\n3x Shoulder Press\n3x Tricep Dips',
        month: 'September',
        date: '5'
      },
      {
        id: 67,
        category_id: 1,
        name: 'Complete FreeCodeCamp JavaScript lessons',
        description: 'Finish all JavaScript lessons up to chapter 20 on FreeCodeCamp',
        month: 'September',
        date: '8'
      },
      {
        id: 68,
        category_id: 2,
        name: 'Apply to 2 product management jobs',
        description: 'Find and apply to two job openings in product management',
        month: 'September',
        date: '8'
      },
      {
        id: 69,
        category_id: 1,
        name: 'Learn advanced CSS animations',
        description: 'Work on complex CSS animations with keyframes and transitions',
        month: 'September',
        date: '10'
      },
      {
        id: 70,
        category_id: 3,
        name: 'Track hydration and protein intake',
        description: 'Ensure you meet your daily goal of 3L water and 150g protein',
        month: 'September',
        date: '10'
      },
      {
        id: 71,
        category_id: 1,
        name: 'Work on React Router implementation',
        description: 'Add dynamic routing to your React app using React Router',
        month: 'September',
        date: '12'
      },
      {
        id: 72,
        category_id: 2,
        name: 'Follow up with 3 LinkedIn contacts',
        description: 'Send follow-up messages to three recent LinkedIn connections',
        month: 'September',
        date: '12'
      },
      {
        id: 73,
        category_id: 3,
        name: 'Leg day workout',
        description: '4x Squats\n4x Deadlifts\n3x Lunges\n3x Calf Raises',
        month: 'September',
        date: '12'
      },
      {
        id: 74,
        category_id: 1,
        name: 'Review and refactor JavaScript codebase',
        description: 'Refactor a small project’s JavaScript code for performance improvements',
        month: 'September',
        date: '15'
      },
      {
        id: 75,
        category_id: 2,
        name: 'Attend webinar on career development',
        description: 'Participate in a webinar on strategies for career advancement in tech',
        month: 'September',
        date: '15'
      },
      {
        id: 76,
        category_id: 3,
        name: 'Track macros for 3 meals',
        description: 'Log the macros for breakfast, lunch, and dinner to meet calorie goals',
        month: 'September',
        date: '15'
      },
      {
        id: 77,
        category_id: 1,
        name: 'Solve 3 JavaScript coding challenges',
        description: 'Complete 3 new coding challenges on JavaScript array methods',
        month: 'September',
        date: '18'
      },
      {
        id: 78,
        category_id: 3,
        name: 'Push day workout',
        description: '3x Bench Press\n3x Overhead Press\n3x Push-ups\n3x Tricep Dips',
        month: 'September',
        date: '18'
      },
      {
        id: 79,
        category_id: 2,
        name: 'Attend online networking event',
        description: 'Participate in a virtual networking session for tech professionals',
        month: 'November',
        date: '6'
      },
      {
        id: 80,
        category_id: 3,
        name: 'Log meals for the day',
        description: 'Track and adjust meals to meet macronutrient targets',
        month: 'November',
        date: '6'
      },
      {
        id: 81,
        category_id: 1,
        name: 'Start learning GraphQL basics',
        description: 'Watch GraphQL tutorials and set up a simple API',
        month: 'November',
        date: '7'
      },
      {
        id: 82,
        category_id: 2,
        name: 'Prepare elevator pitch',
        description: 'Write and practice an elevator pitch for upcoming networking events',
        month: 'November',
        date: '8'
      },
      {
        id: 83,
        category_id: 3,
        name: 'Upper body strength training',
        description: '3x Bench Press\n3x Rows\n3x Dumbbell Curls\n3x Lat Pulldowns',
        month: 'November',
        date: '8'
      },
      {
        id: 84,
        category_id: 1,
        name: 'Deep dive into React useEffect',
        description: 'Work on advanced examples of useEffect in React',
        month: 'November',
        date: '9'
      },
      {
        id: 85,
        category_id: 2,
        name: 'Apply to 3 tech jobs',
        description: 'Submit applications to three product management or tech-related jobs',
        month: 'November',
        date: '9'
      },
      {
        id: 86,
        category_id: 3,
        name: 'Full body workout',
        description: '3x Squats\n3x Deadlifts\n3x Bench Press\n3x Shoulder Press',
        month: 'November',
        date: '9'
      },
      {
        id: 87,
        category_id: 1,
        name: 'Practice algorithms and data structures',
        description: 'Solve five problems focusing on data structures and algorithms',
        month: 'November',
        date: '11'
      },
      {
        id: 88,
        category_id: 2,
        name: 'Attend industry webinar',
        description: 'Join a webinar focused on the future of AI in product management',
        month: 'November',
        date: '11'
      },
      {
        id: 89,
        category_id: 3,
        name: 'Mobility and stretching routine',
        description: '20 minutes of mobility work and dynamic stretching',
        month: 'November',
        date: '11'
      },
      {
        id: 90,
        category_id: 1,
        name: 'Complete React project with hooks',
        description: 'Build a small app that uses React hooks (useState, useEffect)',
        month: 'November',
        date: '14'
      },
      {
        id: 91,
        category_id: 2,
        name: 'Follow up with hiring managers',
        description: 'Send follow-up emails to hiring managers for jobs applied to',
        month: 'November',
        date: '14'
      },
      {
        id: 92,
        category_id: 3,
        name: 'Leg day workout',
        description: '4x Squats\n3x Leg Press\n3x Lunges\n3x Hamstring Curls',
        month: 'November',
        date: '14'
      },
      {
        id: 93,
        category_id: 1,
        name: 'Learn advanced JavaScript topics',
        description: 'Watch tutorials on closures, hoisting, and event delegation',
        month: 'December',
        date: '2'
      },
      {
        id: 94,
        category_id: 2,
        name: 'Research upcoming tech conferences',
        description: 'Identify relevant tech conferences happening in the next 3 months',
        month: 'December',
        date: '2'
      },
      {
        id: 95,
        category_id: 3,
        name: 'Track protein intake',
        description: 'Ensure you hit your daily protein goal of 150g',
        month: 'December',
        date: '2'
      },
      {
        id: 96,
        category_id: 1,
        name: 'Start learning Express.js',
        description: 'Go through the basics of Express.js and build a simple API',
        month: 'December',
        date: '4'
      },
      {
        id: 97,
        category_id: 2,
        name: 'Network with tech recruiters',
        description: 'Send LinkedIn messages to 3 tech recruiters',
        month: 'December',
        date: '4'
      },
      {
        id: 98,
        category_id: 3,
        name: 'Leg day workout',
        description: '4x Squats\n4x Deadlifts\n3x Lunges\n3x Calf Raises',
        month: 'December',
        date: '4'
      },
      {
        id: 99,
        category_id: 1,
        name: 'Finish building personal project',
        description: 'Complete a project you started earlier, focusing on deployment',
        month: 'December',
        date: '6'
      },
      {
        id: 100,
        category_id: 2,
        name: 'Attend tech networking event',
        description: 'Join a local or virtual networking event in the tech industry',
        month: 'December',
        date: '6'
      },
      {
        id: 101,
        category_id: 3,
        name: 'Track daily calories and macros',
        description: 'Log daily intake of calories and macros for the day',
        month: 'December',
        date: '6'
      },
      {
        id: 102,
        category_id: 1,
        name: 'Research front-end testing libraries',
        description: 'Explore testing libraries like Jest and Cypress for React apps',
        month: 'December',
        date: '10'
      },
      {
        id: 103,
        category_id: 2,
        name: 'Prepare resume for job applications',
        description: 'Update and refine resume before sending job applications',
        month: 'December',
        date: '10'
      },
      {
        id: 104,
        category_id: 3,
        name: 'Full body workout',
        description: '3x Squats\n3x Deadlifts\n3x Rows\n3x Chest Press',
        month: 'December',
        date: '10'
      },
      {
        id: 105,
        category_id: 1,
        name: 'Watch advanced JavaScript tutorials',
        description: 'Learn about promises, async/await, and error handling in JavaScript',
        month: 'September',
        date: '25'
      },
      {
        id: 106,
        category_id: 2,
        name: 'Reach out to potential mentors on LinkedIn',
        description: 'Send a message to two potential mentors in the tech industry',
        month: 'September',
        date: '25'
      },
      {
        id: 107,
        category_id: 1,
        name: 'Complete SQL practice exercises',
        description: 'Finish 10 practice exercises on SQL joins and queries',
        month: 'September',
        date: '26'
      },
      {
        id: 108,
        category_id: 3,
        name: 'Meal prep for the week',
        description: 'Prepare healthy meals for the week ahead',
        month: 'September',
        date: '26'
      },
      {
        id: 109,
        category_id: 2,
        name: 'Attend networking webinar',
        description: 'Participate in a webinar about networking strategies for tech professionals',
        month: 'September',
        date: '27'
      },
      {
        id: 110,
        category_id: 1,
        name: 'Work on personal portfolio',
        description: 'Update portfolio projects and fine-tune the design',
        month: 'September',
        date: '27'
      },
      {
        id: 111,
        category_id: 1,
        name: 'Complete React state management tutorial',
        description: 'Watch a tutorial on Redux and Context API in React',
        month: 'October',
        date: '3'
      },
      {
        id: 112,
        category_id: 3,
        name: 'Lower body workout',
        description: '3x Squats\n3x Deadlifts\n3x Calf Raises\n3x Leg Curls',
        month: 'October',
        date: '3'
      },
      {
        id: 113,
        category_id: 2,
        name: 'Follow up with job application',
        description: 'Send a follow-up email to the hiring manager for a recent job application',
        month: 'October',
        date: '3'
      },
      {
        id: 114,
        category_id: 1,
        name: 'Research algorithms for interviews',
        description: 'Study common algorithms used in technical interviews',
        month: 'October',
        date: '6'
      },
      {
        id: 115,
        category_id: 2,
        name: 'Cold message industry leaders',
        description: 'Reach out to three leaders in product management on LinkedIn',
        month: 'October',
        date: '6'
      },
      {
        id: 116,
        category_id: 1,
        name: 'Review JavaScript ES6 features',
        description: 'Study ES6 features such as arrow functions, classes, and template literals',
        month: 'October',
        date: '9'
      },
      {
        id: 117,
        category_id: 3,
        name: 'Track macros for each meal',
        description: 'Log the protein, fats, and carbs for each meal throughout the day',
        month: 'October',
        date: '9'
      },
      {
        id: 118,
        category_id: 1,
        name: 'Refactor React project',
        description: 'Improve the performance and structure of a React project',
        month: 'October',
        date: '11'
      },
      {
        id: 119,
        category_id: 2,
        name: 'Schedule informational interview',
        description: 'Set up an informational interview with a product manager',
        month: 'October',
        date: '11'
      },
      {
        id: 120,
        category_id: 3,
        name: 'Meal prep for the week',
        description: 'Prepare and portion out meals for the upcoming week',
        month: 'October',
        date: '11'
      },
      {
        id: 121,
        category_id: 1,
        name: 'Learn CSS Flexbox',
        description: 'Work through a tutorial on CSS Flexbox layout',
        month: 'October',
        date: '14'
      },
      {
        id: 122,
        category_id: 2,
        name: 'Prepare LinkedIn post',
        description: 'Create a post on LinkedIn showcasing recent projects and achievements',
        month: 'October',
        date: '14'
      },
      {
        id: 123,
        category_id: 3,
        name: 'Track water intake',
        description: 'Ensure you drink at least 3 liters of water throughout the day',
        month: 'October',
        date: '14'
      },
      {
        id: 124,
        category_id: 1,
        name: 'Complete course on Git and GitHub',
        description: 'Finish an online course on using Git and GitHub for version control',
        month: 'October',
        date: '16'
      },
      {
        id: 125,
        category_id: 2,
        name: 'Reach out to former colleagues',
        description: 'Send a message to former colleagues to catch up and discuss potential opportunities',
        month: 'October',
        date: '16'
      },
      {
        id: 126,
        category_id: 1,
        name: 'Implement form validation in React app',
        description: 'Add validation to forms in your React project',
        month: 'October',
        date: '19'
      },
      {
        id: 127,
        category_id: 3,
        name: 'Leg day workout',
        description: '4x Squats\n3x Leg Press\n3x Lunges\n3x Calf Raises',
        month: 'October',
        date: '19'
      },
      {
        id: 128,
        category_id: 1,
        name: 'Read articles on product management strategies',
        description: 'Read two articles on effective product management strategies',
        month: 'October',
        date: '21'
      },
      {
        id: 129,
        category_id: 2,
        name: 'Attend local networking event',
        description: 'Participate in a networking event for tech professionals in your area',
        month: 'October',
        date: '21'
      },
      {
        id: 130,
        category_id: 3,
        name: 'Complete full-body workout',
        description: '4x Bench Press\n3x Squats\n3x Deadlifts\n3x Overhead Press',
        month: 'October',
        date: '21'
      },
      {
        id: 131,
        category_id: 4,
        name: 'Team meeting preparation',
        description: 'Prepare agenda for weekly team meeting and create talking points',
        month: 'September',
        date: '12'
      },
      {
        id: 132,
        category_id: 5,
        name: 'Watch movie with friends',
        description: 'Pick a movie and set up a movie night with friends',
        month: 'September',
        date: '13'
      },
      {
        id: 133,
        category_id: 6,
        name: 'Sketch a new character design',
        description: 'Create a character design for your portfolio',
        month: 'September',
        date: '15'
      },
      {
        id: 134,
        category_id: 7,
        name: 'Renew car insurance',
        description: 'Check renewal date and renew car insurance policy',
        month: 'September',
        date: '17'
      },
      {
        id: 135,
        category_id: 4,
        name: 'Client presentation',
        description: 'Present project progress to the client',
        month: 'September',
        date: '19'
      },
      {
        id: 136,
        category_id: 5,
        name: 'Dinner with family',
        description: 'Plan and enjoy dinner with family at a local restaurant',
        month: 'September',
        date: '22'
      },
      {
        id: 137,
        category_id: 6,
        name: 'Finish reading a novel',
        description: 'Finish the last 3 chapters of your current book',
        month: 'September',
        date: '23'
      },
      {
        id: 138,
        category_id: 7,
        name: 'Schedule dentist appointment',
        description: 'Call dentist and schedule a cleaning',
        month: 'September',
        date: '25'
      },
      {
        id: 139,
        category_id: 4,
        name: 'Create project timeline',
        description: 'Draft timeline for new product launch',
        month: 'September',
        date: '27'
      },
      {
        id: 140,
        category_id: 5,
        name: 'Go to the beach',
        description: 'Spend an afternoon relaxing at the beach with friends',
        month: 'September',
        date: '28'
      },
      {
        id: 141,
        category_id: 6,
        name: 'Start learning guitar',
        description: 'Practice beginner guitar chords for 30 minutes',
        month: 'October',
        date: '1'
      },
      {
        id: 142,
        category_id: 7,
        name: 'Renew gym membership',
        description: 'Check the renewal date and renew your gym membership for the next year',
        month: 'October',
        date: '2'
      },
      {
        id: 143,
        category_id: 4,
        name: 'Review quarterly performance reports',
        description: 'Analyze and review performance reports for Q3',
        month: 'October',
        date: '3'
      },
      {
        id: 144,
        category_id: 5,
        name: 'Attend local festival',
        description: 'Visit a local food or music festival with friends',
        month: 'October',
        date: '4'
      },
      {
        id: 145,
        category_id: 6,
        name: 'Paint a landscape',
        description: 'Create a landscape painting for your art collection',
        month: 'October',
        date: '5'
      },
      {
        id: 146,
        category_id: 7,
        name: 'Buy groceries for the week',
        description: 'Create a grocery list and shop for weekly essentials',
        month: 'October',
        date: '7'
      },
      {
        id: 147,
        category_id: 4,
        name: 'Submit financial report',
        description: 'Finalize and submit Q3 financial report to leadership',
        month: 'October',
        date: '8'
      },
      {
        id: 148,
        category_id: 5,
        name: 'Go on a hike',
        description: 'Plan a hiking trip with friends or family',
        month: 'October',
        date: '9'
      },
      {
        id: 149,
        category_id: 6,
        name: 'Play a board game',
        description: 'Have a game night with friends and play board games',
        month: 'October',
        date: '11'
      },
      {
        id: 150,
        category_id: 7,
        name: 'Pay utility bills',
        description: 'Pay all due utility bills for the month',
        month: 'October',
        date: '12'
      },
      {
        id: 151,
        category_id: 4,
        name: 'Send project status update',
        description: 'Email project status update to the team and stakeholders',
        month: 'October',
        date: '14'
      },
      {
        id: 152,
        category_id: 5,
        name: 'Watch sports game with friends',
        description: 'Host a get-together to watch your favorite sports game',
        month: 'October',
        date: '15'
      },
      {
        id: 153,
        category_id: 6,
        name: 'Learn a new recipe',
        description: 'Try a new recipe and cook a meal from scratch',
        month: 'October',
        date: '16'
      },
      {
        id: 154,
        category_id: 7,
        name: 'Call a family member',
        description: 'Catch up with a family member you haven’t spoken to in a while',
        month: 'October',
        date: '18'
      },
      {
        id: 155,
        category_id: 4,
        name: 'Prepare training session',
        description: 'Prepare materials and content for next week’s training session',
        month: 'October',
        date: '20'
      },
      {
        id: 156,
        category_id: 5,
        name: 'Attend a concert',
        description: 'Go to a live concert with friends or family',
        month: 'October',
        date: '22'
      },
      {
        id: 157,
        category_id: 6,
        name: 'Join a photography workshop',
        description: 'Sign up and attend a beginner photography workshop',
        month: 'October',
        date: '23'
      },
      {
        id: 158,
        category_id: 7,
        name: 'Car maintenance',
        description: 'Take your car for routine maintenance and oil change',
        month: 'October',
        date: '24'
      },
      {
        id: 159,
        category_id: 4,
        name: 'Update project roadmap',
        description: 'Review and update project roadmap based on new objectives',
        month: 'November',
        date: '1'
      },
      {
        id: 160,
        category_id: 5,
        name: 'Play video games',
        description: 'Spend the evening playing your favorite video games',
        month: 'November',
        date: '2'
      },
      {
        id: 161,
        category_id: 6,
        name: 'Practice piano',
        description: 'Spend 30 minutes practicing the piano',
        month: 'November',
        date: '3'
      },
      {
        id: 162,
        category_id: 7,
        name: 'Organize closet',
        description: 'Clean and organize your closet for the season',
        month: 'November',
        date: '4'
      },
      {
        id: 163,
        category_id: 4,
        name: 'Lead product demo',
        description: 'Host and lead product demo for stakeholders',
        month: 'November',
        date: '5'
      },
      {
        id: 164,
        category_id: 5,
        name: 'Attend game night',
        description: 'Go to a local bar for a game night event',
        month: 'November',
        date: '6'
      },
      {
        id: 165,
        category_id: 6,
        name: 'Bake cookies',
        description: 'Bake a batch of cookies for friends or family',
        month: 'November',
        date: '8'
      },
      {
        id: 166,
        category_id: 7,
        name: 'Clean up the yard',
        description: 'Rake leaves and clean up the backyard for winter',
        month: 'November',
        date: '9'
      },
      {
        id: 167,
        category_id: 4,
        name: 'Submit product launch plan',
        description: 'Submit detailed plan for upcoming product launch',
        month: 'November',
        date: '10'
      },
      {
        id: 168,
        category_id: 5,
        name: 'Watch a TV series',
        description: 'Start watching a new TV series over the weekend',
        month: 'November',
        date: '11'
      },
      {
        id: 169,
        category_id: 6,
        name: 'Finish knitting project',
        description: 'Complete the scarf you’ve been knitting',
        month: 'November',
        date: '12'
      },
      {
        id: 170,
        category_id: 7,
        name: 'File taxes',
        description: 'Prepare and file taxes before the deadline',
        month: 'November',
        date: '13'
      },
      {
        id: 171,
        category_id: 4,
        name: 'Draft performance review',
        description: 'Prepare draft of year-end performance reviews for team members',
        month: 'December',
        date: '1'
      },
      {
        id: 172,
        category_id: 5,
        name: 'Attend a holiday party',
        description: 'Join the annual holiday party with friends or coworkers',
        month: 'December',
        date: '3'
      },
      {
        id: 173,
        category_id: 6,
        name: 'Work on DIY project',
        description: 'Start building a bookshelf for your home office',
        month: 'December',
        date: '5'
      },
      {
        id: 174,
        category_id: 7,
        name: 'Send out holiday cards',
        description: 'Write and send holiday cards to family and friends',
        month: 'December',
        date: '6'
      },
      {
        id: 175,
        category_id: 4,
        name: 'Plan team-building activity',
        description: 'Organize a team-building activity for your department',
        month: 'December',
        date: '7'
      }
    ]);
  };