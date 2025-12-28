/** @type {import('tailwindcss').Config} */
export const content = [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
    extend: {},
};
export const plugins = [
    require('tailwind-scrollbar'), // ✅ Add this only if you're using the scrollbar plugin
];


