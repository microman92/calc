import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'ROKAFLEX Calculators',
  description: 'Thermal insulation and condensation prevention calculations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
