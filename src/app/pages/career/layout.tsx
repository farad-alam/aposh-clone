import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career | APOSH – Ashokta Punarbashan Sangstha',
  description: 'Career opportunities at APOSH.',
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
