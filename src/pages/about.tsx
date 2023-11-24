export default function Home() {
  return (
    <div className="flex flex-col md:flex-row px-4 gap-14 about items-center">
      <div className="w-full md:w-1/2">
        <p className="text-2xl font-semibold tracking-wide mb-10">
          MADAME PALOMA IS THE FIRST BUSINESS VENTURE OF EREZ PINTOK & HILLA
          SASSON. EREZ, OUR CHEF, HAILS FROM ISRAEL&#39;S GALILEE SEA REGION,
          BORN INTO A FAMILY OF CHEFS WITHIN A DIVERSE CULTURAL MIX OF EAST AND
          WEST, JEWS AND ARABS. HIS CULINARY JOURNEY LED HIM TO PARIS IN 2014,
          WHERE HE PURSUED HIS DREAM AT “LE CORDON BLEU”, ONE OF THE WORLD&#39;S
          MOST PRESTIGIOUS CULINARY INSTITUTIONS. HILLA, ALSO FROM ISRAEL, HAS A
          RICH BACKGROUND IN COMMUNICATION AND MEDIA. WITH A DECADE&#39;S
          EXPERIENCE AS A JOURNALIST AND PR CONSULTANT, SHE JOINED EREZ ON HIS
          PARISIAN ADVENTURE.
        </p>
        <p className="text-lg tracking-wide mb-10">
          Madame Paloma opened its doors in September 2022. As a Bakehouse, we
          specialize in Viennoiseries, offering an array of sweet and savory
          premium pastries. Each creation is crafted from real French flour,
          embodying a blend of tradition and innovation. Our pastries not only
          tantalize the taste buds but also tell a story of culinary expertise
          and passion.
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/danq3q4qv/image/upload/v1699313211/imgs/u3mimw4p863pa3l8yhcl.jpg"
        alt="pic of Hilla and Erez"
        className="w-full md:w-1/2 mb-10 self-start"
      />
    </div>
  );
}
