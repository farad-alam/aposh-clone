import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notice | APOSH – Ashokta Punarbashan Sangstha',
  description: 'Latest news, announcements, and notices from APOSH.',
};

export default function NoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
