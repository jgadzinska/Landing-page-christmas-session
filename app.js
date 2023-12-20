const navbar = document.querySelector(".header .navbar");

  //MENU AND CLOSE
document.querySelector("#menu").onclick = () => {
    navbar.classList.add("active");
};

document.querySelector("#close").onclick = () => {
    navbar.classList.remove("active");
};



   //SNOW EFFECT
for (let i=0; i < 100; i++) {
    let snow = document.createElement('div');
    
    let po = Math.floor(Math.random()*100);
    let d = Math.floor(Math.random()*10000);

    let snowBlur = Math.floor(Math.random()*13);

    snow.style.left = po + '%';
    snow.style.animationDuration = d + 2000 + 'ms';
    snow.style.filter = 'blur(${snowBlur+2}px)';

    snow.id = 'snow';

    document.body.appendChild(snow); 
};