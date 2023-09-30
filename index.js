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

   