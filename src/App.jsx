const experience = [
  {
    title: 'Development',
    text: 'HTML/CSS, WordPress (PHP), responsives Webdesign, CMS, PIM, SEO, Shopify',
    icon: '/images/148908.png',
  },
  {
    title: 'Webdesign',
    text: 'Adobe CC, Analysieren - Verstehen - Idee - Entwurf - Umsetzen',
    icon: '/images/148909.png',
  },
  {
    title: 'Internet / Social Media',
    text: 'Hohe Internet-Affinitaet mit Gespuer fuer konzeptionelle Details und technische Moeglichkeiten.',
    icon: '/images/148808.png',
  },
  {
    title: 'Visuelle Kommunikation',
    text: 'Ungewoehnliche Ideen, typografisches Feingefuehl und ein klarer Blick fuer starken Content.',
    icon: '/images/widder.png',
  },
  {
    title: 'Flotter Stift',
    text: 'Zeichnen, Illustrieren, Storytelling und die Freude an praegnanten Bildern.',
    icon: '/images/Zeichnung-_Bewerbung.png',
  },
  {
    title: 'PR / Marketing',
    text: 'E-Mail-Kampagnen, Marktkommunikation und Inhalte, die bei Menschen ankommen.',
    icon: '/images/Bewerbungsfoto.png',
  },
]

const gallery = [
  '/images/IMG_1098.jpg',
  '/images/8ad73f3c.jpeg',
  '/images/68f64b9d.jpeg',
  '/images/0fd3416c.jpeg',
]

function App() {
  return (
    <div className="relative isolate overflow-x-hidden bg-porcelain text-stone-800">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_20%_20%,#f4d6ab_0%,transparent_45%),radial-gradient(circle_at_80%_10%,#d7e3da_0%,transparent_42%)]" />

      <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-porcelain/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="font-display text-base tracking-[0.18em] text-stone-800 sm:text-lg">
            MAN KANN NICHT NICHT KOMMUNIZIEREN
          </a>
          <nav className="hidden gap-5 text-sm font-medium text-stone-700 md:flex">
            <a href="#about" className="hover:text-stone-950">About</a>
            <a href="#experience" className="hover:text-stone-950">Erfahrung</a>
            <a href="#portfolio" className="hover:text-stone-950">Portfolio</a>
            <a href="#contact" className="hover:text-stone-950">Kontakt</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section id="about" className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
          <div className="space-y-7">
            <p className="font-body text-sm uppercase tracking-[0.25em] text-stone-600">Visuelle Kommunikation</p>
            <h1 className="font-display text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">O L G A</h1>
            <p className="max-w-xl text-base leading-7 text-stone-700 sm:text-lg">
              Visuelle Designerin fuer digital und print. Ich verbinde klare Konzeption,
              starke Typografie und Illustration zu Arbeiten, die sofort lesbar und
              trotzdem unverwechselbar sind.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#portfolio" className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                Arbeiten ansehen
              </a>
              <a href="mailto:o.waldschmidt@outlook.de" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-500 hover:text-stone-900">
                Kontakt aufnehmen
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <img
              src="/images/Bewerbungsfoto.png"
              alt="Portrait von Olga"
              className="aspect-[4/5] w-full rounded-[2.2rem] object-cover shadow-2xl shadow-stone-400/30"
            />
            <img
              src="/images/widder.png"
              alt="Illustration Widder"
              className="absolute -bottom-12 -left-6 hidden w-36 rotate-[-7deg] rounded-2xl bg-porcelain p-3 shadow-xl sm:block"
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-6 sm:px-8">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/50 sm:p-10">
            <p className="font-display text-2xl leading-tight text-stone-800 sm:text-3xl">
              Poesie der Linie
            </p>
            <img
              src="/images/Zeichnung-_Bewerbung.png"
              alt="Linienzeichnung"
              className="mt-6 h-auto w-full rounded-2xl bg-porcelain object-contain p-4"
              loading="lazy"
            />
          </div>
        </section>

        <section id="experience" className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl">Erfahrung</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {experience.map((item) => (
              <article key={item.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img src={item.icon} alt="" aria-hidden="true" className="h-11 w-11 rounded-xl object-cover" loading="lazy" />
                <h3 className="mt-4 font-display text-xl text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-700">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="bg-sand/65 py-20">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <h2 className="max-w-3xl font-display text-3xl leading-tight text-stone-900 sm:text-4xl">
              Aus dem Chaos entstand das Universum - von Visionen zum Endprodukt
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((image, index) => (
                <figure
                  key={image}
                  className="group aspect-square overflow-hidden rounded-full border-4 border-white shadow-lg"
                >
                  <img
                    src={image}
                    alt={`Portfolio-Arbeit ${index + 1}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-5 pb-24 pt-20 sm:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Standort</p>
              <p className="mt-3 font-display text-3xl">Stuttgart</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">E-Mail</p>
              <a className="mt-3 inline-block font-display text-2xl text-stone-900 hover:text-stone-600 sm:text-3xl" href="mailto:o.waldschmidt@outlook.de">
                o.waldschmidt@outlook.de
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
