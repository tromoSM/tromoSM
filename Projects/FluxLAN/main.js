window.addEventListener('DOMContentLoaded',function(){
    SITE_LAST_UPDATED='26/06/29'
    SITE_VER='v1'
    SITE_REL=1

    window.FluxLAN_Site=`FluxLAN Site ${SITE_VER}/${SITE_REL} (${SITE_LAST_UPDATED})`
    let select=document.querySelector('#os')
    let selecttype=document.querySelector('#reltype').value
    let warn=document.querySelector('warn').querySelectorAll('p')
    let instatype=document.querySelector('#instatype')
    let os='windows'
    let type='perf'

    function sleep(dih){
        return new Promise(resolve=>setTimeout(resolve,dih))
    }
    function refreshlitenon(){
    console.log('refresh shi')
    let type=''
    let typeW=''
        if(document.querySelector('#reltype').value=='Lite'){
            type='Lite'
            typeW='-Lite'
            console.log('lite inst')
        }
        else if(document.querySelector('#reltype').value.startsWith('Default')){
            type=''
            typeW=''
            console.log('perf inst')
        }
        document.querySelectorAll('[dynamictext]').forEach(ins=>{
            try{
             if(ins.querySelector('code')){
               if(!ins.querySelector('code').hasAttribute('instructionsindexed')){
                  ins.querySelector('code').setAttribute('instructionsindexed',ins.querySelector('code').innerText)
                  ins.querySelector('code').innerText=ins.querySelector('code').innerText.replaceAll('{-}',typeW).replaceAll('{}'.type)
               } 
               else{
                ins.querySelector('code').innerText=ins.querySelector('code').getAttribute('instructionsindexed').replaceAll('{-}',typeW).replaceAll('{}'.type)
               }
               if(!ins.querySelector('copy').hasAttribute('instructionsindexed')){
                 ins.querySelector('copy').setAttribute('instructionsindexed',ins.querySelector('copy').getAttribute('copy'))
                 ins.querySelector('copy').setAttribute('copy',ins.querySelector('copy').getAttribute('copy').replaceAll('{-}',typeW).replaceAll('{}',type))
               }
               else{
                 ins.querySelector('copy').setAttribute('copy',ins.querySelector('copy').getAttribute('instructionsindexed').replaceAll('{-}',typeW).replaceAll('{}',type))
               }
            }}
            catch(e){console.log(e)}
        })
    }
    function refreshinstr(){
        document.querySelectorAll('instruction').forEach(async ins=>{
            if(ins.getAttribute('val')!=instatype.value){
                document.querySelector('instructionpanel').setAttribute('closing','')
                await sleep(150)
                ins.setAttribute('hidden','')
                document.querySelector('instructionpanel')?.removeAttribute('closing')
            }
            else{
                await sleep(150)
                ins?.removeAttribute('hidden')
            }
        })
    }
    function refreshinsta(){
        
        if(select.value=='MacOS'){
            let usingbrew=false;
            document.querySelector('[info=macos]')?.removeAttribute('hidden')
            document.querySelector('[info=macos]').innerHTML=`Install via homebrew`
            if(!document.querySelector('[info=macos]').hasAttribute('brewindexed')){
             document.querySelector('[info=macos]').addEventListener('click',function(){
                refreshinstr()
                instatype.value="Homebrew" 
                console.log('brw')
                document.querySelector('[info=macos]').setAttribute('brewindexed','')
                usingbrew=true
             })
            }
            if(!usingbrew){
            instatype.value='Manual (MacOS)'
            }
        }
        else if(select.value=='Windows'){
            instatype.value='Installer (Windows)'
        }
        else if(select.value=='Ubuntu'){
            instatype.value='Ubuntu'
        }
        else if(select.value.startsWith('Other')){
            instatype.value='Manual (git)'
        }
        if(select.value!='MacOS'){
            document.querySelector('[info=macos]').setAttribute('hidden','')
        }
    }

    function refreshtext(){
        if(select.value=='Other linux distros'){
           document.querySelector('[downloadb]').setAttribute('disabled','')
           if(!document.querySelector('warn').querySelector('p')){
            let war=document.createElement('p')
            war.innerText='Other Linux distributions are supported through the source code, but no official application is provided.'
            document.querySelector('warn').append(war)
           }
        }
        else if(select.value=='Windows'){
            document.querySelector('[downloadb]')?.removeAttribute('disabled','')
           document.querySelector('[downloadb]').innerHTML='Download installer'
           warn.forEach(war=>war?.remove())
        }
        else{
            document.querySelector('[downloadb]')?.removeAttribute('disabled','')
           document.querySelector('[downloadb]').innerHTML='Download'
           warn.forEach(war=>war?.remove())
        }
        if(selecttype.toLowerCase().includes('perf')){
            type='perf'
        }
        else{
            type='lite'
        }

    }
    refreshtext()
    async function refreshdownload(){
         if(select.value.toLowerCase()!='macos'){
          os=await select.value.trim().toLowerCase()
         }
         else{
            os='mac'
         }
         document.querySelector('[downloadb]').closest('a').target='_blank'
         document.querySelector('[downloadb]').closest('a').href=`https://tromosm.github.io/redirects/?key=download_fluxlan&os=${os}&type=${type}&closeafter=true`
    }
    refreshdownload()
    refreshinstr()
    select.addEventListener('change',(()=>{refreshdownload();refreshtext();refreshinsta();refreshinstr();refreshlitenon()}))
    document.querySelector('#reltype').addEventListener('change',(()=>{refreshtext();refreshdownload();refreshlitenon()}))
    instatype.addEventListener('change',refreshinstr)
    instatype.addEventListener('click',refreshinstr)

    
    document.querySelectorAll('copy').forEach(copy=>{
        if(!copy.hasAttribute('copyindexed')){
         let ic=document.createElement('img')
         copy.append(ic)
         ic.src='Assets/copy.svg'
         copy.setAttribute('copyindexed','')
         copy.addEventListener('click',async function(){
            try{
                navigator.clipboard.writeText(copy.getAttribute('copy'))
                ic.setAttribute('hiddenA','')
                let icc=document.createElement('img')
                icc.src='Assets/check.svg'
                copy.append(icc)
                await sleep(1000)
                icc.setAttribute('hiddenA','')
                ic.removeAttribute('hiddenA')
                await sleep(300)
                icc.remove()
            }
            catch(er){
                alert('failed to copy text')
                console.error(er)
            }
         })
     }
    })
    refreshlitenon()
})