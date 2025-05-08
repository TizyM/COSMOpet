// Cambio lingua
document.getElementById('language-toggle').addEventListener('click', () => {
    const lang = document.documentElement.lang === "it" ? "en" : "it";
    document.documentElement.lang = lang;
    alert(`Lingua cambiata a ${lang === 'it' ? 'Italiano' : 'Inglese'}`);
});
