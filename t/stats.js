window.addEventListener('DOMContentLoaded',async function(){
    function sleep(dih){
        return new Promise(resolve=>setTimeout(resolve,dih))
    }
    let starcount=0
    let count=document.createElement('p')
    count.setAttribute('stats','stars')
    await fetch("https://api.github.com/users/tromoSM/repos").then(raw=>raw.json()).then(info=>{
        info.forEach(repo=>{
            starcount+=repo.stargazers_count
        })
    })
    document.querySelector('[tromosm="main-bg-outr"]').append(count)
    for(let star=0;star<=starcount;star++){
    count.innerText=`${star} Stars earned`  
    document.documentElement.style.setProperty('--progress-star',`${((star/starcount)*100)}%`)
    if(star<starcount-10){
    await sleep(10)
    }
    else{
    await sleep(70)
    }
    }
})
