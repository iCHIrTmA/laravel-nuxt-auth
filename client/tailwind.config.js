/** @type {import('tailwindcss').Config} */
import formsPlugin from "@tailwindcss/forms"

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue"
  ],
  theme: {
    extend: {},
  },
  plugins: [formsPlugin]
}
