import './globals.css'

export const metadata = {
  title: 'Simple E - Commerce',
  description: 'Simple monolite E - Commerce using Next Js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
