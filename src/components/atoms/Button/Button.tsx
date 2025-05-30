// src/components/atoms/Button.tsx
import React, { useEffect, useState } from 'react';
import type { AnchorButtonProps, AtomButtonProps, ButtonProps } from './Button.types';

// --- Funciones de Codificación/Decodificación ---
// Inversión + Base64 para ofuscación simple
const encodeString = (str?: string): string => {
  if (!str) return '';
  const reversed = Array.from(str).reverse().join('');
  return btoa(reversed);
};

const decodeString = (encoded?: string): string => {
  if (!encoded) return '';
  try {
    const decoded = atob(encoded);
    return Array.from(decoded).reverse().join('');
  } catch {
    return '';
  }
};

const Button: React.FC<AtomButtonProps & { obfuscate?: boolean }> = ({
  children,
  variant = 'primary',
  className = '',
  rounded = 'rounded-lg',
  width = '',
  height = '',
  obfuscate = false,
  ...props
}) => {
  const baseClasses = 'inline-flex cursor-pointer items-center gap-2 px-4 py-2 shadow transition-colors';
  const variantClasses: Record<'primary' | 'secondary', string> = {
    primary:
      'bg-[color:var(--color4)] text-[color:var(--color2)] hover:bg-[color:var(--color6)] hover:text-[color:var(--neutral1)]',
    secondary:
      'bg-[color:var(--color7)] text-[color:var(--neutral1)] hover:bg-[color:var(--color2)]',
  };
  const classes = [baseClasses, rounded, width, height, variantClasses[variant], className]
    .filter(Boolean)
    .join(' ');

  const hasHref = 'href' in props && typeof props.href === 'string';
  const href = hasHref ? (props as AnchorButtonProps).href : undefined;
  const target = hasHref ? (props as AnchorButtonProps).target : undefined;

  // Estado para href ofuscado
  const [encodedHref, setEncodedHref] = useState<string>('');

  useEffect(() => {
    if (obfuscate && href) {
      setEncodedHref(encodeString(href));
    }
  }, [href, obfuscate]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (obfuscate && encodedHref) {
      e.preventDefault();
      const decoded = decodeString(encodedHref);
      if (decoded) {
        if (target === '_blank') window.open(decoded, '_blank');
        else window.location.href = decoded;
      }
    }
  };

  // Renders
  if (obfuscate && href) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={classes}
        data-obf-href={encodedHref}
        data-obf-target={target}
      >
        {children}
      </button>
    );
  }

  if (hasHref) {
    const { href: validHref, target: tgt, rel = 'noopener noreferrer', ...rest } = props as AnchorButtonProps;
    return (
      <a href={validHref} target={tgt} rel={rel} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { type = 'button', ...rest } = props as ButtonProps;
  return (
    <button type={type} className={classes} {...rest} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
