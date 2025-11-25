window.addEventListener("DOMContentLoaded",function(){
    document.querySelectorAll(`section`).forEach(I=>{
        I.dataset.url="true"
        I.id=`open-${I.getAttribute(`section`)}`
    })
    document.querySelectorAll(`tromoSM-card`).forEach($=>{
        $.setAttribute(`tromoSM`,`crd-00`)
        imim=document.createElement(`img`)
        imim.src=`Assets/card/bg-${$.getAttribute('title').replaceAll('.','-').replaceAll(" ","-").toLowerCase()}.png`
        $.appendChild(imim)
    })
})
