import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";
import { Metadata } from "next";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
   metadataBase: new URL('https://kebabknights.com.au'),
  title: 'Kebab Knights | Melbourne’s Best Street Kebab Experience',
  description:
    'Kebab Knights brings the ultimate halal kebab experience to Melbourne. Enjoy juicy kebab wraps, HSPs, falafel, and charcoal-grilled meats with unmatched flavour and late-night service.',
  keywords: [
    'Kebab Knights',
    'Kebabs in Ascot Vale',
    'Kebab Knights Ascot Vale',
    'Melbourne kebabs',
    'Halal kebabs Melbourne',
    'HSP Melbourne',
    'Falafel wrap',
    'Charcoal grill kebabs',
    'Late-night food Melbourne',
    'Kebab shop near me',
  ],
  authors: [{ name: 'Kebab Knights Team', url: 'https://kebabknights.com.au' }],
  creator: 'Kebab Knights',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Kebab Knights | Melbourne’s Best Street Kebab Experience',
    description:
      'From wraps to HSPs and charcoal lamb, Kebab Knights is your go-to halal street food spot in Melbourne. Discover rich flavours and quick service.',
    url: 'https://kebabknights.com.au',
    siteName: 'Kebab Knights',
    images: [
      {
        url: 'https://kebabknights.com.au/images/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'Kebab Knights hero image',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kebab Knights | Melbourne’s Best Street Kebab Experience',
    description:
      'Try Melbourne’s favourite halal kebabs, HSPs, and charcoal wraps. Fresh ingredients, big flavour, late-night service.',
    creator: '@kebabknights',
    images: ['/images/og-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  other: {
    "google-site-verification": "Yj5p9YZL2lhQ5YBG5nTGpUgpHtmv8SwZOUbDPxy29QM", 
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        {/* Optional viewport tag if not auto-injected */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* JSON-LD Structured Data */}
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Kebab Knights",
              image: "https://www.kebabknights.com.au/og-banner.jpg",
              "@id": "https://www.kebabknights.com.au",
              url: "https://www.kebabknights.com.au",
              telephone: "+61 1234 5678",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Sydney Rd",
                addressLocality: "Ascot Vale",
                addressRegion: "VIC",
                postalCode: "3032",
                addressCountry: "AU"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -37.7765,
                longitude: 144.9235
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  opens: "16:00",
                  closes: "02:00"
                }
              ],
              servesCuisine: ["Halal", "Kebab", "Middle Eastern", "Fast Food"],
              priceRange: "$$",
              acceptsReservations: "False"
            }),
          }}
        />
      </head>
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
