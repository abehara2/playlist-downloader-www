import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spotify Playlist Downloader",
  description: "Download public spotify playlists in mp3 format. Free and unlimited forever.",
  openGraph: {
    title: "Spotify Playlist Downloader",
    description: "Download public spotify playlists in mp3 format. Free and unlimited forever.",
    images: [
      {
        url: "/photo.png",
        height: 1740,
        width: 2498,
        alt: "Spotify Playlist Downloader",
      },
    ],
    type: "website",
    siteName: "Playlist Downloader",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spotify Playlist Downloader",
    description: "Download public spotify playlists in mp3 format. Free and unlimited forever.",
    images: ["/photo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
