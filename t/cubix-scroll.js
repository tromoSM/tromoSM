window.addEventListener("DOMContentLoaded",function(){
    let yo
    window.addEventListener("scroll",function(){
    console.log('test') 
    document.querySelector(`[tromoSM="main-bg-inner-o"]`).playbackRate=2
    clearTimeout(yo)
    yo=setTimeout(()=>{console.log('gurt')
    document.querySelector(`[tromoSM="main-bg-inner-o"]`).playbackRate=0.8
    },150)
    })
})
