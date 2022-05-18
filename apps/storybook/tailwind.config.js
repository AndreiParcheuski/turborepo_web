module.exports = {
  ...require("config/tailwind.js"),
  content: [
    "stories/**/*.{js,ts,jsx,tsx}",
    "src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx}",
  ],
};
