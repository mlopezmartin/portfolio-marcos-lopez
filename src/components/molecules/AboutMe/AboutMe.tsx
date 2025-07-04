import React from 'react';

type AboutMeProps = {
  paragraphs: string[];
};

const AboutMe: React.FC<AboutMeProps> = ({ paragraphs }) => {
  return (
    <section
      id="aboutme"
      className="bg-[color:var(--color2)] rounded-lg p-6 overflow-hidden  container mx-auto flex flex-col md:flex-row items-center md:justify-between px-6 max-w-screen-xl"
      style={{ lineHeight: 1.5 }}
    >
     
      <pre className="whitespace-pre-wrap break-words max-w-screen-xl">
        <code className="break-words">
          <span className="text-green-400">sobreMi</span>
          <span className="text-[color:var(--neutral1)]">(Marcos, Lopez) </span>
          <span className="text-[color:var(--neutral1)]">{'{'}</span>
          {'\n\n'}
          {paragraphs?.map((text, idx) => (
            <p key={idx} className="pl-2 inline text-[color:var(--neutral1)]">
              {text}
              {'\n\n'}
            </p>
          ))}
          <span className="text-[color:var(--neutral1)]">{'}'}</span>
        </code>
      </pre>

    </section>
  );
};

export default AboutMe;
