import React, { useState, useEffect } from 'react';

const ButtonToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Esta parte asegura que el botón se sincroniza con localStorage incluso tras navegar
  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const storedTheme = localTheme || (window as any).__theme || 'dark';
    setTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    (window as any).__theme = next;
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
      } focus:ring-primary`}
    >
      <span
        className={`inline-block w-6 h-6 bg-white rounded-full shadow transform transition-transform ${
          theme === 'dark' ? 'translate-x-0' : 'translate-x-6'
        }`}
      >
        {theme === 'dark' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full p-1 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full p-1 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v2m0 14v2m8.66-10H20m-16 0H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l1.414 1.414M6.05 6.05L4.636 4.636"
            />
          </svg>
        )}
      </span>
    </button>
  );
};

export default ButtonToggle;
