const nav = [
  ["Manifesto", "#manifesto"],
  ["Programme", "#programme"],
  ["Membership", "#membership"],
  ["Residents", "#residents"],
  ["Committee", "#committee"],
  ["Contact", "#contact"],
];

const manifestoLines = [
  "HOUSE HOUSE HOUSE",
  "HOUSE HOUSE HOUSE",
  "HOUSE HOUSE HOUSE",
  "LOVE HOUSE???",
];

const programme = [
  {
    code: "HS001",
    type: "FLAGSHIP",
    title: "OPENING NIGHT",
    meta: "HOUSE / DISCO / UK HOUSE",
    note: "THE FIRST ONE.",
    tone: "red",
  },
  {
    code: "HS.SSN",
    type: "SESSION",
    title: "HOUSE SOCIETY SESSIONS",
    meta: "SMALL ROOMS / GUEST SELECTORS / LIMITED CAPACITY",
    note: "NO BIG ANNOUNCEMENT. JUST TURN UP.",
    tone: "black",
  },
  {
    code: "HS.DAY",
    type: "SOCIAL",
    title: "BEACH / TERRACE / DAY",
    meta: "MEMBERS / MUSIC / SUN / WHATEVER WORKS",
    note: "THE CLUB ISN'T THE WHOLE POINT.",
    tone: "cream",
  },
];

