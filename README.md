This is a small demo project for a simple web application with an article feed and article detail pages. Currently, the web app is only optimized for mobile screens with no responsive design. It is based on Next, React and Tailwind.

The web application is currently quite simple. Potential future improvements could include:

* **View Transition API**: Seamless transition between feed and article pages
* **Preconnect**: Preconnect to important external domains
* **Preload**: Preload the most important articles (which the user is most likely to click on)
* **Responsive Design**: Useable designs on screens bigger than mobile
* **Service Worker**: SW support for offline reading support
* **Dark Mode**: Dark Mode support for a better reading experience in low light environments

## Getting Started

For locally development, make sure to install the dependencies and run the `dev` command:

```bash
# Install the dependencies
npm install

# Run the development server locally
npm run dev
```

This will start the project and it will be reachable via `http://localhost:3000`. There are currently no other external dependencies necessary.

To run and deploy this project in production, use the `build` and `start` command:

```bash
# Build the production version of the web application
npm run build

# Start the production version
npm run start
```

## Testing

This project contains some unit and end2end tests. You can run them via the following commands:

```bash
# Execute unit tests with vitest
npm run test

# Execute integration test with playwright
npm run test:e2e
```

Please be aware, that the end-to-end tests currently don't run 100% reliable.

If you are trying to run the end-to-end tests for the first time, be sure to run the following command to download and install the browsers for Playwright.

```bash
npx playwright install
```

## Contributing

Issues and bug reports are very welcome. However, at this point in time, code contributions in form of pull requests are NOT accepted. Feel free to fork, reuse or copy any parts of the code and project as you see fit.

## License

MIT
