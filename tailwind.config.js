/** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {
        // 色
        colors: {
          "main": "#427D9D",
          "main-dark": "#164863",
          "main-middle": "#9BBEC8",
          "main-light": "#DDF2FD",
          "main-bg": "#FFFEF8",
        },
        backgroundImage: {
          "star_off": "../assets/images/star_before.png",
          "star_on": "../assets/images/star_after.png",
        }
       }
     },
     plugins: [],
   }

