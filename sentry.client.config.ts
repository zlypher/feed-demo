// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://67642678d5c76d5c78e4528dbe90117d@o4508252416311296.ingest.de.sentry.io/4508270488977488",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
