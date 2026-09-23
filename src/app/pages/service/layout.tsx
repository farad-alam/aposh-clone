import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & FAQ | APOSH – Ashokta Punarbashan Sangstha',
  description: 'Frequently asked questions about detoxification services and rehabilitation programs at APOSH.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
