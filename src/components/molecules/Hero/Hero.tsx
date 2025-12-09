// src/components/organisms/Hero.tsx
import React from 'react';
import type { HeroProps } from './Hero.types';
import Button from '@/components/atoms/Button/Button';


const Hero: React.FC<HeroProps> = ({
  name,
  subtitle,
  email,
  avatarUrl,
  socialLinks,
}) => {
  return (
    <section className="bg-background text-text py-16 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between px-6 max-w-screen-xl">
        {/* Texto principal */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold mb-2 text-primary">{name}</h1>
          <p className="text-xl mb-4 opacity-80">{subtitle}</p>
          <a
            href={`mailto:${email}`}
            className="block mb-6 text-base hover:text-primary transition-colors"
          >
            {email}
          </a>
          {/* Botones de acciones */}
          <div className="flex flex-wrap gap-4">
            {socialLinks?.map(link => (
            <Button
                key={link.href}
                href={link.href}
                rounded="rounded-full"
                target={link.download ? undefined : "_blank"}
                rel={link.download ? undefined : "noopener noreferrer"}
                variant={link.variant}
                className="font-medium"
                download={link.download}
            >
                {link.icon}
                {link.label}
            </Button>
            ))}
          </div>
        </div>
        {/* Avatar */}
        <div className="mt-8 md:mt-0">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={`${name} avatar`}
              className="w-60 h-60 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg"
            />
          ) : (
            <div className="w-60 h-60 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full bg-gray-700"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
