import type { CampsiteConfig } from "../types";

/**
 * Stausee Camping — Dullach am Völkermarkter Stausee, Kärnten.
 * Quelle: eigene Website (stauseecamping.at, nur Willkommen-Seite gescrapt) + camping.info-Listing.
 * BILDLAGE: Nur EIN belegbares Foto dieses Platzes verfügbar (Luftaufnahme, og:image camping.info,
 * Ordner /stausee-camping/). Alle anderen angereicherten Bilder stammen von FREMDEN Plätzen
 * (Pincamp „Camping Stausee Oberwald" = anderer Platz in Sachsen; camping.info-Galerie = Nachbarplätze)
 * → bewusst NICHT verwendet. Bild-hungrige Sektionen (Pillars/Features/Galerie) blenden sich ehrlich aus.
 */
const IMG = "/campsites/stauseecamping";

const stauseecamping: CampsiteConfig = {
  name: "Stausee Camping",
  shortName: "Stausee",
  slug: "stauseecamping",
  ort: "Dullach am Völkermarkter Stausee",
  region: "Kärnten",
  brandKind: "Camping am Stausee",
  see: "Völkermarkter Stausee",
  regionLong: "Völkermarkter Stausee · Kärnten · Österreich",

  // KEIN theme-Feld (Original-Palette), heroVariant immer "center".
  heroVariant: "center",

  claim: "Der einzige Campingplatz direkt am Völkermarkter Stausee",
  claimEmphasis: "am Völkermarkter Stausee",
  emailDetail: "euer Platz zum Fischen direkt am Stausee",
  intro:
    "Familiär geführt, mitten in der ruhigen Seenlandschaft: Hier lässt du Großstadtlärm hinter dir, wanderst über saftig grüne Wiesen und atmest beim Fischen am Wasser wieder tief durch.",

  statement: {
    text: "Hier beginnt direkt hinter dem Vorzelt die stille Weite des Völkermarkter Stausees.",
    emphasis: "stille Weite",
  },

  // Keine belegbaren Fotos für Pillar-Motive → leer (Sektion blendet sich aus, statt Fremdbilder zu zeigen).
  pillars: [],

  usps: [
    "Direkt am Stausee",
    "Fischen am See",
    "Familiär geführt",
    "Wandern über Wiesen",
    "Geöffnet Mai – Oktober",
  ],

  trust: {
    heading: "Der See gehört hier fast dir allein",
    headingEmphasis: "fast dir allein",
    intro:
      "Als einziger Campingplatz am Völkermarkter Stausee bist du hier mitten in der Natur — familiär geführt, von Mai bis Oktober, mit Wiesen, Wasser und viel Ruhe gleich vor dem Zelt.",
  },

  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: {
      src: `${IMG}/hero-stausee-luftaufnahme.webp`,
      alt: "Luftaufnahme: Stausee Camping direkt am Völkermarkter Stausee",
    },
  },

  // Keine belegbaren Fotos für Feature-Motive (nur Fremdbilder verfügbar) → features leer,
  // Sektion blendet sich aus (analog pillars/galerie).
  camping: {
    heading: "Camping am Stausee",
    intro:
      "Wiesenstellplätze in ruhiger Lage direkt am Wasser — kurze Wege, viel Natur und Platz zum Durchatmen.",
    features: [],
  },

  anreise: {
    heading: "Anfahrt zum Stausee",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A2 Süd Autobahn bis Völkermarkt, dann den Schildern Richtung Stausee und Dullach folgen.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Völkermarkt-Kühnsdorf, von dort sind es nur wenige Minuten mit dem Auto bis zum Platz.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Klagenfurt liegt rund 30 Fahrminuten entfernt — der Rest ist ein kurzer Sprung über Land.",
      },
    ],
  },

  // Galerie braucht 4 belegbare Fotos — nur eines vorhanden → images leer (Sektion blendet sich aus).
  galerie: {
    heading: "Eindrücke vom Stausee",
    headingEmphasis: "Stausee",
    intro: "Ein paar Eindrücke vom Platz und der Seenlandschaft rundherum.",
    tag: "Mai bis Oktober",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Stausee",
    headingEmphasis: "am Stausee",
    intro:
      "Wähle Zeitraum und Personen — das Team meldet sich persönlich mit deiner Verfügbarkeit zurück.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen). 2 Personen inkl. Stellplatz, zzgl. Ortstaxe.",
    highlight: {
      title: "Direkt am Stausee",
      text: "Vom Stellplatz sind es nur wenige Schritte ans Wasser.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 32, perExtraGuest: 7 },
      { id: "zelt", label: "Zeltplatz", perNight: 24, perExtraGuest: 7 },
    ],
  },

  kontakt: {
    coords: { lat: 46.633987, lng: 14.691568 },
    tel: "+43 (0) 650 2644996",
    telHref: "tel:+436502644996",
    mail: "office@stauseecamping.com",
    adresse: "Dullach · Kärnten",
    // coords: Quelle nennt keine — bewusst weggelassen (Geocoding läuft später).
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Der Platz", href: "#top" },
    { label: "Anreise", href: "#anreise" },
    { label: "Preise & Anfrage", href: "#booking" },
  ],
};

export default stauseecamping;
