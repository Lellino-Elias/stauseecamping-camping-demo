import type { CampsiteConfig } from "../types";

/**
 * Stausee Camping — Dullach am Völkermarkter Stausee, Kärnten.
 * Alle Texte/Fakten belegt aus dem Scrape von stauseecamping.at (Willkommen-Seite
 * + Meta-Beschreibungen), Stand 2026-06. Quellenzitate: siehe REPORT.md.
 *
 * EHRLICH (Urteilsentscheidungen für die Kundin im REPORT geflaggt):
 *  - Es war NUR die Willkommen-Seite abrufbar; die Unterseiten "Preisliste",
 *    "Übersicht" und "Was bieten wir?" konnten NICHT gescrapt werden → es gibt
 *    KEINE Quellpreise. booking.pricesArePlaceholder = true, die Werte sind reine
 *    unverbindliche Platzhalter und MÜSSEN mit der Kundin bestätigt werden.
 *  - Es liegen nur 3 echte, per Auge geprüfte Fotos dieses Platzes vor (Luftbild,
 *    Camping am Ufer, Badeteich). Alle übrigen Bibliotheksbilder zeigen ANDERE
 *    Plätze (camping.info-Nachbarlistings / das deutsche "Camping Stausee
 *    Oberwald") und wurden verworfen. Galerie blendet sich daher aus (<4 Bilder).
 *    Keine Fremd- oder Stockfotos.
 *  - Der Platz liegt tatsächlich am Stausee ("am einzig gelegenen Campingplatz des
 *    Völkermarkter Stausees") → see gesetzt.
 *  - Keine Koordinaten in der Quelle → coords ausgelassen (nur Adresse, keine Karte).
 *  - Keine belegte Auszeichnung → awards leer.
 */
const IMG = "/campsites/stauseecamping";

