import '../shared/globals.css';

import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'caleyCodeLab',
  description: 'The home of caleyCodeLab.',
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
