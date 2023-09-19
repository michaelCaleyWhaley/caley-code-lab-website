import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'caleyCodeLab projects',
  description: 'caleyCodeLab the project page.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