export const stauseecamping: CampsiteConfig = {
  name: "Stausee Camping",
  shortName: "Stausee Camping",
  slug: "stauseecamping",
  ort: "Dullach am Völkermarkter Stausee",
  region: "Kärnten",
  brandKind: "Camping",
  see: "Völkermarkter Stausee",
  regionLong: "Völkermarkter Stausee · Kärnten · Österreich",

  claim: "Mit der Seele baumeln am Völkermarkter Stausee",
  claimEmphasis: "am Völkermarkter Stausee",
  intro:
    "Familiäres Camping am einzigen Platz direkt am Völkermarkter Stausee — Fischen, Wandern und Ruhe in der Natur, nur wenige Kilometer von Völkermarkt. Geöffnet von Mai bis Oktober.",

  statement: {
    text: "Vergessen Sie Großstadtlärm und Alltagstrubel und lernen Sie wieder mit der Seele zu baumeln.",
    emphasis: "mit der Seele zu baumeln",
  },

  pillars: [
    {
      title: "Einzig am Stausee",
      text: "Der einzig gelegene Campingplatz des Völkermarkter Stausees — familiär geführt, mitten in der idyllischen Landschaft am Wasser.",
      image: { src: `${IMG}/luftbild-stausee.webp`, alt: "Luftbild des Campingplatzes am Völkermarkter Stausee mit Wiesen und Badeteich" },
    },
    {
      title: "Fischen & frische Luft",
      text: "Atmen Sie beim Fischen die saubere Luft ein und erleben Sie die Harmonie zwischen Mensch und Natur wieder neu.",
      image: { src: `${IMG}/camping-am-stausee.webp`, alt: "Zelte und Wohnwagen direkt am Ufer des Völkermarkter Stausees" },
    },
    {
      title: "Badeteich am Platz",
      text: "Ein angelegter Badeteich mit Holzsteg lädt an warmen Tagen zum Abkühlen ein — gleich neben den Stellplätzen.",
      image: { src: `${IMG}/badeteich.webp`, alt: "Angelegter Badeteich mit Holzsteg am Stausee Camping" },
    },
  ],

  usps: [
    "Einziger Campingplatz am Völkermarkter Stausee",
    "Familiär geführte Ferienanlage",
    "Fischen am Stausee",
    "Wandern über grüne Wiesen",
    "Genuss-Radwege entlang der Drau",
    "Geöffnet Mai bis Oktober",
  ],

  trust: {
    heading: "Worauf Sie sich am Stausee verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Eine familiär geführte Ferienanlage, ruhig gelegen am einzigen Campingplatz des Völkermarkter Stausees — saubere Luft, saftig grüne Wiesen und Natur pur, nur wenige Kilometer von Völkermarkt entfernt.",
  },

  // Keine eindeutig belegbare Auszeichnung in der Quelle → ehrlich leer.
  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/luftbild-stausee.webp`, alt: "Luftaufnahme: Stausee Camping am Völkermarkter Stausee mit Stellplätzen, Wiesen und Badeteich" },
  },

  camping: {
    heading: "Camping am Völkermarkter Stausee",
    intro:
      "Stellplätze auf saftig grünen Wiesen, direkt in der idyllischen Landschaft des Stausees — ein ruhiger Platz zum Durchatmen, nur wenige Kilometer von Völkermarkt.",
    features: [
      {
        title: "Direkt am Wasser",
        text: "Ob Zelt, Wohnwagen oder Wohnmobil — am Ufer des Völkermarkter Stausees findet jeder seinen ruhigen Platz in der Natur.",
        image: { src: `${IMG}/camping-am-stausee.webp`, alt: "Zelte und Wohnwagen am Ufer des Völkermarkter Stausees" },
      },
      {
        title: "Badeteich zum Abkühlen",
        text: "Der platzeigene Badeteich mit Holzsteg sorgt an heißen Sommertagen für Erfrischung.",
        image: { src: `${IMG}/badeteich.webp`, alt: "Badeteich mit Holzsteg am Stausee Camping" },
      },
      {
        title: "Mitten in der Natur",
        text: "Wandern Sie über saftig grüne Wiesen, eingebettet in die idyllische Landschaft rund um den Stausee.",
        image: { src: `${IMG}/luftbild-stausee.webp`, alt: "Luftbild der grünen Wiesen und Stellplätze am Stausee Camping" },
      },
    ],
  },

  anreise: {
    heading: "Lage & Anreise",
    modes: [
      {
        title: "Anfahrt",
        text: "Sie finden uns in Dullach 8, 9100 — im Süden Kärntens, nur wenige Kilometer vom Zentrum Völkermarkt entfernt, direkt am Völkermarkter Stausee.",
      },
      {
        title: "In der Umgebung",
        text: "Eingebettet zwischen Völkermarkt, Griffen und Bleiburg — mit Genuss-Radwegen entlang der Drau und nahe gelegenen Gasthöfen und Buschenschenken.",
      },
    ],
  },

  galerie: {
    // Hinweis: <4 Bilder → diese Sektion blendet sich im Design automatisch aus.
    // Nur 3 echte Fotos dieses Platzes vorhanden; bewusst KEINE Fremdfotos zum Auffüllen.
    heading: "Eindrücke vom Stausee",
    headingEmphasis: "Stausee",
    intro:
      "Ein paar Eindrücke vom Stausee Camping in Dullach — Luftbild, Camping am Ufer und der Badeteich am Platz.",
    tag: "Mai bis Oktober",
    images: [
      { src: `${IMG}/luftbild-stausee.webp`, alt: "Luftbild des Stausee Campings am Völkermarkter Stausee" },
      { src: `${IMG}/badeteich.webp`, alt: "Badeteich mit Holzsteg am Stausee Camping" },
      { src: `${IMG}/camping-am-stausee.webp`, alt: "Camping am Ufer des Völkermarkter Stausees" },
    ],
  },

  booking: {
    heading: "Anfrage & Verfügbarkeit",
    intro:
      "Schreiben Sie uns Ihren Wunschzeitraum — wir melden uns mit der Verfügbarkeit und den aktuellen Preisen für Ihren Aufenthalt am Stausee.",
    // KEINE Quellpreise verfügbar (Preisliste-Unterseite nicht abrufbar) →
    // Platzhalter, im Design klar als "noch nicht final bestätigt" gekennzeichnet.
    pricesArePlaceholder: true,
    priceNote: "Richtwerte — aktuelle Preise und Kurtaxe bitte direkt beim Platz erfragen.",
    highlight: {
      title: "Persönliche Anfrage",
      text: "Wir melden uns mit Ihrer persönlichen Verfügbarkeit und den aktuellen Preisen — geöffnet von Mai bis Oktober.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 25, perExtraGuest: 7 },
      { id: "zelt", label: "Zeltplatz", perNight: 18, perExtraGuest: 6 },
    ],
  },

  kontakt: {
    coords: { lat: 46.621563, lng: 14.547845 },
    tel: "+43 (0) 650 2644996",
    telHref: "tel:+436502644996",
    mail: "office@stauseecamping.com",
    adresse: "Dullach 8 · 9100 Dullach · Kärnten",
    // Keine expliziten Koordinaten in der Quelle → coords ausgelassen (Karte aus, Adresse zeigt).
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Direkt am Wasser", href: "#camping" },
        { label: "Badeteich", href: "#camping" },
        { label: "Natur & Ruhe", href: "#camping" },
      ],
    },
    {
      label: "Am Stausee",
      href: "#top",
      children: [
        { label: "Fischen", href: "#top" },
        { label: "Wandern", href: "#top" },
        { label: "Radwege an der Drau", href: "#anreise" },
      ],
    },
    {
      label: "Lage",
      href: "#anreise",
      children: [
        { label: "Anfahrt", href: "#anreise" },
        { label: "Umgebung", href: "#anreise" },
      ],
    },
    { label: "Anfrage", href: "#booking" },
  ],
};

export default stauseecamping;
