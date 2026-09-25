import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notice',
  description: 'Latest news, announcements, and notices from APOSH – an NGO providing drug rehabilitation and HIV prevention services in Rajshahi, Bangladesh.',
  alternates: { canonical: 'https://www.aposh.org/pages/notice' },
  openGraph: { url: 'https://www.aposh.org/pages/notice' },
};

export default function NoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
