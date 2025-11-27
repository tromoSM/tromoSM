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
    document.querySelectorAll(`tromoSM-card`).forEach(o=>{
        o.addEventListener(`click`,function(){
            let main$Wrap=document.createElement(`div`)
            main$Wrap.setAttribute('tromoSM',`main-wra-allk0`)
            let main$div=document.createElement(`div`)
            main$div.setAttribute(`tromoSM`,'main-notiff-wr-op')
            main$Wrap.appendChild(main$div)
            aside$lft=document.createElement(`div`)
            aside$lft.setAttribute('tromoSM','aside-proj-di')
            aside$rgt=document.createElement(`div`)
            aside$rgt.setAttribute('tromoSM','aside-proj-lf')
            main$div.appendChild(aside$lft)
            main$div.appendChild(aside$rgt)
            imim$bann=document.createElement('img')
            aside$lft.appendChild(imim$bann)
            imim$bann.src=`Assets/card/bg-${o.getAttribute('title').replaceAll('.','-').replaceAll(" ","-").toLowerCase()}.png`
            imim$bann.setAttribute('tromoSM','notif-proj-bann-im')
            let main$title=document.createElement(`p`)
            let inner$title=o.getAttribute(`title`)
            let main$des=document.createElement(`p`)
            asideL$app$info=document.createElement(`div`)
            asideL$app$info.setAttribute(`tromoSM`,`aside-app-info-board`)
            asideL$app$star=document.createElement('button')
            aside$lft.appendChild(asideL$app$info)
            asideL$app$star.setAttribute('tromoSM',`aside-info-bttn`)
            fetch(`https://api.github.com/repos/tromoSM/${o.getAttribute('title').replaceAll(" ","-").replaceAll('$','s-').toLowerCase()}`).then(yo => yo.json()).then(dih =>{
             console.log(dih.description)
             console.log(dih.fork)
             console.log(dih.license.key)
             console.log(dih.clone_url)
            console.log(dih.url)
            main$des.innerHTML=dih.description
            asideL$app$star.innerHTML=`
            <?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="10px" height="10px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>start-favorite</title><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-154.000000, -881.000000)" fill="#ffffffff"><path d="M186,893.244 L174.962,891.56 L170,881 L165.038,891.56 L154,893.244 L161.985,901.42 L160.095,913 L170,907.53 L179.905,913 L178.015,901.42 L186,893.244" id="start-favorite" sketch:type="MSShapeGroup"></path></g></g></svg>${dih.stargazers_count}`
            })
            asideL$app$info.appendChild(asideL$app$star)
            main$title.innerHTML=inner$title
            main$title.setAttribute(`tromoSM`,'main-t-proj-notiff')
            main$des.setAttribute(`tromoSM`,'main-desc-sec1')
            aside$lft.appendChild(main$title)            
            aside$lft.appendChild(main$des)            
            document.body.appendChild(main$Wrap)      
        })
    })
})
