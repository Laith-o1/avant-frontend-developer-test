 import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-gilroy antialiased">{children}</body>
    </html>
  );
}
