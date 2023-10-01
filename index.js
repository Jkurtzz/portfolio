function toggleMode() {
     let checkbox = document.getElementsByClassName('slider')[0];
     let body = document.body;
     checkbox.classList.toggle("dark_mode");
     body.classList.toggle("dark_mode");
     const isDarkMode = checkbox.classList.contains("dark_mode");
     localStorage.setItem('dark_mode', isDarkMode);
}

function getMode() {
     const isDarkMode = localStorage.getItem('dark_mode') === 'true';
     let checkbox = document.getElementsByClassName('slider')[0];
     let body = document.body;

     if (isDarkMode) {
          checkbox.classList.add("dark_mode");
          body.classList.add("dark_mode");
     }
}

// opens the navBar on mobile devices
function openNav() {
     let navBarTransition = document.getElementsByClassName("nav")[0];
     navBarTransition.classList.toggle("openMobile");
     let navBarLst = document.getElementsByClassName("navBtn");
     for (i = 0; i < navBarLst.length; i++){
          navBarLst[i].classList.toggle("openMobile");
     }
     
}