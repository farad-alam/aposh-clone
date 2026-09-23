export interface FaqItem {
  id: number;
  questionEn: string;
  answerEn: string;
  questionBn: string;
  answerBn: string;
}

export const faqs: FaqItem[] = [
  {
    id: 1,
    questionEn: 'How long does the detoxification treatment take?',
    answerEn: 'The initial detoxification process usually takes 14 to 21 days, depending on the severity of the dependency. However, full rehabilitation can take up to 3 to 6 months.',
    questionBn: 'ডিটক্সিফিকেশন চিকিৎসায় কত সময় লাগে?',
    answerBn: 'প্রাথমিক ডিটক্সিফিকেশন প্রক্রিয়ায় সাধারণত ১৪ থেকে ২১ দিন সময় লাগে, যা নির্ভর করে আসক্তির মাত্রার ওপর। তবে সম্পূর্ণ পুনর্বাসনের জন্য ৩ থেকে ৬ মাস পর্যন্ত সময় লাগতে পারে।'
  },
  {
    id: 2,
    questionEn: 'What are the rules for admission?',
    answerEn: 'Patients must be accompanied by a legal guardian at the time of admission. A preliminary medical assessment will be conducted before final admission.',
    questionBn: 'ভর্তির নিয়মাবলী কী কী?',
    answerBn: 'ভর্তির সময় রোগীকে অবশ্যই একজন বৈধ অভিভাবকের সাথে আসতে হবে। চূড়ান্ত ভর্তির আগে প্রাথমিক একটি মেডিকেল মূল্যায়ন করা হবে।'
  },
  {
    id: 3,
    questionEn: 'Is mental health support provided?',
    answerEn: 'Yes, we provide continuous psychological counseling, group therapy, and family counseling to support the mental health of our patients.',
    questionBn: 'মানসিক স্বাস্থ্য সহায়তা কি প্রদান করা হয়?',
    answerBn: 'হ্যাঁ, আমরা রোগীদের মানসিক স্বাস্থ্য সহায়তার জন্য নিয়মিত মনস্তাত্ত্বিক কাউন্সেলিং, গ্রুপ থেরাপি এবং ফ্যামিলি কাউন্সেলিং প্রদান করে থাকি।'
  },
  {
    id: 4,
    questionEn: 'What is the policy regarding visitors?',
    answerEn: 'Visitors are allowed only after the initial 14-day detoxification phase is complete. Only registered family members can visit on designated visiting days (Fridays).',
    questionBn: 'দর্শনার্থীদের ক্ষেত্রে নিয়ম কী?',
    answerBn: 'প্রথম ১৪ দিনের ডিটক্সিফিকেশন পর্ব শেষ হওয়ার পরই দর্শনার্থীদের আসার অনুমতি দেওয়া হয়। নির্দিষ্ট পরিদর্শনের দিনে (শুক্রবার) শুধুমাত্র নিবন্ধিত পরিবারের সদস্যরা দেখা করতে পারবেন।'
  },
  {
    id: 5,
    questionEn: 'What measures are taken for relapse prevention?',
    answerEn: 'We have a structured follow-up program, skill development training, and regular NA (Narcotics Anonymous) meetings to help prevent relapse after the patient returns home.',
    questionBn: 'পুনরায় আসক্তি রোধে কী ব্যবস্থা নেওয়া হয়?',
    answerBn: 'রোগী বাড়ি ফিরে যাওয়ার পর পুনরায় আসক্তি রোধে আমাদের একটি সুনির্দিষ্ট ফলো-আপ প্রোগ্রাম, দক্ষতা উন্নয়ন প্রশিক্ষণ এবং নিয়মিত NA (নারকোটিকস অ্যানোনিমাস) মিটিং রয়েছে।'
  }
];
