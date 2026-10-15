import type { CSSProperties } from "react";

type GlobeProps = { className?: string; label?: string };

function Globe({ className, label }: GlobeProps) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none"
      xmlns="http://www.w3.org/2000/svg" role={label ? "img" : undefined}
      aria-label={label} aria-hidden={label ? undefined : true} focusable="false">
      <g stroke="currentColor" strokeWidth="4.5">
        <circle cx="60" cy="60" r="52" />
        <ellipse cx="60" cy="60" rx="25" ry="52" />
        <path d="M8 60h104M60 8v104M17 31c25 13 61 13 86 0M17 89c25-13 61-13 86 0" />
      </g>
    </svg>
  );
}

const artwork = {
  "ohh-boy": { width: 1122, height: 1402 },
  "its-leng": { width: 2172, height: 724 },
  "its-certi": { width: 2168, height: 725 },
  "house-society": { width: 1402, height: 1122 },
  "good-music": { width: 1122, height: 1402 },
  "proppa-socials": { width: 1122, height: 1402 },
  "make-noise": { width: 1122, height: 1402 },
  "word-house": { width: 1774, height: 887 },
  "word-haus": { width: 1774, height: 887 },
  "word-casa": { width: 1672, height: 941 },
  "word-maison": { width: 1774, height: 887 },
  "word-huis": { width: 1774, height: 887 },
  "word-dom": { width: 1774, height: 887 },
  "word-ev": { width: 1536, height: 1024 },
} as const;

type ArtworkName = keyof typeof artwork;

/** The PNG supplies the letter shapes; CSS supplies the exact brand colour.
 *  The image also reserves its natural dimensions and provides a fallback.
 *  Keep a readable text label beside this decorative artwork in its heading.
 */
function TitleArt({ asset, eager = false }: { asset: ArtworkName; eager?: boolean }) {
  const { width, height } = artwork[asset];
  const src = `/house-society/${asset}.png`;
  const style: CSSProperties = {
    WebkitMaskImage: `url("${src}")`,
    maskImage: `url("${src}")`,
    "--art-ratio": width / height,
  } as CSSProperties;

  return (
    <span className="hs-title-art" aria-hidden="true" style={style}>
      <img
        src={src}
        alt=""
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        draggable={false}
      />
    </span>
  );
}

