module.exports = {
  ...require('config/tailwind.js'),
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
  ],
}