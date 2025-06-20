'use strict'

//  TODO: how to style the html select element

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
        document.body.style.background = "";
        section.style.background = "";
        section.style.color = "";
        section.style.borderColor = "";
    } else {
        document.querySelector(`meta[name="tpose:theme"]`).content = theme; 
        document.body.style.background = "var(--dark-bg-color)";
        section.style.background = "var(--dark-fg-color)";
        section.style.color = "var(--dark-txt-color)";
        section.style.borderColor = "var(--dark-border-color)";
    }
}
