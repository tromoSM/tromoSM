window.addEventListener('DOMContentLoaded',function(){
  document.querySelector(`[tromoSM="main-bg-inner-o"]`).addEventListener("canplaythrough",function(){
    document.querySelector(`[tromoSM="main-bg-inner-o"]`).style.display="flex"
    document.querySelector(`[tromoSM="main-bg-inner-o"]`).defaultPlaybackRate=0.8
    document.querySelector(`[tromoSM="main-bg-inner-o"]`).playbackRate=0.8
})
})
