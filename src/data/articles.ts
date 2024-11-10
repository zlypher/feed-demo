import { useQuery } from "@tanstack/react-query";

export type TArticle = {
  id: string;
  slug: string;
  headline: string;
  author: string;
  text: string;
  publicationDate: string;
  categories: string[];
  headerImageUrl: string;
};

const MOCK_ARTICLES: TArticle[] = [
  {
    id: "d7b20fd5-62f7-4a73-a2a4-85fcb11f60f4",
    slug: "die-us-demokraten-treten-schlechten-vorzeichen-mit-ihren-all-stars-entgegen",
    headline:
      "Die US-Demokraten treten schlechten Vorzeichen mit ihren All-Stars entgegen",
    author: "Manuel Escher",
    text: `Von "Joy" war lange Zeit nichts mehr zu spüren. Die gute Stimmung und der Positivwahlkampf, mit dem Kamala Harris nach ihrem Aufstieg zur Kandidatin gegen Donald Trump im Sommer in die Arena gestiegen war, sind bei den US-Demokraten einer spürbaren Nervosität und bösen Vorahnungen gewichen. Umfragen haben zuletzt landesweit ein äußerst knappes Rennen prognostiziert. Und auf Ebene der wahrscheinlich entscheidenden Bundesstaaten im Mittleren Westen sehen die Demoskopen die Demokratin höchsten noch hauchdünn voran.`,
    publicationDate: "2024-10-27T15:08:00",
    categories: ["International", "US"],
    headerImageUrl:
      "/die-us-demokraten-treten-schlechten-vorzeichen-mit-ihren-all-stars-entgegen.jpg",
  },
  {
    id: "a7547cd2-51ec-49cd-82f3-5690263f6efc",
    slug: "hello-kitty-wird-50-das-milliardengeschaeft-mit-kindertraeumen",
    headline: "Hello Kitty wird 50: Das Milliardengeschäft mit Kinderträumen",
    author: "Verena Kainrath",
    text: "Zwei schwarze Punkte als Augen starren den Beobachter frontal an. Der Kopf ist doppelt so groß wie der Körper. Dazu sechs Schnurrbarthaare, eine gelbe Nase, zwei spitze Ohren und ein schief sitzendes rotes Schleifchen. Das ist das Markenzeichen von Hello Kitty. Unschuldig, rein und niedlich gibt sich die japanische Kultfigur. Über alle Zweifel erhaben macht sie der fehlende Mund. Ihre Erfinder verkaufen sie als leere Leinwand, auf die jeder seine eigenen Emotionen und Erfahrungen projizieren könne.",
    publicationDate: "2024-10-26T12:36:00",
    categories: ["Wirtschaft", "Unternehmen"],
    headerImageUrl:
      "/hello-kitty-wird-50-das-milliardengeschaeft-mit-kindertraeumen.jpg",
  },
  {
    id: "c11471b4-d2db-47f4-801b-122b645342be",
    slug: "test-article-with-invalid-header-image",
    headline: "Test Article with invalid Header Image",
    author: "Test Author",
    text: "This is simply a test article with an invalid Header Image",
    publicationDate: "2024-10-25T12:15:00",
    categories: ["Test"],
    headerImageUrl: "/-invalid-",
  },
  {
    id: "730b8e07-0cf6-4549-8902-0fbf3defeeb3",
    slug: "forderung-aus-der-start-up-szene-zugewanderte-gruender-sollen-weniger-steuern-zahlen",
    headline:
      "Forderung aus der Start-up-Szene: Zugewanderte Gründer sollen weniger Steuern zahlen",
    author: "Andreas Danzer",
    text: "Es hat ein bisschen etwas Rituelles. Die Start-up-Szene in Österreich fordert Verbesserungen für den Wirtschaftsstandort, auf politischer Seite werden die Vorschläge begrüßt, es folgen Ankündigungen, und dann beginnt es wieder von vorn. Doch mit in ihrem neuen Forderungskatalog Austrian Startup Agenda 2024 lässt die Szene mit einer mutigen Empfehlung aufhorchen: Ausländische Gründer sollen weniger Steuern zahlen, wenn sie nach Österreich kommen, um hier ein Business zu starten.",
    publicationDate: "2024-10-23T05:00:00",
    categories: ["Wirtschaft", "Unternehmen", "Start up"],
    headerImageUrl:
      "/forderung-aus-der-start-up-szene-zugewanderte-gruender-sollen-weniger-steuern-zahlen.jpg",
  },
  {
    id: "98bc2b55-c091-4d34-a036-1b990bdc4d1f",
    slug: "skifahren-zwischen-lust-frust-und-zukunftsangst",
    headline: "Skifahren zwischen Lust, Frust und Zukunftsangst",
    author: "Günther Strobl",
    text: "Der Countdown zum Wedelspaß auf Österreichs Skipisten läuft, auch der für die Professionellen, ganz Schnellen. Mit einem Frauenriesentorlauf beginnt am 26. Oktober in Sölden die heurige Weltcupsaison; tags darauf gehen am Rettenbachferner oberhalb der Tiroler Tourismushochburg die Herren an den Start. Weil der 26. Oktober Nationalfeiertag ist, hat das durchaus Symbolkraft: Schließlich wird hierzulande Skifahren als Nationalsport begriffen. Aber ist es das noch?",
    publicationDate: "2024-10-17T12:32:00",
    categories: ["Wirtschaft", "Unternehmen"],
    headerImageUrl: "/skifahren-zwischen-lust-frust-und-zukunftsangst.jpg",
  },
  {
    id: "130492a4-4bf8-44bb-9285-47d4988035da",
    slug: "wuchteln-aus-zwei-fu223ballerleben",
    headline:
      "Krankl und Prohaska erzählen in Jesolo Wuchteln aus zwei Fußballerleben",
    author: "Lukas Zahrer",
    text: `Hans Krankl ärgert sich. Seine Enkeltochter spricht fast ausschließlich Hochdeutsch, so wie alle in ihrer Schule. Sie klingen wie Piefke, sagt er. Daran seien vor allem soziale Medien schuld. Krankl will, dass das Wienerische erhalten bleibt. "Dafür kämpfe ich wie ein Löwe", sagt er. Ein Hans Krankl kapiert Dinge beispielsweise nicht, er kneißt sie.`,
    publicationDate: "2024-10-26T20:00:00",
    categories: ["Kultur", "Literatur"],
    headerImageUrl: "/wuchteln-aus-zwei-fu223ballerleben.jpg",
  },
  {
    id: "2030ba60-4cb6-4ba4-a26c-872d92160b4b",
    slug: "wien-stockt-budget-fuer-strauss-jahr-2025-um-zwei-millionen-euro-auf",
    headline:
      "Wien stockt Budget für Strauss-Jahr 2025 um zwei Millionen Euro auf",
    author: "Max Mustermann",
    text: "Wien – Wien widmet dem 200. Geburtstag von Walzerkönig Johann Strauss 2025 ein eigenes Festjahr. Die Programmdetails werden dazu von Intendant Roland Geyer am Freitag präsentiert. Fix ist jedoch bereits, dass mehr Geld nötig sein wird. Konkret wird das Budget um weitere zwei Millionen Euro aufgestockt. Man müsse auf die hohe Inflation reagieren, begründete Kulturstadträtin Veronica Kaup-Hasler (SPÖ) am Mittwoch im Gemeinderat den Schritt.",
    publicationDate: "2024-10-23T14:43:00",
    categories: ["Kultur", "Musik"],
    headerImageUrl:
      "/wien-stockt-budget-fuer-strauss-jahr-2025-um-zwei-millionen-euro-auf.jpg",
  },
  {
    id: "b55274da-c6b1-430a-9feb-7994f99df600",
    slug: "die-unerwartete-wiederbelebung-der-supernova-aus-dem-jahr-1181",
    headline: "Die unerwartete Wiederbelebung der Supernova aus dem Jahr 1181",
    author: "Max Mustermann",
    text: `Im Jahr 1181 begann ein neuer Stern am nächtlichen Firmament zu leuchten. Auf seinem Höhepunkt war die Helligkeit des Himmelskörpers, der in der Nähe des Sternbilds Kassiopeia leuchtete, mit der des Planeten Saturn vergleichbar. Der Stern blieb aber nur rund 180 Tage lang mit bloßem Auge sichtbar, bis er allmählich wieder verschwand. Dieses himmlische Ereignis, das vor mehr als 800 Jahren von chinesischen und japanischen Beobachtern als "Gaststern" aufgezeichnet wurde, hat Fachleute jahrhundertelang vor ein Rätsel gestellt.`,
    publicationDate: "2024-10-25T09:00:00",
    categories: ["Wissenschaft"],
    headerImageUrl:
      "/die-unerwartete-wiederbelebung-der-supernova-aus-dem-jahr-1181.jpg",
  },
  {
    id: "4758b2ba-7d2d-40c9-afca-589c75a564a6",
    slug: "leben-auf-dem-mars-koennte-sich-im-eis-verstecken",
    headline: "Leben auf dem Mars könnte sich im Eis verstecken",
    author: "Thomas Bergmayr",
    text: "So wüst und trocken der Mars heute auch erscheinen mag, es gab eine Zeit, da ging es dort viel lebensfreundlicher zu. Spuren von großen Seen, vielleicht sogar Meeren, uralte Flussverläufe, Canyons und die Deltas großer Ströme – der heutige Mars ist voller Hinweise darauf, dass hier einst Wasser geflossen ist. Mittlerweile konnte man diese feuchte Ära auf eine Zeit vor etwa vier Milliarden Jahren eingrenzen.",
    publicationDate: "2024-10-22T12:04:00",
    categories: ["Wissenschaft", "Weltraum"],
    headerImageUrl: "/leben-auf-dem-mars-koennte-sich-im-eis-verstecken.jpg",
  },
];

export const getAllArticles = (): TArticle[] => {
  return [...MOCK_ARTICLES];
};

export const getArticleBySlug = (slug: string): TArticle | undefined => {
  return MOCK_ARTICLES.find((article) => slug === article.slug);
};

export const fetchArticles = async (): Promise<TArticle[]> => {
  const response = await fetch("/api/v1/articles");
  return await response.json();
};

export const useArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: () => fetchArticles(),
    retry: false,
  });
};
