window.addEventListener("DOMContentLoaded",async function(){
    let DEAFAULTIMGPATH='https://raw.githubusercontent.com/tromoSM/tromoSM/refs/heads/main/Projects/EasyPycode/documentation/img/'
    let RAWIMGOUT='?r=t'
    document.querySelectorAll('[fill=imgsrc').forEach(yo=>{
        yo.src=DEAFAULTIMGPATH+yo.getAttribute('src')+RAWIMGOUT
    })

    document.querySelectorAll(`[click]`).forEach(yo=>{
        if(yo.getAttribute('click')=="innerhtml"){
            yo.setAttribute('click-cache',"./"+yo.innerHTML.replaceAll(" ","-").replaceAll("_","-").replaceAll('.','-'))
            yo.addEventListener('click',function(){
            window.open(yo.innerHTML.replaceAll(" ","-").replaceAll("_","-").replaceAll('.','-')+'.html','_self')
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
   function sleep(dih){
   return new Promise(resolve=>setTimeout(resolve,dih))
}
if(window.location.hash!==""){
await sleep(367)
  document.querySelector(`header`).setAttribute("hiddenT","40")
  document.querySelectorAll("group").forEach(dih=>{
    dih.style.animationDelay="0ms"
  })
  document.querySelectorAll(`[lite="title"]`).forEach(dih=>{
    dih.style.animationDelay="0ms"
  })
 document.querySelectorAll(`[main="title"]`).forEach(dih=>{
    dih.style.animationDelay="0ms"
  })
}
  window.addEventListener("scroll",function(){
    document.querySelector(`header`).removeAttribute("hiddenT")
  })
   document.querySelectorAll(`[lite="title"]`).forEach(obamahavedih=>{
    obamahavedih.id=obamahavedih.innerHTML.split(".")[1].split("(")[0].replaceAll('.',"").replaceAll("#","").replaceAll(" ","").toLowerCase()    
    obamahavedih.addEventListener("click",async function(){
    window.location.hash=obamahavedih.innerHTML.split(".")[1].split("(")[0].replaceAll('.',"").replaceAll("#","").replaceAll(" ","").toLowerCase()
    if(window.location.hash!==""){
    await sleep(567)
    document.querySelector(`header`).setAttribute("hiddenT","40")
    }
   })
 })

})
