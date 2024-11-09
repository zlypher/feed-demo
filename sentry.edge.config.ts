// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://67642678d5c76d5c78e4528dbe90117d@o4508252416311296.ingest.de.sentry.io/4508270488977488",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
