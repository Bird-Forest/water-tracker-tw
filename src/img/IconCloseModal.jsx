import React from 'react';

const IconCloseModal = ({ color = '#407BFF', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 18L18 6M6 6L18 18"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
    />
  </svg>
);

export default IconCloseModal;
