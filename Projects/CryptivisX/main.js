window.addEventListener('DOMContentLoaded',function(){
 document.querySelectorAll(`[animation]`).forEach(ani=>{
     if(ani.getAttribute('animation')=='openD'){
        ani.style.opacity="0"
    }
     else{
        ani.style.transform="scale(0.7)"
        ani.style.opacity='0'
        ani.style.filter="blur(5px)"
        }
      })   
    document.querySelector(`header`).style.opacity="0"
    document.querySelector(`gradient`).style.opacity="0"

 window.addEventListener('load',function(){
    let imim$$anidata=0
    document.querySelectorAll(`[animation]`).forEach(ani=>{
        if(ani.getAttribute('animation')=='openD'){
            ani.style.animation=`open-glitch 1s ${imim$$anidata}s 1 forwards`
        }
        else{
            ani.style.animation=`open-secondary 0.5s ${imim$$anidata+0.5}s 1 forwards`
        }
        imim$$anidata+=0.2
    })
    document.querySelector(`gradient`).style.animation="open-gra 0.5s 1 forwards"
    document.querySelector(`header`).style.animation="open-head 0.5s 1.5s 1 forwards"
 })
})
