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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${kanit.className}`}>
        {children}
      </body>
    </html>
  );
}