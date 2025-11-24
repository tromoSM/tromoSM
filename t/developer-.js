window.addEventListener(`DOMContentLoaded`,function(){
  let full$dv=[]
    window.addEventListener('keydown',function(dev){
        full$dv.push(dev.key)
        console.log(full$dv)
     if(full$dv.join()==`1,1,1`){
      document.querySelector(`[tromoSM="main-bg-inner-o"]`).pause()
      full$dv=[]
     }
     else if(full$dv.join()=="1,1,2"){
      document.querySelector(`[tromoSM="main-bg-inner-o"]`).play()
      full$dv=[]
     }
     else if(full$dv.join()=="1,2,3"){
    document.querySelector(`[tromoSM="main-bg-inner-o"]`).playbackRate=2
      full$dv=[]
     }
     
 })
})
