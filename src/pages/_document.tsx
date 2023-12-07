import { Html, Head, Main, NextScript } from "next/document";
export const metadata = {
  title: "Madame Paloma Bakehouse",
  description:
    "Discover the art of fine baking at Madame Paloma Bakehouse, a specialty bakery renowned for its exquisite brioche, croissants, and a variety of patisserie delights. Our artisanal approach combines traditional methods with innovative flavors, offering an unforgettable culinary experience in every bite.",
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Madame Paloma Bakehouse</title>
      <link rel="icon" type="image/png" href="icon2.png" />
      <meta
        name="Madame Paloma Bakehouse"
        content="Discover the art of fine baking at Madame Paloma Bakehouse, a specialty bakery renowned for its exquisite brioche, croissants, and a variety of patisserie delights. Our artisanal approach combines traditional methods with innovative flavors, offering an unforgettable culinary experience in every bite."
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
