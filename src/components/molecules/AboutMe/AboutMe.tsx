import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section
      id="aboutme"
      className="bg-[color:var(--color2)] rounded-lg p-6 overflow-hidden"
      style={{ lineHeight: 1.5 }}
    >
      <pre className="whitespace-pre-wrap break-words">
        <code className="break-words">
          <span className="text-green-400">sobreMi</span>
          <span className="text-[color:var(--neutral1)]">(Marcos, Lopez) </span>
          <span className="text-[color:var(--neutral1)]">{'{'}</span>
          {'\n\n'}
          <p className="pl-2 inline">
            <span className="text-[color:var(--neutral1)]">Soy un </span>
            <span className="text-yellow-300">Ingeniero FrontEnd Sénior</span>
            <span className="text-[color:var(--neutral1)]"> – actualmente también </span>
            <span className="text-yellow-300">Tech Lead</span>
            <span className="text-[color:var(--neutral1)]">.</span>
          </p>
          {'\n\n'}
          <p className="pl-2 inline">
            <span className="text-[color:var(--neutral1)]">He trabajado en múltiples proyectos </span>
            <span className="text-yellow-300">JavaScript</span>
            <span className="text-[color:var(--neutral1)]">
              {' '}
              como en fintech, bancos, salud, automóvil & videojuegos; para start-ups y grandes empresas tecnológicas.
            </span>
          </p>
          {'\n\n'}
          <p className="pl-2 inline">
            <span className="text-[color:var(--neutral1)]">Ahora soy un entusiasta de </span>
            <span className="text-yellow-300">ReactJS & TypeScript</span>
            <span className="text-[color:var(--neutral1)]">, pero también tengo experiencia profesional con </span>
            <span className="text-yellow-300">Angular (5↑)</span>
            <span className="text-[color:var(--neutral1)]">, VueJS, React Native y Backbone.</span>
          </p>
          {'\n\n'}
          <span className="text-[color:var(--neutral1)]">{'}'}</span>
        </code>
      </pre>
    </section>
  );
};

export default AboutMe;
