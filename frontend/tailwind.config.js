/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bgClr : "",
            },
            screens: {
                xs: "425px",
                ms: "860px"
            },
        },
    },
    plugins: [],
};
