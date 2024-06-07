let button = document.querySelectorAll('input[type="email"]');
console.log(button);
button.forEach(element => {
    element.addEventListener('focus', (event) => {
    event.target.style.width="410px";
    });
    
});
console.log("Done");
