window.addEventListener(`DOMContentLoaded`,function(){
    document.querySelectorAll(`[act-tr]`).forEach(sc=>{
      sc.addEventListener(`click`,function(){
        if(sc.getAttribute(`act-tr`).slice(-2)=="op"){
            if(sc.getAttribute(`act-tr`).slice(0,-3)=="linkedin"){
            window.open(`https://`+sc.getAttribute("act-tr").slice(0,-3)+`.com/in/tromosm`,'_self')
            }
            else if(sc.getAttribute(`act-tr`).slice(0,-3)=="discord"){
            window.open(`https://discord.com/users/1416297449668214817`,'_self')
            }
            else{
            window.open(`https://`+sc.getAttribute("act-tr").slice(0,-3)+`.com/tromosm`,'_self')
            console.log(sc.getAttribute("act-tr").slice(0,-3)+`.com`)
        }
        }
      })
    })
})
