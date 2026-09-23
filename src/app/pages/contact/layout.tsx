import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | APOSH – Ashokta Punarbashan Sangstha',
  description: 'Get in touch with APOSH for any inquiries, support, or collaboration opportunities.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
