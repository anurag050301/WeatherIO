import React from 'react';
import { FaSun } from 'react-icons/fa';
const GradientSunIcon = () => (
  <svg width="5em" height="5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'orange', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'yellow', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <FaSun fill="url(#sunGradient)" />
  </svg>
);

export default GradientSunIcon;
