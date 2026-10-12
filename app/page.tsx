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
  { word: "HOUSE", language: "ENGLISH", code: "EN" },
  { word: "MAISON", language: "FRENCH", code: "FR" },
  { word: "HAUS", language: "GERMAN", code: "DE" },
  { word: "CASA", language: "SPANISH / ITALIAN", code: "ES / IT" },
  { word: "HUIS", language: "DUTCH", code: "NL" },
  { word: "EV", language: "TURKISH", code: "TR" },
  { word: "DOM", language: "POLISH", code: "PL" },
];

export default function Home() {

  return (

    <main className="hs-site" id="top">

      <div className="hs-grain" aria-hidden="true" />



      <header className="hs-header">

        <a className="hs-brand" href="#top" aria-label="House Society, back to top">

          <img src="/house-society-globe.png" alt="" />

          <span>HOUSE<br />SOCIETY<span className="hs-brand-dot">®</span></span>

        </a>

        <nav className="hs-nav" aria-label="Main navigation">

          {navigation.map((item) => (

            <a key={item.href} href={item.href}>{item.label}</a>

          ))}

        </nav>

        <a className="hs-nav-cta" href="#launch">SEP 2027 <span aria-hidden="true">↗</span></a>

      </header>



      <section className="hs-hero" aria-labelledby="hero-title">

        <div className="hs-hero-ghost" aria-hidden="true">HOUSE</div>

        <div className="hs-hero-top hs-mono">

          <span>INDEPENDENT CULTURE / EXETER</span>

          <span>EST. IN THE UNDERGROUND</span>

          <span>001—027</span>

        </div>

        <div className="hs-hero-content">

          <div className="hs-hero-lead hs-mono"><span className="hs-live-dot" /> A NEW FREQUENCY IS COMING</div>

          <h1 id="hero-title">HOUSE<span>SOCIETY<span className="hs-asterisk">*</span></span></h1>

          <div className="hs-hero-bottom-line">

            <p>OHHH EXETER.<br /><em>IT'S BEEN A LONG TIME COMING.</em></p>

            <div className="hs-hero-stamp" aria-label="Launching September 2027"><span>EXETER</span><strong>09 / 27</strong><span>THE BEGINNING</span></div>

          </div>

        </div>

        <img className="hs-hero-globe" src="/house-society-globe.png" alt="House Society globe emblem" />

        <div className="hs-hero-footer hs-mono"><span>HOUSE MUSIC / PEOPLE / AFTER HOURS</span><a href="#about">SCROLL TO ENTER ↓</a></div>

      </section>



      <div className="hs-marquee" aria-label="NAHHHH GUYS... YOU DON'T WANT TO MISS THIS">

        <div className="hs-marquee-track" aria-hidden="true">

          {Array.from({ length: 4 }, (_, i) => (

            <span key={i}>BEST TUNES IN EXETER... <b>✳</b> PROPER DJ'S... <b>✳</b> </span>

          ))}

        </div>

      </div>



      <section className="hs-about hs-section" id="about">

        <div className="hs-section-label hs-mono">[ 01 / THE IDEA ]</div>

        <div className="hs-about-main">

          <p className="hs-eyebrow hs-mono">THIS IS HOUSE SOCIETY.</p>

          <h2>GOOD MUSIC.<br />BAD <span>HABITS.</span><br />GREAT NIGHTS.</h2>

          <div className="hs-about-copy">

            <p>House Society is an independent events project born in Exeter. A home for proper dance music, curious crowds and nights with their own identity.</p>

            <p>We're here for the music that moves you, the rooms that feel different, and the people who make it all worth staying out for.</p>

            <strong>NO FORMULA. NO DRESS CODE FOR TASTE. JUST THE RIGHT ENERGY.</strong>

          </div>

        </div>

        <div className="hs-about-footer hs-mono"><span>INDEPENDENT BY DESIGN</span><span>EXETER, UK ↗</span></div>

      </section>



      <section className="hs-sound hs-section" id="sound" aria-labelledby="sound-title">
        <div className="hs-sound-topline">
          <div className="hs-section-label hs-mono">[ 02 / THE SOUND ]</div>
          <span className="hs-mono">ONE WORD. EVERY LANGUAGE.</span>
        </div>

        <div className="hs-sound-intro">
          <p className="hs-mono">A UNIVERSAL LANGUAGE / EXETER ↔ EVERYWHERE</p>
          <h2 id="sound-title">SAY IT <em>HOWEVER</em> YOU LIKE.</h2>
        </div>

        <div className="hs-language-wall" aria-label="The word house translated into different languages">
          {houseLanguages.map((item, index) => (
            <div className={`hs-language-row hs-language-row-${index + 1}`} key={item.language}>
              <div className="hs-language-label hs-mono">
                <span>{String(index + 1).padStart(2, "0")} / {item.code}</span>
                <span>{item.language}</span>
              </div>
              <div className="hs-language-viewport">
                <div className="hs-language-track" aria-hidden="true">
                  {Array.from({ length: 6 }, (_, repeat) => (
                    <span className="hs-language-word" key={repeat}>
                      {item.word}<i aria-hidden="true">✳</i>
                    </span>
                  ))}
                </div>
                <span className="hs-language-accessible">{item.word}</span>
              </div>
            </div>
          ))}
          <div className="hs-sound-core" aria-hidden="true">
            <span className="hs-mono">WHATEVER YOU CALL IT</span>
            <strong>IT'S<br /><i>HOUSE.</i></strong>
            <span className="hs-mono">ONE SOUND / NO BORDERS</span>
          </div>
        </div>

        <div className="hs-sound-bottom hs-mono">
          <span>SEVEN LANGUAGES / ONE DANCEFLOOR</span>
          <span>TRANSLATION COMPLETE ↗</span>
        </div>
      </section>

      <section className="hs-programme hs-section" id="programme">

        <div className="hs-section-label hs-mono">[ 03 / WHAT'S COMING ]</div>

        <div className="hs-programme-intro">

          <h2>PROPPA<br /><span>SOCIALS.</span><br />EVERY WEEK.</h2>

          <div><p>We're building more than one kind of night.</p><span className="hs-mono">THE CONCEPTS / FULL DETAILS TO FOLLOW</span></div>

        </div>

        <div className="hs-format-grid">

          {formats.map((format) => (

            <article className={`hs-format hs-format-${format.theme}`} key={format.number}>

              <div className="hs-format-top hs-mono"><span>HS / {format.number}</span><span>CONCEPT IN DEVELOPMENT</span></div>

              <div className="hs-format-center"><span className="hs-mono">{format.category}</span><h3>{format.name}</h3></div>

              <div className="hs-format-bottom"><p>{format.description}</p><span className="hs-mono">{format.keywords}</span></div>

            </article>

          ))}

        </div>

        <p className="hs-programme-note hs-mono">* FORMATS ARE A PREVIEW OF OUR DIRECTION, NOT CONFIRMED EVENT ANNOUNCEMENTS.</p>

      </section>



      <section className="hs-interlude" aria-label="House Society ethos">

        <div className="hs-interlude-number hs-mono">HS—001 / INCOMING</div>

        <p>OHH BOY<br />I'M <span>GONNA CREAM</span></p>

        <div className="hs-interlude-bottom hs-mono"><span>LESS SCROLLING.</span><span>MORE DANCING.</span></div>

      </section>



      <section className="hs-launch hs-section" id="launch">

        <div className="hs-section-label hs-mono">[ 04 / THE COUNT-IN ]</div>

        <div className="hs-launch-layout">

          <div className="hs-launch-left">

            <p className="hs-mono hs-launch-kicker"><span className="hs-live-dot" /> TRANSMISSION PENDING</p>

            <h2>SEPT.<br /><span>2027.</span></h2>

            <p className="hs-launch-headline">EXETER, WE'RE JUST GETTING STARTED.</p>

          </div>

          <div className="hs-launch-right">

            <div className="hs-launch-disc"><img src="/house-society-globe.png" alt="" /><span className="hs-mono">COMING INTO ORBIT</span></div>

            <p>Our first chapter starts September 2027. The lineup, the locations and the details are staying under wraps for now.</p>

            <p>Keep your eyes open. Announcements will land when they're ready.</p>

            <a className="hs-underline-link" href="#contact">BE PART OF WHAT'S NEXT ↗</a>

          </div>

        </div>

        <div className="hs-launch-strip hs-mono"><span>NO TICKETS ON SALE YET</span><span>NO VENUES ANNOUNCED YET</span><span>STAY CLOSE</span></div>

      </section>



      <section className="hs-contact hs-section" id="contact">

        <div className="hs-section-label hs-mono">[ 05 / GET IN TOUCH ]</div>

        <div className="hs-contact-grid">

          <div><p className="hs-eyebrow hs-mono">DJS. VENUES. CREATIVES. BRANDS. GOOD IDEAS.</p><h2>MAKE<br /><span>NOISE.</span></h2></div>

          <div className="hs-contact-side"><p>Want to build something with us? We're always interested in the right people, the right spaces and ideas worth making happen.</p><a className="hs-contact-button" href="mailto:housesocietyexeter@gmail.com?subject=House%20Society%20Enquiry">START A CONVERSATION <span>↗</span></a><small className="hs-mono">FOR COLLABORATIONS / BOOKINGS / ENQUIRIES</small></div>

        </div>

        <div className="hs-contact-bottom hs-mono">GOOD MUSIC. GOOD PEOPLE. NO ORDINARY NIGHTS.</div>

      </section>



      <footer className="hs-footer hs-mono">

        <div className="hs-footer-brand">HOUSE SOCIETY <span>®</span></div>

        <p>INDEPENDENT EVENTS / EXETER, UK<br />LAUNCHING SEPTEMBER 2027<br />© House Society Exeter © </p>

        <p>HOUSE SOCIETY IS INDEPENDENT AND IS NOT AFFILIATED WITH THE UNIVERSITY OF EXETER OR EXETER STUDENTS' GUILD.</p>

        <a href="#top">BACK TO TOP ↑</a>

      </footer>

    </main>

  );

}
