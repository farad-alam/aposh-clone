import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact APOSH (Ashokta Punarbashan Sangstha) for inquiries about drug rehabilitation, detoxification, or partnership. Located in Rajshahi, Bangladesh.',
  alternates: { canonical: 'https://www.aposh.org/pages/contact' },
  openGraph: { url: 'https://www.aposh.org/pages/contact' },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
