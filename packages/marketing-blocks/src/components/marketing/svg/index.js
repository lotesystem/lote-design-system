import React from 'react';

// All Svgs used on the components
export const LogoDefault = props => {
  const { fill, circleFill, ...attributes } = props;
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" {...attributes}>
      <path
        d="M13.14 4.18c2.07-.33 3.63 2 2.46 4.41-1 2.38-4.69 4.85-8.81 3.76a8.19 8.19 0 01-6.63-6 5.26 5.26 0 01.12-2.9 3.19 3.19 0 00.3 2.38 2.51 2.51 0 002.5 1A18.54 18.54 0 007 6c1.65-.5 4-1.64 6.14-1.82z"
        fill={fill ? fill : 'currentColor'}
      />
      <circle
        cx={12.26}
        cy={7.72}
        r={2.07}
        fill={circleFill ? circleFill : '#fff'}
      />
    </svg>
  );
};

// Hero4 Svg
export const Hero4PolygonSvg = () => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
    >
      <path d="M50 0h50L50 100H0z" />
    </svg>
  );
};

// CountryFlag
export const CountryFlagCanada = props => {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
      <path d="M4 2.35h8v11.3H4z" fill="#fff" />
      <path
        d="M0 2.35h4v11.3H0zm12 0h4v11.3h-4zM5.2 7.81l-.31.11 1.44 1.27c.11.32 0 .42-.13.59l1.57-.2v1.58h.32L8 9.58l1.57.19a.74.74 0 01-.09-.64l1.42-1.21-.25-.09c-.21-.16.09-.76.13-1.15 0 0-.84.29-.89.14l-.22-.41-.77.84c-.08 0-.11 0-.13-.08l.35-1.76-.56.31a.1.1 0 01-.13 0l-.54-1.13-.55 1.12h-.12l-.54-.3L7 7.18c0 .06-.08.08-.15.05l-.74-.84c-.09.16-.16.41-.29.47A3.1 3.1 0 015 6.69c.09.35.4.93.21 1.12z"
        fill="#d52b1e"
      />
    </svg>
  );
};

// Testimonial
export const Caravan = props => {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
      <path
        fill="currentColor"
        d="M10.4 7.2a.4.4 0 10.4.4.4.4 0 00-.4-.4zm5.2 2.8h-1.2V6a4 4 0 00-4-4H1.6A1.6 1.6 0 000 3.6V10a1.6 1.6 0 001.6 1.6h.8a2.4 2.4 0 004.8 0h8.4a.4.4 0 00.4-.4v-.8a.4.4 0 00-.4-.4zM4.8 12.8A1.2 1.2 0 116 11.6a1.2 1.2 0 01-1.2 1.2zm1.6-6a.8.8 0 01-.8.8H2.4a.8.8 0 01-.8-.8V5.2a.8.8 0 01.8-.8h3.2a.8.8 0 01.8.8zm4.8 3.2H8V5.2a.8.8 0 01.8-.8h1.6a.8.8 0 01.8.8z"
      />
    </svg>
  );
};

export const QuoteRight1 = props => {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
      <path
        d="M12.44 7.11A3.55 3.55 0 019 2.86 3.49 3.49 0 019.93 1a3.57 3.57 0 013.88-.73 3.63 3.63 0 011.59 1.31 3.55 3.55 0 01.6 2q0 2-3.56 12.44h-1.77zm-8.88 0a3.55 3.55 0 113.55-3.55q0 2-3.55 12.44H1.78z"
        fill="currentColor"
      />
    </svg>
  );
};

export const QuoteRight2 = props => {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
      <path
        fill="currentColor"
        d="M12.49 9.5a3.57 3.57 0 01-2-.59 3.46 3.46 0 01-1.23-1.57 3.41 3.41 0 01-.2-2 3.51 3.51 0 012.75-2.75 3.59 3.59 0 012 .2 3.5 3.5 0 011.56 1.29A3.44 3.44 0 0116 6v.5a7 7 0 01-2 4.95 7 7 0 01-4.94 2v-2a5 5 0 001.91-.38A4.82 4.82 0 0012.54 10a5.37 5.37 0 00.5-.57 3.48 3.48 0 01-.55 0zm-9 0a3.55 3.55 0 01-1.95-.59A3.46 3.46 0 01.27 7.34a3.41 3.41 0 01-.2-2A3.51 3.51 0 011 3.53a3.57 3.57 0 011.79-1 3.57 3.57 0 012 .2A3.48 3.48 0 016.4 4.06 3.44 3.44 0 017 6v.5a7 7 0 01-2 4.95 7 7 0 01-4.94 2v-2a5 5 0 001.91-.38A4.92 4.92 0 003.55 10 5.27 5.27 0 004 9.46a3.27 3.27 0 01-.54 0z"
      />
    </svg>
  );
};
