window.addEventListener(`DOMContentLoaded`,function(){    
document.querySelectorAll(`[tromoSM=wr-tr-su]`).forEach(waltuh=>{
 waltuh.addEventListener('mousemove',function(fuh){
    rcs=waltuh.getBoundingClientRect()
    lst=fuh.clientX-rcs.left
    waltuh.querySelector(`[tromoSM=visual-graphic-curr]`).style.transform=`translateX(${lst/2}px)`
    if(lst>=130){
        waltuh.setAttribute(`tromoSM-ext`,'after1-hv')
        console.log('after')
    }
    else{
        waltuh.setAttribute(`tromoSM-ext`,'before1-hv')
        console.log('before')
    }
})
  waltuh.addEventListener("click",function(){
        waltuh.setAttribute(`tromoSM-ext`,'after1-hv')
        waltuh.setAttribute("full",'true')
    })
  waltuh.addEventListener("mouseleave",function(){
        waltuh.setAttribute(`tromoSM-ext`,'none1-hv')
        waltuh.setAttribute("full",'fuh')
        console.log('none')
    })
})
const temp$$main$$pointer=document.querySelector(`pointer`)
let MoX=0
let MoY=0
let POSx=0
let POSy=0
let POSXX=0
let POSYY=0
let temp$$ani$$esp=0.07
let vSX=0
let vSY=0
let sQU=0
let temp$$pmo=0
let temo$$dir=0
let sX=1+temp$$pmo/100
let sY=1-temp$$pmo/200
document.querySelector(`[tromosm="main-bg-outr"]`).addEventListener('mousemove',function(dih){
    MoX=dih.clientX
    MoY=dih.clientY
})
document.querySelector(`[tromosm="main-bg-outr"]`).addEventListener('touchmove',function(dih){
    MoX=dih.touches[0].clientX
    MoY=dih.touches[0].clientY
},{passive:true})

function temp$$func$$prc(){
    POSx+=(MoX-POSx)*temp$$ani$$esp
    POSy+=(MoY-POSy)*temp$$ani$$esp
    vSX=POSx-POSXX
    vSY=POSy-POSYY
    sQU=Math.sqrt(vSX*vSX+vSY*vSY)
    temp$$pmo=Math.min(sQU*6,200)
    sX=1+temp$$pmo/40
    sY=1-temp$$pmo/80
    temo$$dir=Math.atan2(vSY,vSX)*180/Math.PI
    temp$$main$$pointer.style.transform=`translate(${POSx-temp$$main$$pointer.offsetWidth/2}px,${POSy-temp$$main$$pointer.offsetHeight/2}px)
                       rotate(${temo$$dir}deg) scale(${sX},${sY})`
    POSXX=POSx
    POSYY=POSy
    requestAnimationFrame(temp$$func$$prc)
}
temp$$func$$prc()
/*insp stackoverflow*/
document.querySelector(`[tromosm="main-bg-outr"]`).addEventListener("mousemove",function(dihdih){
MoX=dihdih.clientX
MoY=dihdih.clientY
})
function temp$$func$$prc(){
    POSx+=(MoX-POSx)*temp$$ani$$esp
    POSy+=(MoY-POSy)*temp$$ani$$esp
    temp$$main$$pointer.style.transform=`translate(${POSx-temp$$main$$pointer.offsetWidth/2}px,${POSy-temp$$main$$pointer.offsetHeight/2}px)`
    requestAnimationFrame(temp$$func$$prc)
}
temp$$func$$prc()
})
