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
        },
        animation: {
          "slide-in-bottom":
            "slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
          "slide-out-buttom":
            "slide-out-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        },
        keyframes: {
          "slide-in-bottom": {
            "0%": {
              transform: "translateY(20px)",
              opacity: "0",
            },
            to: {
              transform: "translateY(0)",
              opacity: "1",
            }
          }
        }
       }
     },
     plugins: [],
   }

