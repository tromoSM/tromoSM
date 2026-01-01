window.addEventListener("DOMContentLoaded",function(){
    let DEAFAULTIMGPATH='https://raw.githubusercontent.com/tromoSM/tromoSM/refs/heads/main/Projects/EasyPycode/documentation/img/'
    let RAWIMGOUT='?r=t'
    document.querySelectorAll('[fill=imgsrc').forEach(yo=>{
        yo.src=DEAFAULTIMGPATH+yo.getAttribute('src')+RAWIMGOUT
    })

    function sleep(dih){
   return new Promise(resolve=>setTimeout(resolve,dih))
}
    document.querySelectorAll(`[click]`).forEach(yo=>{
        if(yo.getAttribute('click')=="innerhtml"){
            yo.setAttribute('click-cache',"./"+yo.innerHTML.replaceAll(" ","-").replaceAll("_","-").replaceAll('.','-'))
            yo.addEventListener('click',function(){
            window.open(yo.innerHTML.toLowerCase().replaceAll(" ","-").replaceAll("_","-").replaceAll('.','-'),'_self')
            })
        }
        yo.addEventListener('mouseenter',function(){
            document.querySelector('href').style.display="block"
            document.querySelector('href').innerHTML=yo.getAttribute('click-cache')
        })
        yo.addEventListener('mouseleave',async function(){
            document.querySelector('href').style.display="none"
        })
    })
    let io$$=0.1
    document.querySelectorAll(`group`).forEach(yo=>{
     yo.style.animationDelay=`${io$$}s`
     io$$+=0.1
    })
    let io$$$=50
    let io$$$$=1
    document.querySelectorAll(`[lite=title]`).forEach(yo=>{
     yo.style.animationDelay=`${io$$$}ms`
     io$$$+=100
     yo.innerHTML=io$$$$+". "+yo.innerHTML
     io$$$$++
    })
    document.querySelectorAll('lang').forEach(yo=>{
       if(yo.getAttribute('no')!=='ex'){
         yo.innerHTML="Example - "+yo.innerHTML
       }
    })
    
})
