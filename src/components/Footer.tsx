export const Footer = () => {
  return (
    <footer className="flex flex-row flex-wrap gap-2 text-center justify-center p-8 lg:p-4">
      <p className="text-sm font-thin text-custom-text-subtle md:text-base">
        Duacode technical interview by Adolfo Fanjul Sánchez
      </p>
      <img
        className="w-5 h-5 mt-0.5"
        src="https://www.duacode.com/images/favicon.png"
        alt="Duacode company logo"
      />
    </footer>
  );
};
