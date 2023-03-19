/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary_color: "#3187ED",
                input_color: " #F8F8F8",
            },
        },
    },
    plugins: [],
};