const benefits = [
  "EARLY ACCESS",
  "MEMBERS RELEASES",
  "PRIVATE POP-UPS",
  "SOCIALS",
  "GUESTLIST DROPS",
  "MEMBER-ONLY EVENTS",
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="site-noise" />

      <header className="rogue-nav">
        <a className="rogue-brand" href="#top" aria-label="House Society home">
          <img src="/house-society-globe.png" alt="House Society globe mark" />
          <span>
            HOUSE
            <br />
            SOCIETY
          </span>
        </a>

        <div className="nav-middle">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>

        <a className="join-chip" href="#membership">
          £1 MEMBER
        </a>
      </header>

      <section className="rogue-hero" id="top">
        <div className="hero-background-word">HOUSE</div>

        <div className="hero-topline">
          <span>EXETER</span>
          <span>2026/27 →</span>
          <span>HOUSE</span>
        </div>

        <div className="hero-left">
          <p className="micro-copy">
            STUDENT-LED
            <br />
            HOUSE MUSIC
            <br />
            EVENTS / SOCIALS / POP-UPS
          </p>

          <h1>
            HOUSE
            <span>SOCIETY</span>
          </h1>

          <p className="hero-statement">
            IT'S BEEN A LONG TIME COMING HASN'T IT EXETER...
          </p>
        </div>

        <div className="hero-right">
          <img
            className="hero-globe"
            src="/house-society-globe.png"
            alt="House Society globe"
          />

          <p className="hero-sidecopy">
            MEMBERS.
            <br />
            RESIDENTS.
            <br />
            COMMITTEE.
            <br />
            LATE NIGHTS.
          </p>
        </div>

        <div className="hero-bottom">
          <span>SCROLL ↓</span>
          <span>HS / EXE / 001</span>
        </div>
      </section>

      <section className="anti-section" id="manifesto">
        <div className="section-marker">01 / MANIFESTO</div>

        <div className="manifesto-wall">
          {manifestoLines.map((line, index) => (
            <div
              key={line}
              className={`manifesto-line manifesto-line-${index + 1}`}
            >
              {line}
            </div>
          ))}
        </div>

        <div className="manifesto-small">
          <p>
            House Society borrows the best part of a university society:
            identity, membership, committee, community, recurring socials and
            people who actually care about turning up.
          </p>

          <p>
            But with no restrictions...
          </p>
        </div>

        <div className="margin-note">
          NO GUILD.
          <br />
          NO COMMITTEE ROOM ENERGY.
          <br />
          NO GENERIC CLUB FLYERS.
        </div>
      </section>

      <section className="programme-section" id="programme">
        <div className="programme-heading">
          <div className="section-marker">02 / PROGRAMME</div>
          <h2>
            OHHH BOY...
            <br />
            IM GONNA CREAM
          </h2>
        </div>

        <div className="programme-list">
          {programme.map((event) => (
            <article
              key={event.code}
              className={`programme-row ${event.tone}`}
            >
              <div className="programme-code">{event.code}</div>

              <div className="programme-main">
                <span className="programme-type">{event.type}</span>
                <h3>{event.title}</h3>
                <p>{event.meta}</p>
              </div>

              <div className="programme-note">{event.note}</div>

              <div className="programme-arrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement-break">
        <div className="statement-track">
          <span>MUSIC</span>
          <span>PEOPLE</span>
          <span>EXETER</span>
          <span>LATE NIGHTS</span>
          <span>MUSIC</span>
          <span>PEOPLE</span>
        </div>
      </section>

      <section className="membership-rogue" id="membership">
        <div className="membership-left">
          <div className="section-marker">03 / MEMBERSHIP</div>

          <h2>
            JOIN
            <br />
            FOR
          </h2>

          <div className="big-pound">£1</div>
        </div>

        <div className="membership-right">
          <p className="membership-lead">
            Membership is not the product.
            <br />
            Membership is the signal.
          </p>

          <p>
            You join because you want to be part of it. The pound simply makes
            it official.
          </p>

          <div className="benefit-cloud">
            {benefits.map((benefit, index) => (
              <span key={benefit} className={`benefit benefit-${index + 1}`}>
                {benefit}
              </span>
            ))}
          </div>

          <a className="membership-button" href="#contact">
            JOINING SOON ↗
          </a>
        </div>

        <div className="membership-footnote">
          VALID FOR THE ACADEMIC YEAR / EXETER / MEMBERS FIRST
        </div>
      </section>

      <section className="culture-interruption">
        <div className="culture-card one">
          <span>01</span>
          <strong>FLAGSHIP NIGHTS</strong>
          <p>The big ones.</p>
        </div>

        <div className="culture-card two">
          <span>02</span>
          <strong>POP-UPS</strong>
          <p>Small rooms. Strange places. Short notice.</p>
        </div>

        <div className="culture-card three">
          <span>03</span>
          <strong>SOCIALS</strong>
          <p>Beach. Terrace. Daytime. Whatever makes sense.</p>
        </div>

        <div className="culture-card four">
          <span>04</span>
          <strong>COLLABS</strong>
          <p>With people we actually like.</p>
        </div>
      </section>

      <section className="residents-rogue" id="residents">
        <div className="resident-heading">
          <div className="section-marker">04 / RESIDENTS</div>
          <h2>
            JIG
            <br />
            HAXHAXHAX
            <br />
            EREN^2
          </h2>
        </div>

        <div className="resident-grid">
          <div className="resident-box offset-one">
            <span>RESIDENT 001</span>
            <div className="resident-placeholder">?</div>
          </div>

          <div className="resident-box offset-two">
            <span>RESIDENT 002</span>
            <div className="resident-placeholder">?</div>
          </div>

          <div className="resident-box offset-three">
            <span>GUEST SELECTOR</span>
            <div className="resident-placeholder">?</div>
          </div>
        </div>

        <p className="resident-caption">
          EXETER DJS / SELECTORS / FRIENDS OF THE SOCIETY
        </p>
      </section>

      <section className="committee-rogue" id="committee">
        <div className="committee-title">
          <div className="section-marker">05 / COMMITTEE</div>
          <h2>
            YES.
            <br />
            THERE'S A
            <br />
            COMMITTEE.
          </h2>
        </div>

        <div className="committee-copy">
          <p>
            Because a society needs people behind it.
          </p>

          <p>
            Events. Socials. Music. Marketing. Content. Partnerships.
            Membership.
          </p>

          <p>
            The founders run the company. The committee helps run the culture.
          </p>

          <div className="committee-roles">
            <span>EVENTS</span>
            <span>SOCIALS</span>
            <span>MUSIC</span>
            <span>CONTENT</span>
            <span>MARKETING</span>
            <span>PARTNERSHIPS</span>
          </div>
        </div>

        <div className="committee-side">
          RUN LIKE
          <br />
          A SOCIETY.
          <br />
          BUILT LIKE
          <br />
          A BRAND.
        </div>
      </section>

      <section className="contact-rogue" id="contact">
        <div className="contact-orbit">
          <img src="/house-society-globe.png" alt="House Society globe" />
        </div>

        <div className="contact-main">
          <div className="section-marker">06 / CONTACT</div>

          <h2>
            GET
            <br />
            INVOLVED.
          </h2>

          <p>
            DJs / VENUES / PHOTOGRAPHERS / SOCIETIES / BRANDS / PEOPLE WITH
            GOOD IDEAS
          </p>

          <a href="mailto:hello@housesociety.example" className="contact-email">
            HELLO@HOUSESOCIETY.EXAMPLE ↗
          </a>
        </div>

        <div className="contact-tag">
          GOOD MUSIC
          <br />
          GOOD PEOPLE
          <br />
          BETTER NIGHTS
        </div>
      </section>

      <footer className="rogue-footer">
        <div>
          <span>HOUSE SOCIETY</span>
          <span>EXETER / 2026</span>
        </div>

        <div>
          <span>INDEPENDENT STUDENT EVENTS COMPANY</span>
          <span>
            NOT AFFILIATED WITH THE UNIVERSITY OF EXETER OR EXETER STUDENTS'
            GUILD
          </span>
        </div>

        <a href="#top">↑ TOP</a>
      </footer>
    </main>
  );
  }