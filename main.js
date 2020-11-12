const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i = 1;i <= 5;i++){
    const newImg = document.createElement('img');
    newImg.setAttribute('src','images/pic'+i+'.jpg');
    thumbBar.appendChild(newImg);
    newImg.onclick = function(e){
        displayedImage.src=e.target.src;
    }
}

btn.onclick = function(){
    const btncls = btn.getAttribute('class');
    if(btncls === 'dark'){
        btn.setAttribute('class','light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.setAttribute('class','dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

/* Wiring up the Darken/Lighten button */
