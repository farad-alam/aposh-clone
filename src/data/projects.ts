export interface Project {
  id: number;
  title: string;
  image: string;
  focus: string;
  area: string;
  donor: string;
  period: string;
  status: 'ongoing' | 'closed';
}

export const ongoingProjects: Project[] = [
  {
    id: 1,
    title: 'Comprehensive Package for HIV/AIDS Prevention (CPHAP)',
    image: '/uploads/page_images/image_1.jpg',
    focus: 'HIV/AIDS Prevention',
    area: 'Rajshahi, Chapainawabganj',
    donor: 'The Global Fund (Save the Children)',
    period: 'Jan 2024 - Dec 2025',
    status: 'ongoing'
  },
  {
    id: 2,
    title: 'Drug Dependency Treatment & Rehabilitation Program',
    image: '/uploads/page_images/image_2.jpg',
    focus: 'Detoxification & Rehabilitation',
    area: 'Rajshahi City',
    donor: 'Department of Social Services',
    period: 'Jul 2023 - Jun 2026',
    status: 'ongoing'
  },
  {
    id: 3,
    title: 'Harm Reduction for Injecting Drug Users (IDUs)',
    image: '/uploads/page_images/image_3.jpg',
    focus: 'Harm Reduction',
    area: 'Dinajpur, Joypurhat',
    donor: 'USAID / CARE Bangladesh',
    period: 'Jan 2023 - Dec 2025',
    status: 'ongoing'
  },
  {
    id: 4,
    title: 'Community Awareness and Advocacy Campaign',
    image: '/uploads/page_images/image_4.jpg',
    focus: 'Awareness & Advocacy',
    area: 'Naogaon, Rangpur',
    donor: 'Youth RISE',
    period: 'Mar 2024 - Feb 2025',
    status: 'ongoing'
  }
];

export const closedProjects: Project[] = [
  {
    id: 5,
    title: 'HAPP Project for Drug Users',
    image: '/uploads/page_images/image_5.jpg',
    focus: 'Detoxification',
    area: 'Rajshahi',
    donor: 'CARE Bangladesh',
    period: '2004 - 2005',
    status: 'closed'
  },
  {
    id: 6,
    title: 'UNDOC Capacity Building Project',
    image: '/uploads/page_images/image_6.jpg',
    focus: 'Capacity Building',
    area: 'North-Western Region',
    donor: 'UNDOC',
    period: '2006 - 2008',
    status: 'closed'
  },
  {
    id: 7,
    title: 'GFATM Drop-In Centres Setup',
    image: '/uploads/page_images/image_7.jpg',
    focus: 'Harm Reduction',
    area: '10 Districts',
    donor: 'The Global Fund',
    period: '2010 - 2013',
    status: 'closed'
  },
  {
    id: 8,
    title: 'DFID HIV Program',
    image: '/uploads/page_images/image_8.jpg',
    focus: 'HIV Prevention',
    area: 'Rajshahi',
    donor: 'DFID',
    period: '2003 - 2006',
    status: 'closed'
  },
  {
    id: 9,
    title: 'STI/STD Prevention Initiative',
    image: '/uploads/page_images/image_9.jpg',
    focus: 'Health & STI Prevention',
    area: 'Godagari, Lalmonirhat',
    donor: 'UNICEF',
    period: '2015 - 2018',
    status: 'closed'
  },
  {
    id: 10,
    title: 'Rehabilitation Training Program',
    image: '/uploads/page_images/image_10.jpg',
    focus: 'IGA & Training',
    area: 'Thakurgaon, Panchagarh',
    donor: 'Counterpart International',
    period: '2019 - 2021',
    status: 'closed'
  },
  {
    id: 11,
    title: 'Network of Asian People who Use Drugs Advocacy',
    image: '/uploads/page_images/image_11.jpg',
    focus: 'Advocacy',
    area: 'National Level',
    donor: 'NAPUD',
    period: '2018 - 2019',
    status: 'closed'
  },
  {
    id: 12,
    title: 'RCF Community Support Initiative',
    image: '/uploads/page_images/image_12.jpg',
    focus: 'Community Support',
    area: 'Saidpur, Khanpur',
    donor: 'RCF',
    period: '2020 - 2022',
    status: 'closed'
  }
];

export const allProjects = [...ongoingProjects, ...closedProjects];
