'use strict'

//  TODO: maybe it's possible to apply a smoth transition between the themes

// white by default
const selectElement = document.querySelector('select'); 
let currentAppliedTheme = getMetaContent('tpose:theme'); 
const section = document.getElementById("display-theme");

selectElement.addEventListener('change', () => {
    // NOTE: chosenTheme can only be either 'dark' or 'white'
    const chosenTheme = selectElement.value;
    setTheme(chosenTheme);
});
    
function getMetaContent(name) {
    const tag = document.querySelector(`meta[name="${name}"]`);
    return tag ? tag.content : null;
    // theme can only be either dark or white
} 

function setTheme(theme) {
    // if theme == current theme in the meta tag, do nothing, just return
    currentAppliedTheme = getMetaContent('tpose:theme');
    if (theme === currentAppliedTheme) return;
    // else if theme == white, just remove the style that was placed with js AND set the meta tag
    // value to white
    if (theme === 'white') {
        document.querySelector(`meta[name="tpose:theme"]`).content = theme; 
        document.body.classList.remove("dark-theme-bg");
        section.classList.remove("dark-theme-bg");
        selectElement.classList.remove("dark-theme-bg");
    } else {
        document.querySelector(`meta[name="tpose:theme"]`).content = theme; 
        document.body.classList.add("dark-theme-bg");
        section.classList.add("dark-theme-bg");
        selectElement.classList.add("dark-theme-bg");
    }
}
