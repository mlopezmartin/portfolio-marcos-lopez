import React, { useEffect, useState } from 'react';
import type { NavItem } from './Header.types';
import ButtonToggle from '@/components/atoms/ButtonToggle/ButtonToggle';

const navItems: NavItem[] = [
  { label: 'Sobre Mi', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Habilidades Full Stack', href: '#fullstack' },
  { label: 'Otras Habilidades', href: '#otras-habilidades' },
  { label: 'Otras Herramientas', href: '#otras-herramientas' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'CV', href: '/cv.pdf' },
];
const Header: React.FC = () => (
  <header className="bg-background text-text">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <h1 className="text-2xl font-bold text-primary">Marcos Lopez</h1>
      <nav className="flex items-center space-x-6">
        <ul className="flex space-x-6">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
       <ButtonToggle />
      </nav>
    </div>
  </header>
);

export default Header;