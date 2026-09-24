import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Detoxification Services FAQ | APOSH – Ashokta Punarbashan Sangstha',
  description: 'Frequently asked questions about detoxification treatment, admission procedures, and rehabilitation programs at APOSH in Rajshahi, Bangladesh.',
  alternates: { canonical: 'https://www.aposh.org/pages/service' },
  openGraph: { url: 'https://www.aposh.org/pages/service' },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
