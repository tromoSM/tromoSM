window.addEventListener("DOMContentLoaded",function(){
    document.querySelectorAll(`section`).forEach(I=>{
        I.dataset.url="true"
        I.id=`open-${I.getAttribute(`section`)}`
    })
    document.querySelectorAll(`tromoSM-card`).forEach($=>{
        $.setAttribute(`tromoSM`,`crd-00`)
        let imim$wr=document.createElement(`div`)
        label$ir=document.createElement('label-p')
        label$ir.innerHTML=`<?xml version="1.0" encoding="utf-8"?><svg width="10px" height="10px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffffff" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"/></svg>`
        imim$wr.setAttribute('tromoSM',`wr-tr-su`)
        let visual$1$cr=document.createElement(`div`)
        visual$1$cr.setAttribute(`tromoSM`,'visual-graphic-curr')
        let imim=document.createElement(`img`)
        imim.src=`Assets/card/bg-${$.getAttribute('title').replaceAll('.','-').replaceAll(" ","-").toLowerCase()}.png`
        imim$wr.appendChild(imim)
        $.appendChild(imim$wr)
        imim$wr.appendChild(label$ir)
        imim$wr.appendChild(visual$1$cr)
    })
    document.querySelectorAll(`[ScrollerX="press"]`).forEach(l=>{
        let scrollx=document.createElement(`div`)
        let scrollxa=document.createElement(`div`)
        l.appendChild(scrollx)
        l.appendChild(scrollxa)
        let scrollX$$int=document.createElement(`button`)
        let scrollXa$$int=document.createElement(`button`)
        scrollX$$int.innerHTML=`<?xml version="1.0" encoding="utf-8"?><svg width="15px" height="15px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffffff" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"/></svg>`
        scrollXa$$int.innerHTML=`<?xml version="1.0" encoding="utf-8"?><svg width="15px" height="15px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffffff" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"/></svg>`
        scrollx.setAttribute(`tromoSM`,`scrollX-agentA`)
        scrollxa.setAttribute(`tromoSM`,`scrollX-agentB`)
        scrollx.appendChild(scrollX$$int)
        scrollxa.appendChild(scrollXa$$int)
        scrollx.style.height=l.offsetHeight+"px";
        scrollxa.style.height=l.offsetHeight+"px";
        scrollX$$int.setAttribute('tromoSM',`scrollX-agentA-app`)
        scrollXa$$int.setAttribute('tromoSM',`scrollX-agentB-app`)
        scrollxa.style.display='none'
        scrollx.addEventListener(`click`,function(){
         l.scrollLeft+=300
        scrollxa.style.display='flex'
        })
        let gurtyo=0
        scrollxa.addEventListener(`click`,function(){
        if(gurtyo==0){
            l.scrollLeft-=300
            gurtyo+=1
        }
        else{
            l.scrollLeft-=5000
        }

        })
    })
})
