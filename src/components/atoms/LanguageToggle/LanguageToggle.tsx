import React, { useState, useEffect } from "react";

const LanguageToggle: React.FC = () => {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as 'es' | 'en' | null;
    if (storedLang) {
      setLang(storedLang);
    }
  }, []);

  const toggleLang = () => {
    const nextLang = lang === 'es' ? 'en' : 'es';
    setLang(nextLang);
    localStorage.setItem("lang", nextLang);
    window.location.href = `/${nextLang}/`;
  };

  return (
    <button
      onClick={toggleLang}
      aria-label="Cambiar idioma"
      className={`flex w-24 h-8 rounded-full bg-gray-300 dark:bg-gray-600 relative transition-colors`}
    >
      <span
        className={`absolute w-1/2 h-full bg-white dark:bg-gray-800 rounded-full shadow transition-transform ${
          lang === "es" ? "translate-x-0" : "translate-x-full"
        }`}
      />
      <span className="flex-1 text-center text-sm z-10 leading-8">
        Español
      </span>
      <span className="flex-1 text-center text-sm z-10 leading-8">
        Inglés
      </span>
    </button>
  );
};

export default LanguageToggle;
