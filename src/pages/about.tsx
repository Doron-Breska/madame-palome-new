export default function Home() {
  return (
    <div className="flex flex-col md:flex-row px-4 gap-4 md:gap-14 about items-start">
      <div className="w-full md:w-1/2">
        <p className="text-xl font-semibold tracking-wide mb-4 md:mb-10 text-justify">
          MADAME PALOMA OPENED ITS DOORS IN SEPTEMBER 2022. AS A BAKEHOUSE, WE
          SPECIALIZE IN VIENNOISERIES, OFFERING AN ARRAY OF SWEET AND SAVORY
          PREMIUM PASTRIES. EACH CREATION IS CRAFTED FROM REAL FRENCH FLOUR,
          EMBODYING A BLEND OF TRADITION AND INNOVATION. OUR PASTRIES NOT ONLY
          TANTALIZE THE TASTE BUDS BUT ALSO TELL A STORY OF CULINARY EXPERTISE
          AND PASSION.
        </p>
        <p className="text-lg tracking-wide mb-4 md:mb-10 text-justify">
          Madame Paloma is the first business venture of Erez Pintok & Hilla
          Sasson. Erez, our chef, hails from Israel&#39;s Galilee Sea region,
          born into a family of chefs within a diverse cultural mix of East and
          West, Jews and Arabs. His culinary journey led him to Paris in 2014,
          where he pursued his dream at “Le Cordon Bleu”, one of the world&#39;s
          most prestigious culinary institutions. Hilla, also from Israel, has a
          rich background in communication and media. With a decade&#39;s
          experience as a journalist and PR consultant, she joined Erez on his
          Parisian adventure.
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/danq3q4qv/image/upload/v1700947199/Madame%20Paloma/Madame_Palome_-60_lbqpeb.jpg"
        alt="pic of Hilla and Erez"
        className="w-full md:w-1/2 mb-10 self-start"
      />
    </div>
  );
}
