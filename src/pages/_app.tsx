import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Madame Paloma Bakehouse",
    description:
      "Specializing in viennoiseries and premium pastries crafted from real French flour.",
    url: "https://www.madamepaloma.de",
    telephone: "+4917661299624",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Colbestraße 3",
      addressLocality: "Berlin",
      postalCode: "10247",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.51420985925883,
      longitude: 13.46474873933816,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/Madame-Paloma-Bakehouse-100085219417779",
      "https://www.instagram.com/madame.paloma",
      "https://www.tiktok.com/@madame.paloma.bakehouse",
    ],
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/icon2.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
      <div className="test22">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
