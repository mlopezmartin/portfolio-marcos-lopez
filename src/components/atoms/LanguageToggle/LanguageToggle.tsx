import React from "react";

const LanguageToggle: React.FC = () => {
  const currentLang = typeof window !== "undefined" && window.location.pathname.startsWith("/en") ? "en" : "es";
  const nextLang = currentLang === "es" ? "en" : "es";

  const toggleLang = () => {
    const newPath = window.location.pathname.replace(/^\/(en|es)/, `/${nextLang}`);
    window.location.href = newPath; // mantiene la misma ruta pero en otro idioma
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
