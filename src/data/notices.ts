export interface Notice {
  id: number;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  body: string;
}

export const notices: Notice[] = [
  {
    id: 1,
    title: 'School Reopening Guidelines for Fall Term',
    image: '/uploads/notice_images/image_1.jpg',
    date: 'Aug 15, 2025',
    excerpt: 'Important guidelines and safety protocols for the upcoming term.',
    body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
  },
  {
    id: 2,
    title: 'New Library Books Arrival',
    image: '/uploads/notice_images/image_2.jpg',
    date: 'Jul 22, 2025',
    excerpt: 'Over 500 new titles have been added to the central library collection.',
    body: '<p>We are pleased to announce the addition of over 500 new books to our library. These include academic textbooks, reference materials, and fiction.</p><ul><li>Science and Technology</li><li>Arts and Humanities</li><li>Business and Economics</li></ul><p>Please visit the library to explore the new arrivals.</p>'
  },
  {
    id: 3,
    title: 'Annual Science Fair Registration',
    image: '/uploads/notice_images/image_7.jpg',
    date: 'Jun 10, 2025',
    excerpt: 'Registration is now open for the Annual Science and Innovation Fair.',
    body: '<p>Students are invited to register their projects for the upcoming Science Fair. Projects can be submitted in teams of up to 4 members.</p><p>Categories include:</p><ul><li>Physics</li><li>Chemistry</li><li>Biology</li><li>Computer Science</li></ul>'
  },
  {
    id: 4,
    title: 'Parent-Teacher Meeting Schedule',
    image: '/uploads/notice_images/image_13.jpg',
    date: 'May 05, 2025',
    excerpt: 'Schedule for the upcoming parent-teacher meeting for all grades.',
    body: '<p>The first parent-teacher meeting of the year is scheduled for next week. Please check your email for the detailed time slots for each grade.</p>'
  },
  {
    id: 5,
    title: 'Sports Day 2025 Updates',
    image: '/uploads/notice_images/image_1.jpg',
    date: 'Apr 18, 2025',
    excerpt: 'Final schedule and participant list for the Annual Sports Day.',
    body: '<p>The final schedule for Sports Day 2025 is now available. All participants must report to the field by 8:00 AM.</p>'
  },
  {
    id: 6,
    title: 'Holiday Notice: Eid-ul-Fitr',
    image: '/uploads/notice_images/image_2.jpg',
    date: 'Mar 25, 2025',
    excerpt: 'Information regarding the upcoming holidays for Eid-ul-Fitr.',
    body: '<p>The institution will remain closed from March 28th to April 5th on account of Eid-ul-Fitr. Classes will resume normally on April 6th.</p>'
  },
  {
    id: 7,
    title: 'Scholarship Application Deadline',
    image: '/uploads/notice_images/image_7.jpg',
    date: 'Feb 12, 2025',
    excerpt: 'Reminder for the merit-based scholarship application deadline.',
    body: '<p>This is a reminder that the deadline for submitting applications for the merit-based scholarship is February 20th. Late submissions will not be accepted.</p>'
  }
];
