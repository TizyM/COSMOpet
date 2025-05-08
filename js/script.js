// Cambio lingua
document.getElementById('language-toggle').addEventListener('click', () => {
    const lang = document.documentElement.lang === "it" ? "en" : "it";
    document.documentElement.lang = lang;

    // Cambia i testi della pagina
    const translations = {
        "it": {
            "title": "Benvenuto nel mondo di CosmoPet!",
            "description": "Un’avventura spaziale educativa per bambini e insegnanti.",
            "quiz": "🎮 Quiz & Giochi",
            "chatbot": "💬 Chatbot",
            "articles": "📜 Articoli Scientifici"
        },
        "en": {
            "title": "Welcome to the world of CosmoPet!",
            "description": "An educational space adventure for children and teachers.",
            "quiz": "🎮 Quiz & Games",
            "chatbot": "💬 Chatbot",
            "articles": "📜 Scientific Articles"
        }
    };

    document.querySelector(".hero h1").textContent = translations[lang]["title"];
    document.querySelector(".hero p").textContent = translations[lang]["description"];
    document.querySelector("nav ul li:nth-child(1) a").textContent = translations[lang]["quiz"];
    document.querySelector("nav ul li:nth-child(2) a").textContent = translations[lang]["chatbot"];
    document.querySelector("nav ul li:nth-child(3) a").textContent = translations[lang]["articles"];
    
    alert(`Lingua cambiata a ${lang === 'it' ? 'Italiano' : 'Inglese'}`);
});
