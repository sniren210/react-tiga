document.querySelector('body').addEventListener('mousemove',function(){
    var eye = document.querySelectorAll('.eye');

    eye.forEach(function(isi){
        let x = (isi.getBoundingClientRect().left) + (isi.clientWidth / 2);
        let y = (isi.getBoundingClientRect().top) + (isi.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x,event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        
        isi.style.transform = "rotate("+ rot + "deg)";
    });
})