const navigation = [
  { label: "The idea", href: "#about" },
  { label: "The sound", href: "#sound" },
  { label: "What's coming", href: "#programme" },
  { label: "Get in touch", href: "#contact" },
];
const formats = [
  {
    number: "01",
    category: "THE MAIN EVENT",
    name: "BOILER ROOMS",
    description:
      "Full rooms. Heavy selections. No filler. The kind of night you talk about the next day.",
    keywords: "HAUS HAUS HAUS",
    theme: "red",
  },
  {
    number: "02",
    category: "DAY OUT (FREE)",
    name: "BEACH POP UPS",
    description:
      "More laid back, chilled vibes and selectors who know exactly what they're doing.",
    keywords: "HOUSE HOUSE HOUSE",
    theme: "dark",
  },
  {
    number: "03",
    category: "PARTIES (FREE)",
    name: "AND SOME FAT HOUSE PARTIES",
    description:
      "Bring you're mates, bring some booze, we'll bring the music... Just try not to trash the gaff.",
    keywords: "HAUS HAUS HAUS",
    theme: "light",
  },
];
// Each word translates to “house” — one sound, many languages.
const houseLanguages = [
  { word: "HOUSE", language: "ENGLISH", code: "EN", asset: "word-house" },
  { word: "MAISON", language: "FRENCH", code: "FR", asset: "word-maison" },
  { word: "HAUS", language: "GERMAN", code: "DE", asset: "word-haus" },
  { word: "CASA", language: "SPANISH / ITALIAN", code: "ES / IT", asset: "word-casa" },
  { word: "HUIS", language: "DUTCH", code: "NL", asset: "word-huis" },
  { word: "EV", language: "TURKISH", code: "TR", asset: "word-ev" },
  { word: "DOM", language: "POLISH", code: "PL", asset: "word-dom" },
] as const;
export default function Home() {
  return (
    <main className="hs-site" id="top">
      <div className="hs-grain" aria-hidden="true" />
      <header className="hs-header">
        <a className="hs-brand" href="#top" aria-label="House Society, back to top">
          <Globe />
          <span className="hs-brand-wordmark"><span className="hs-sr-only">HOUSE SOCIETY</span><TitleArt asset="house-society" eager /></span><span className="hs-brand-dot">®</span>
        </a>
        <nav className="hs-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="hs-nav-cta" href="#launch">COMING SOON <span aria-hidden="true">↗</span></a>
      </header>
      <section className="hs-hero" aria-labelledby="hero-title">
        <div className="hs-hero-top hs-meta">
          <span>INDEPENDENT CULTURE / EXETER</span>
          <span>EST. IN THE UNDERGROUND</span>
          <span>001—027</span>
        </div>
        <div className="hs-hero-content">
          <div className="hs-hero-lead hs-meta"><span className="hs-live-dot" /> A NEW FREQUENCY IS COMING</div>
          <h1 id="hero-title" className="hs-hero-wordmark">
            <span className="hs-sr-only">HOUSE SOCIETY</span>
            <TitleArt asset="house-society" eager />
          </h1>
          <div className="hs-hero-bottom-line">
            <p>OHHH EXETER.<br /><em>IT'S BEEN A LONG TIME COMING.</em></p>
            <div className="hs-hero-stamp" aria-label="Launching Soon"><span>EXETER</span><strong>COMING SOON</strong><span>THE BEGINNING</span></div>
          </div>
        </div>
        <div className="hs-hero-footer hs-meta"><span>HOUSE MUSIC / PEOPLE / AFTER HOURS</span><a href="#about">SCROLL TO ENTER ↓</a></div>
      </section>
      <div className="hs-marquee" aria-label="ITS LENG. ITS CERTI.">
        <div className="hs-marquee-track" aria-hidden="true">
          {Array.from({ length: 16 }, (_, i) => (
            <span className="hs-marquee-phrase" key={i}>
              <span className="hs-sr-only">ITS LENG</span><TitleArt asset="its-leng" />
              <b aria-hidden="true">✳</b>
              <span className="hs-sr-only">ITS CERTI</span><TitleArt asset="its-certi" />
              <b aria-hidden="true">✳</b>
            </span>
          ))}
        </div>
      </div>
      <section className="hs-about hs-section" id="about">
        <div className="hs-section-label hs-meta">[ 01 / THE IDEA ]</div>
        <div className="hs-about-main">
          <p className="hs-eyebrow hs-meta">THIS IS HOUSE SOCIETY.</p>
          <h2 className="hs-art-heading hs-about-title"><span className="hs-sr-only">GOOD MUSIC. BAD HABITS. GREAT NIGHTS.</span><img className="hs-original-title" src="/house-society/good-music-black.png" alt="" aria-hidden="true" width="1122" height="1402" loading="lazy" decoding="async" /></h2>
          <div className="hs-about-copy">
            <p>House Society is an independent events project born in Exeter. A home for proper dance music, curious crowds and nights with their own identity.</p>
            <p>We're here for the music that moves you, the rooms that feel different, and the people who make it all worth staying out for.</p>
            <strong>NO FORMULA. NO DRESS CODE FOR TASTE. JUST THE RIGHT ENERGY.</strong>
          </div>
        </div>
        <div className="hs-about-footer hs-meta"><span>INDEPENDENT BY DESIGN</span><span>EXETER, UK ↗</span></div>
      </section>
      <section className="hs-sound hs-section" id="sound" aria-labelledby="sound-title">
        <div className="hs-sound-topline">
          <div className="hs-section-label hs-meta">[ 02 / THE SOUND ]</div>
          <span className="hs-meta">ONE WORD. EVERY LANGUAGE.</span>
        </div>
        <div className="hs-sound-intro">
          <p className="hs-meta">A UNIVERSAL LANGUAGE / EXETER ↔ EVERYWHERE</p>
          <h2 id="sound-title">SAY IT <em>HOWEVER</em> YOU LIKE.</h2>
        </div>
        <div className="hs-language-wall" aria-label="The word house translated into different languages">
          {houseLanguages.map((item, index) => (
            <div className={`hs-language-row hs-language-row-${index + 1}`} key={item.language}>
              <div className="hs-language-label hs-meta">
                <span>{String(index + 1).padStart(2, "0")} / {item.code}</span>
                <span>{item.language}</span>
              </div>
              <div className="hs-language-viewport">
                <div className="hs-language-track" aria-hidden="true">
                  {Array.from({ length: 24 }, (_, repeat) => (
                    <span className="hs-language-word" key={repeat}>
                      <TitleArt asset={item.asset} /><i aria-hidden="true"><Globe /></i>
                    </span>
                  ))}
                </div>
                <span className="hs-language-accessible">{item.word}</span>
              </div>
            </div>
          ))}
          <div className="hs-sound-core" aria-hidden="true">
            <span className="hs-meta">WHATEVER YOU CALL IT</span>
            <strong>IT'S<br /><i className="hs-core-word"><span className="hs-sr-only">HOUSE.</span><TitleArt asset="word-house" /></i></strong>
            <span className="hs-meta">ONE SOUND / NO BORDERS</span>
          </div>
        </div>
        <div className="hs-sound-bottom hs-meta">
          <span>SEVEN LANGUAGES / ONE DANCEFLOOR</span>
          <span>TRANSLATION COMPLETE ↗</span>
        </div>
      </section>
      <section className="hs-programme hs-section" id="programme">
        <div className="hs-section-label hs-meta">[ 03 / WHAT'S COMING ]</div>
        <div className="hs-programme-intro">
          <h2 className="hs-art-heading hs-programme-title"><span className="hs-sr-only">PROPPA SOCIALS. EVERY WEEK.</span><TitleArt asset="proppa-socials" /></h2>
          <div><p>We're building more than one kind of night.</p><span className="hs-meta">THE CONCEPTS / FULL DETAILS TO FOLLOW</span></div>
        </div>
        <div className="hs-format-grid">
          {formats.map((format) => (
            <article className={`hs-format hs-format-${format.theme}`} key={format.number}>
              <div className="hs-format-top hs-meta"><span>HS / {format.number}</span><span>CONCEPT IN DEVELOPMENT</span></div>
              <div className="hs-format-center"><span className="hs-meta">{format.category}</span><h3>{format.name}</h3></div>
              <div className="hs-format-bottom"><p>{format.description}</p><span className="hs-meta">{format.keywords}</span></div>
            </article>
          ))}
        </div>
        <p className="hs-programme-note hs-meta">* FORMATS ARE A PREVIEW OF OUR DIRECTION, NOT CONFIRMED EVENT ANNOUNCEMENTS.</p>
      </section>
      <section className="hs-interlude" aria-label="House Society ethos">
        <div className="hs-interlude-number hs-meta">HS—001 / INCOMING</div>
        <p className="hs-interlude-art"><span className="hs-sr-only">OHH BOY I'M GONNA CREAM</span><TitleArt asset="ohh-boy" /></p>
        <div className="hs-interlude-bottom hs-meta"><span>LESS SCROLLING.</span><span>MORE DANCING.</span></div>
      </section>
      <section className="hs-launch hs-section" id="launch">
        <div className="hs-section-label hs-meta">[ 04 / THE COUNT-IN ]</div>
        <div className="hs-launch-layout">
          <div className="hs-launch-left">
            <p className="hs-meta hs-launch-kicker"><span className="hs-live-dot" /> TRANSMISSION PENDING</p>
            <h2>COMING.<br /><span>SOON.</span></h2>
            <p className="hs-launch-headline">EXETER, WE'RE JUST GETTING STARTED.</p>
          </div>
          <div className="hs-launch-right">
            <div className="hs-launch-disc"><Globe /><span className="hs-meta">COMING INTO ORBIT</span></div>
            <p>Our first chapter starts VERY soon. The lineup, the locations and the details are staying under wraps for now.</p>
            <p>Keep your eyes open. Announcements will land when they're ready.</p>
            <a className="hs-underline-link" href="#contact">BE PART OF WHAT'S NEXT ↗</a>
          </div>
        </div>
        <div className="hs-launch-strip hs-meta"><span>NO TICKETS ON SALE YET</span><span>NO VENUES ANNOUNCED YET</span><span>STAY CLOSE</span></div>
      </section>
      <section className="hs-contact hs-section" id="contact">
        <div className="hs-section-label hs-meta">[ 05 / GET IN TOUCH ]</div>
        <div className="hs-contact-grid">
          <div><p className="hs-eyebrow hs-meta">DJS. VENUES. CREATIVES. BRANDS. GOOD IDEAS.</p><h2 className="hs-art-heading hs-contact-title"><span className="hs-sr-only">MAKE NOISE.</span><TitleArt asset="make-noise" /></h2></div>
          <div className="hs-contact-side"><p>Want to build something with us? We're always interested in the right people, the right spaces and ideas worth making happen.</p><a className="hs-contact-button" href="mailto:housesocietyexeter@gmail.com?subject=House%20Society%20Enquiry">START A CONVERSATION <span>↗</span></a><small className="hs-meta">FOR COLLABORATIONS / BOOKINGS / ENQUIRIES</small></div>
        </div>
        <div className="hs-contact-bottom hs-meta">GOOD MUSIC. GOOD PEOPLE. NO ORDINARY NIGHTS.</div>
      </section>
      <footer className="hs-footer hs-meta">
        <div className="hs-footer-brand"><span className="hs-footer-wordmark"><span className="hs-sr-only">HOUSE SOCIETY</span><TitleArt asset="house-society" /></span><span className="hs-footer-mark">®</span></div>
        <p>INDEPENDENT EVENTS / EXETER, UK<br />LAUNCHING SOON<br />© House Society Exeter © </p>
        <p>HOUSE SOCIETY IS INDEPENDENT AND IS NOT AFFILIATED WITH THE UNIVERSITY OF EXETER OR EXETER STUDENTS' GUILD.</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
