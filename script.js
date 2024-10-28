let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;
const follower = document.querySelector('.follower');
const delay = 0.1;  // Adjust this value for more or less delay

document.addEventListener('mousemove', (event) => {
  mouseX = event.pageX;
  mouseY = event.pageY;
});
document.addEventListener('onClick',(event)=>{
    event.follower.classList.add('.click');
})

function animate() {
  // Gradually move the circle to the mouse position
  circleX += (mouseX - circleX) * delay;
  circleY += (mouseY - circleY) * delay;

  follower.style.left = `${circleX}px`;
  follower.style.top = `${circleY}px`;

  requestAnimationFrame(animate);  // Continue the animation
}

animate();  

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
function project(err){
    window.location.href = "https://github.com/1Kunalvats9";
}
function linkedin(err){
    window.location.href = "https://www.linkedin.com/in/kunal-vats-b67aa2309/";
}