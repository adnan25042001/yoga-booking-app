/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "425px",
                ms: "860px",
            },
            colors: {
                mainClr: "#FF5722",
                secondaryClr: "#F5F5F5",
            },
        },
    },
    plugins: [],
};
