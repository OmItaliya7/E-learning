let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if (darkMode === 'enabled') {
   enableDarkMode();
}

toggleBtn.onclick = (e) => {
   darkMode = localStorage.getItem('dark-mode');
   if (darkMode === 'disabled') {
      enableDarkMode();
   } else {
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () => {
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () => {
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () => {
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () => {
   profile.classList.remove('active');
   search.classList.remove('active');

   if (window.innerWidth < 1200) {
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

const form = document.querySelector('.form');
const result = document.getElementById('result');
const input1=document.querySelector('#emailinform');
const input2=document.querySelector('#passinform');


form.addEventListener('submit', function (e) {
   e.preventDefault();

   const input = document.getElementById('emailinform').value;
   const pass = document.getElementById('passinform').value;
   if (pass.length == 0) {
      form.classList.add('formsubmit')
      result.style.display = 'block'
      result.innerHTML = "Please Fill Detail"
      setTimeout(() => {
         result.style.display = 'none'
         form.classList.remove('formsubmit');
      }, 3000);
      return false;
   }
   if (pass.value= "OM") {
      input1.value = '';
      input2.value='';
      form.classList.add('formsubmit')
      result.style.display = 'block'
      result.innerHTML = '<i class="fa-regular fa-square-check"></i>'
      setTimeout(() => {
         result.style.display = 'none',
            form.classList.remove('formsubmit');
      }, 3000);
      return true;
   } else {
      form.classList.add('formsubmit')
      result.style.display = 'block'
      result.innerHTML = "User name and password is wrong"
      setTimeout(() => {
         result.style.display = 'none',
            form.classList.remove('formsubmit');
      }, 3000);
      return false;
   }
})