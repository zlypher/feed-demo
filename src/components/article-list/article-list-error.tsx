export const ArticleListError = () => {
  return (
    <section className="overflow-y-auto min-h-full flex flex-col justify-center text-center p-6 m-auto">
      <h1 className="text-xl font-bold mb-4">
        Leider kann der Feed aktuell nicht angezeigt werden!
      </h1>
      <p>
        Wir arbeiten bereits mit Hochdruck an einer Lösung! Versuche es bitte
        später erneut.
      </p>
    </section>
  );
};
