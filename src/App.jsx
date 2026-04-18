import { useEffect, useMemo, useState } from 'react'

const experience = [
  {
    title: 'Development',
    text: 'HTML/CSS, WordPress, CMS, SEO, Shopify',
    icon: '/images/148908.png',
  },
  {
    title: 'Webdesign',
    text: 'Adobe CC, Analysieren - Verstehen - Idee - Entwurf - Umsetzen',
    icon: '/images/148909.png',
  },
  {
    title: 'Internet / Social Media',
    text: 'Hohe Internet-Affinität mit Gespür für konzeptionelle Details und technische Möglichkeiten.',
    icon: '/images/148808.png',
  },
  {
    title: 'Visuelle Kommunikation',
    text: 'Ungewöhnliche Ideen, typografisches Feingefühl und ein klarer Blick für starken Content.',
    icon: '/images/widder.png',
  },
  {
    title: 'Flotter Stift',
    text: 'Zeichnen, Illustrieren, Storytelling und die Freude an prägnanten Bildern.',
    icon: '/images/Zeichnung-_Bewerbung.png',
  },
  {
    title: 'PR / Marketing',
    text: 'E-Mail-Kampagnen, Marktkommunikation und Inhalte, die bei Menschen ankommen.',
    icon: '/images/Bewerbungsfoto.png',
  },
]

const portfolioItems = [
  {
    src: '/images/Rusalka_Plakat.jpg',
    title: 'Rusalka Plakat',
  },
  {
    src: '/images/Zinnsoldat_Papiertaenzerin.png',
    title: 'Zinnsoldat & Papiertänzerin',
  },
  {
    src: '/images/cover readers digest_fiktiv.jpg',
    title: 'Readers Digest Cover',
  },
  {
    src: '/images/Geschaeftsdrucksachen Mockup.jpg',
    title: 'Geschäftsdrucksachen Mockup',
  },
  {
    src: '/images/IMG_7375.jpg',
    title: '7375',
  },
  {
    src: '/images/Zeichnung-_Bewerbung.png',
    title: 'Poesie der Linie',

    },
  {
      src: '/images/strand.png',
      title: 'strand',
    
  },
  {
    src: '/images/Hyndai.jpg',
    title: 'Hyndai',
  },
  {
    src: '/images/0218 (1) 1.mp4',
    title: 'Videoarbeit 01',
  },
  {
    src: '/images/AAD864D3-A7FD-4E1E-AFA7-FD01F4CF0D5C.mp4',
    title: 'Videoarbeit 02',
  },
  {
    src: '/images/Sebastian_Cover.jpg',
    title: 'S_C',

  },
  {
    src: '/images/Sora3.jpg',
    title: 'Sora3',
  },
]

const extension = (file) => file.split('.').pop()?.toLowerCase() ?? ''

const isVideo = (file) => ['mp4', 'webm', 'ogg'].includes(extension(file))
const toEncodedPath = (path) => path.replaceAll(' ', '%20')

function App() {
  const [activeItem, setActiveItem] = useState(null)
  const [isVideoMuted, setIsVideoMuted] = useState(true)

  const activeItemType = useMemo(() => {
    if (!activeItem) return null
    if (isVideo(activeItem.src)) return 'video'
    return 'image'
  }, [activeItem])

  useEffect(() => {
    if (!activeItem) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveItem(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeItem])

  const openItem = (item) => {
    setActiveItem(item)
    setIsVideoMuted(true)
  }

  return (
    <div className="relative isolate overflow-x-hidden bg-porcelain text-stone-800">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[#ff6500]/90" />

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
              Visuelle Designerin für digital und print. Ich verbinde klare Konzeption,
              starke Typografie und Illustration zu Arbeiten, die sofort lesbar und
              trotzdem unverwechselbar sind.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#portfolio" className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                Portfolio ansehen
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

        <section className="mx-auto w-full max-w-6xl px-5 pb-4 sm:px-8">
          <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-xl shadow-stone-200/50 sm:p-6">
            <p className="font-display text-xl leading-tight text-stone-800 sm:text-2xl">
              Poesie der Linie
            </p>
            <img
              src="/images/Zeichnung-_Bewerbung.png"
              alt="Linienzeichnung"
              className="mt-4 h-48 w-full rounded-2xl bg-porcelain object-cover object-center"
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

        <section id="portfolio" className="bg-[#ff6500]/90 py-20">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <h2 className="max-w-3xl font-display text-3xl leading-tight text-stone-900 sm:text-4xl">
              Aus dem Chaos entstand das Universum - von Visionen zum Endprodukt
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {portfolioItems.map((item, index) => (
                <button
                  key={item.src}
                  onClick={() => openItem(item)}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-full border-4 border-[#ffd45a] text-left shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#ffe08f]"
                  aria-label={`${item.title} vergrößern`}
                >
                  {isVideo(item.src) ? (
                    <video
                      src={toEncodedPath(item.src)}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={toEncodedPath(item.src)}
                      alt={`Portfolio-Arbeit ${index + 1}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  <span
                    className="absolute right-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-sm font-semibold text-white"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </button>
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

        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-sm font-semibold text-white hover:bg-black/75"
                onClick={() => setActiveItem(null)}
                aria-label="Schließen"
              >
                Schließen
              </button>

              {activeItemType === 'video' && (
                <>
                  <video
                    src={toEncodedPath(activeItem.src)}
                    className="max-h-[85vh] w-full bg-black object-contain"
                    controls
                    autoPlay
                    muted={isVideoMuted}
                    playsInline
                  />
                  <button
                    className="absolute left-4 top-4 z-10 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white hover:bg-black/85"
                    onClick={() => setIsVideoMuted((prev) => !prev)}
                  >
                    {isVideoMuted ? 'Ton an' : 'Ton aus'}
                  </button>
                </>
              )}

              {activeItemType === 'image' && (
                <img
                  src={toEncodedPath(activeItem.src)}
                  alt={activeItem.title}
                  className="max-h-[85vh] w-full bg-white object-contain"
                />
              )}

            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
