const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')
const dark_theme = 'dark'
const light_theme = 'light'
const toggle_dark = false
const toggle_light = true

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`
    image2.src = `img/undraw_feeling_proud_${color}.svg`
    image3.src = `img/undraw_conceptual_idea_${color}.svg`
}
// DarkMode Stlyes
function toggleDarkLightMode(isLight) {
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%' : 'rgb(0 0 0 / 50%'
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%' : 'rgb(255 255 255 / 50%'
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode'
    isLight ?     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    isLight ? imageMode(light_theme) : imageMode(dark_theme)
}

// Switch Theme Dynamically
function switchTheme(event) {
    // console.log(event.target.checked)
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', dark_theme)
        localStorage.setItem('theme', dark_theme)
        toggleDarkLightMode(toggle_dark)
    } else {
        document.documentElement.setAttribute('data-theme', light_theme)
        localStorage.setItem('theme', light_theme)
        toggleDarkLightMode(toggle_light)
    }
}
// Event Listeners
toggleSwitch.addEventListener('change', switchTheme)
// Check Local Storage for theme
const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    if (currentTheme === dark_theme) {
        toggleSwitch.checked = true
        toggleDarkLightMode(toggle_dark)
    }
}
    // console.log(currentTheme)