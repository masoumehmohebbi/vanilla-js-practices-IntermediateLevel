let image = document.querySelector('img'),
    imgFlag = false  // display == none

window.addEventListener('keydown',()=>{
    setInterval(() => {
        if (imgFlag) {         // true  (if display == block)
            image.style.display="none"
            imgFlag = false
        }else{
            image.style.display="block"
            imgFlag = true
        }   
    }, 1000);

})