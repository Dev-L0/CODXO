
const skills = document.querySelectorAll(".skills");
const tools = document.querySelectorAll(".tools");
const skillsToolsToggle = document.querySelector(".skills-tools-toggle");
const toggleTheme = document.querySelector(".theme-toggle-inp");
const logo =  document.querySelector(".logo");
const h3 = document.querySelectorAll("h3");
const dark = document.getElementsByClassName("dark");
const light = document.getElementsByClassName("light");
const Heroimg = document.getElementsByClassName(".heroimg");




// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



const inActive = (el) => {
  el.classList.toggle("hidden");
};

const active = (el) => {
  el.classList.remove("hidden");
};

skillsToolsToggle.addEventListener("change", function () {
  if (skillsToolsToggle.checked) {
    skills.forEach((skill) => {
      inActive(skill);
    });
    tools.forEach((tool) => {
      active(tool);
    });
  } else {
    tools.forEach((tool) => {
      inActive(tool);
    });
    skills.forEach((skill) => {
      active(skill);
    });
  }
});

// Theme

toggleTheme.addEventListener("change", function switchTheme(){
  
if(toggleTheme.checked === true){
 document.body.classList.add('light');
 window.localStorage.setItem("theme", "light");
}
 else{
  document.body.classList.remove('light');
  window.localStorage.setItem("theme", "dark");
  
 }
  
})


const storedTheme = window.localStorage.getItem('theme');
if(storedTheme === 'light'){
  toggleTheme.checked = true;
  document.body.classList.add('light');
} else {
  toggleTheme.checked = false;
  document.body.classList.add('dark');
}


// Effect on Logo

document.addEventListener('DOMContentLoaded', (event) => {
  let arr = [];
function blink() {
  
  setInterval(() => {
    for(let i = 0; i < 3; i++) {
      const random = Math.floor(Math.random() * 256 + 1);
      arr.push(random);
    }
   
    let rgbColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
    logo.style.color= rgbColor;
  

     arr = []; 

  }, 3000); 
}
blink();
});