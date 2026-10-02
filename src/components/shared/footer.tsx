const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#1a1a1a] px-6 py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">

        <div className="flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 9V15M7 7V17M17 7V17M20 9V15M7 12H17M4 12H2M22 12H20"
              stroke="#B7FF00"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="text-sm font-bold tracking-wider text-white">
            FITLOG
          </span>
        </div>

        <p className="text-center text-xs text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
