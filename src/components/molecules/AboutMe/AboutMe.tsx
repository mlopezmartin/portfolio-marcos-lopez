// src/components/atoms/SobreMi/SobreMi.tsx
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section
      id="sobre-mi"
      className="bg-neutral-900 text-white font-mono rounded-lg p-6 overflow-auto"
      style={{ lineHeight: 1.5 }}
    >
      <pre>
        <code>
          <span className="text-green-400">sobreMi</span>
          <span className="text-white">(Jorge, Castaño) </span>
          <span className="text-white">{'{'}</span>
          {'\n\n'}
          <span className="pl-2">
            <span className="text-white">Soy un </span>
            <span className="text-yellow-300">Ingeniero FrontEnd Sénior</span>
            <span className="text-white"> – actualmente también </span>
            <span className="text-yellow-300">Tech Lead</span>
            <span className="text-white">.</span>
          </span>
          {'\n\n'}
          <span className="pl-2">
            <span className="text-white">
              He trabajado en múltiples proyectos
            </span>{' '}
            <span className="text-yellow-300">JavaScript</span>
            <span className="text-white">
              {' '}
              como en fintech, bancos, salud, automóvil & videojuegos; para
              start-ups y grandes empresas tecnológicas.
            </span>
          </span>
          {'\n\n'}
          <span className="pl-2">
            <span className="text-white">
              Ahora soy un entusiasta de{' '}
            </span>
            <span className="text-yellow-300">ReactJS & TypeScript</span>
            <span className="text-white">
              , pero también tengo experiencia profesional con{' '}
            </span>
            <span className="text-yellow-300">Angular (5↑)</span>
            <span className="text-white">, VueJS, React Native y Backbone.</span>
          </span>
          {'\n\n'}
          <span className="text-white">{'}'}</span>
        </code>
      </pre>
    </section>
  );
};

export default AboutMe;
