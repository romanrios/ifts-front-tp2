const body = document.querySelector(".roman_body");
const article = document.querySelector(".roman_profile_card");
const randomColorBtn = document.getElementById("roman_random_color_btn");
const randomFontBtn = document.getElementById("roman_random_font_btn");

const palettes = [
    { bg: "#f5f5f5", text: "#1a1a1a", card: "#ffffff", accent: "#1e90ff" },
    { bg: "#e6f0ff", text: "#0b1a2b", card: "#ffffff", accent: "#0047ab" },
    { bg: "#eafaf1", text: "#014421", card: "#d4f7dc", accent: "#008000" },
    { bg: "#fef8e7", text: "#4b3621", card: "#fff4d1", accent: "#d2691e" },
    { bg: "#0d0d0d", text: "#e6e6e6", card: "#1a1a1a", accent: "#ff4500" },
    { bg: "#0a192f", text: "#dff6ff", card: "#112240", accent: "#f0a500" },
    { bg: "#121212", text: "#e0e0e0", card: "#1e1e1e", accent: "#7a72ffff" },
    { bg: "#1a1a1a", text: "#f5f5f5", card: "#2c2c2c", accent: "#00bfff" }
];

const fonts = [
    { name: "Montserrat", css: "'Montserrat', sans-serif" },
    { name: "Roboto", css: "'Roboto', sans-serif" },
    { name: "Lato", css: "'Lato', sans-serif" },
    { name: "Poppins", css: "'Poppins', sans-serif" },
    { name: "Merriweather", css: "'Merriweather', serif" },
    { name: "Source Sans Pro", css: "'Source Sans Pro', sans-serif" },
    { name: "Nunito", css: "'Nunito', sans-serif" },
    { name: "Open Sans", css: "'Open Sans', sans-serif" }
];

let currentPalette = 0;
let currentFont = 0;

function applyPalette(index) {
    const palette = palettes[index];
    body.style.background = palette.bg;
    body.style.color = palette.text;
    article.style.background = palette.card;

    const buttons = document.querySelectorAll(".roman_theme_btn");
    buttons.forEach(btn => {
        btn.style.background = palette.accent;
        btn.style.color = "#fff";
        btn.style.fontFamily = fonts[currentFont].css;
    });

    const titles = document.querySelectorAll(".roman_profile_card h3, .roman_profile_name");
    titles.forEach(el => el.style.color = palette.accent);
}

function applyFont(index) {
    const font = fonts[index];
    body.style.fontFamily = font.css;
    document.querySelectorAll(".roman_theme_btn").forEach(btn => btn.style.fontFamily = font.css);
}

randomColorBtn.addEventListener("click", () => {
    currentPalette = (currentPalette + 1) % palettes.length;
    applyPalette(currentPalette);
});

randomFontBtn.addEventListener("click", () => {
    currentFont = (currentFont + 1) % fonts.length;
    applyFont(currentFont);
});

applyPalette(0);
applyFont(0);
