import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career | APOSH – Ashokta Punarbashan Sangstha',
  description: 'Career and job opportunities at APOSH – an NGO providing drug rehabilitation and HIV prevention services in Rajshahi, Bangladesh.',
  alternates: { canonical: 'https://www.aposh.org/pages/career' },
  openGraph: { url: 'https://www.aposh.org/pages/career' },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
