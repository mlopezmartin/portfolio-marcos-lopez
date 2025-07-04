import React, { useEffect, useState } from "react";

const LanguageToggle: React.FC = () => {
  const [nextLang, setNextLang] = useState<"es" | "en">("en");

  useEffect(() => {
    const currentLang = window.location.pathname.startsWith("/en") ? "en" : "es";
    const altLang = currentLang === "es" ? "en" : "es";
    setNextLang(altLang);
  }, []);

  const toggleLang = () => {
    const newPath = window.location.pathname.replace(/^\/(en|es)/, `/${nextLang}`);
    localStorage.setItem("lang", nextLang); // opcional: guarda preferencia
    window.location.href = newPath;
  };

  return (
    <button
      onClick={toggleLang}
      aria-label="Cambiar idioma"
      className="px-3 py-1 border rounded text-sm"
    >
      {nextLang.toUpperCase()}
    </button>
  );
};

export default LanguageToggle;
