import { Kanit } from "next/font/google";
import "./globals.css";


const kanit = Kanit({
  weight: ['100', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})


export const metadata = {
  title: "Your App",
  description: "Your app description",
};


const bodyStyle: React.CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#1a1a1a',
  backgroundImage: `
    linear-gradient(90deg, rgba(111,112,112, 0.1) 1px, transparent 1px),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 19px,
      rgba(111,112, 0.1) 19px,
      rgba(111,112, 0.1) 20px
    )
  `,
  backgroundSize: '100px 100%, 1px 100%',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body style={bodyStyle} className={`${kanit.className}`}>
        {children}
      </body>
    </html>
  );
}