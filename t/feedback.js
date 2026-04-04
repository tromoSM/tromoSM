window.addEventListener('DOMContentLoaded',function(){
    const SUPABASE_URL="https://unalxdcdbgrqvveetxsn.supabase.co"
    const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuYWx4ZGNkYmdycXZ2ZWV0eHNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2MDkyNTUsImV4cCI6MjA4NjE4NTI1NX0.8o5IZ_bs-8HaX70sP-e5_OUQfm5jyzXP6XMII1BoGSw"
    window.supabase=supabase.createClient(
     SUPABASE_URL,
     SUPABASE_ANON_KEY
    )
    let mainSendELquery='temp$doc$$lab2'
    if(!localStorage.getItem("lastcl-form-style")){
        localStorage.setItem('lastcl-form-style','Send Feedback')
    }
    document.querySelector(`[tromoSM="feedback"]`).addEventListener('click',function(){
            let amain$Wrap=document.createElement(`div`)
            let amain$cl=document.createElement(`div`)
            amain$Wrap.appendChild(amain$cl)
            amain$cl.setAttribute(`tromoSM`,'close$repo')
            amain$cl.addEventListener(`click`,function(){
                amain$Wrap.remove()
            })
            amobile$cl=document.createElement(`button`)
            amobile$cl.setAttribute(`tromoSM`,`mob-close-rep`)
            amobile$cl.setAttribute(`on-mob`,``)
            amobile$cl.innerText="\u00D7"
            amobile$cl.addEventListener(`click`,function(){
                amain$Wrap.remove()
            })
            amain$Wrap.appendChild(amobile$cl)
            amain$Wrap.setAttribute('tromoSM',`main-wra-allk0`)
            let amain$div=document.createElement(`div`)
            amain$div.setAttribute(`tromoSM`,'main-notiff-wr-op')
            amain$Wrap.appendChild(amain$div)
            let aside$lft=document.createElement(`div`)
            let main$$title$$form=document.createElement('h2')
            if(localStorage.getItem('lastcl-form-style')){
               main$$title$$form.innerText=localStorage.getItem('lastcl-form-style') 
               if(document.querySelector(`[tromosm="infoRefrTABcl$$"]`)){
               document.querySelector(`[tromosm="infoRefrTABcl$$"]`).innerText=localStorage.getItem('lastcl-form-style') 
               }
            }

            else{
                main$$title$$form.innerText='Send Feedback'
            }

            $$flexWrapTYPE=document.createElement("flex")
            temp$doc$$lab=document.createElement('label')
            temp$doc$$in=document.createElement('input')
            temp$doc$$bg=document.createElement('bg')
            temp$doc$$nam=document.createElement('span')
            temp$doc$$nam.innerText='Feedback'
            temp$doc$$in.setAttribute('name','yothatscrazy')
            temp$doc$$in.setAttribute('type','radio')
            temp$doc$$in.setAttribute('actionA','feed')

            temp$doc$$lab.appendChild(temp$doc$$in)            
            temp$doc$$lab.appendChild(temp$doc$$bg)            
            temp$doc$$lab.appendChild(temp$doc$$nam)            

            $$flexWrapTYPE2=document.createElement("flex")
            temp$doc$$lab2=document.createElement('label')
            temp$doc$$in2=document.createElement('input')
            temp$doc$$bg2=document.createElement('bg')
            temp$doc$$nam2=document.createElement('span')
            temp$doc$$in2.setAttribute('type','radio')
            temp$doc$$in2.setAttribute('name','yothatscrazy')
            temp$doc$$in2.setAttribute('actionA','req')
            temp$doc$$nam2.innerText='Request features'
            temp$doc$$lab2.appendChild(temp$doc$$in2)            
            temp$doc$$lab2.appendChild(temp$doc$$bg2)            
            temp$doc$$lab2.appendChild(temp$doc$$nam2)            

            if(localStorage.getItem('lastcl-form-style')=='Send Feedback'){
                temp$doc$$in.setAttribute('checked','')
            }
            else{
                temp$doc$$in2.setAttribute('checked','')
            }
            
            aside$lft.setAttribute('width','full')
            aside$lft.appendChild(main$$title$$form)
            aside$lft.setAttribute('tromoSM','aside-proj-di')
            
            $$flexWrapTYPE.appendChild(temp$doc$$lab)
            $$flexWrapTYPE.appendChild(temp$doc$$lab2)
            aside$lft.appendChild($$flexWrapTYPE)

            let alloptfillTXT=['titleS','project nameM','descriptionS','your nameM','emailM','*creditsM','*acceptS']
            let fleXAV=document.createElement('flexC')
            let intypetemp
            let cap='500'
            let radioC=0
            let radioContLabin=[`I'd like to receive credit for this if it is chosen for use.`,'I understand that leaving the "Your Name" and "Email" fields blank will result in an anonymous submission, and any credit will be attributed to an “Anonymous User” if selected to receive credit.'] 
            alloptfillTXT.forEach(eachel=>{
                if(eachel!=='descriptionS'){
                    intypetemp='input'
                }
                else{
                    intypetemp='textarea'
                }

                let inIMIM=document.createElement(intypetemp)
                let imimRlabel=document.createElement('label')
                if(eachel.slice(0,1)=='*'){
                    let pTeLabelinSMall=document.createTextNode(radioContLabin[radioC++])
                    imimRlabel.appendChild(inIMIM)
                    imimRlabel.setAttribute('radiodih','')
                    imimRlabel.appendChild(pTeLabelinSMall)
                }
                let inLabel=document.createElement('p')
                inLabel.setAttribute('tromoSM','INlabel')
                inLabel.setAttribute('maxlength',cap)
                if(eachel.slice(0,1)!=='*'){
                inLabel.innerText=eachel.slice(0,-1)
                }
                else{
                inLabel.innerText=eachel.slice(1,-1)
                }
                inIMIM.setAttribute('info',eachel.slice(0,-1))
                if(eachel.slice(-1)=='S'){
                    inIMIM.required=true
                    inLabel.setAttribute('aft' ,'*')
                }
                if(eachel.slice(0,1)!=='*'){
                inIMIM.type='text'
                }
                else{
                inIMIM.type='checkbox'
                }
                fleXAV.appendChild(inLabel)
                if(eachel.slice(0,1)!=='*'){
                 fleXAV.appendChild(inIMIM)
                }
                else{
                    fleXAV.appendChild(imimRlabel)
                }
                
            })
            let allsubcheckBF=document.createElement('button')
            allsubcheckBF.innerText=localStorage.getItem('lastcl-form-style').split(''[0])
            allsubcheckBF.setAttribute('tromoSM','infoRefrTABcl$$')
            fleXAV.appendChild(allsubcheckBF)
            aside$lft.appendChild(fleXAV)
            amain$div.appendChild(aside$lft)
            document.body.appendChild(amain$Wrap)   
            
            document.querySelectorAll('flex').forEach(op=>{
                op.addEventListener('click',function(){
                if(document.querySelector(`[tromosm="infoRefrTABcl$$"]`)){
                 document.querySelector(`[tromosm="infoRefrTABcl$$"]`).innerText=localStorage.getItem('lastcl-form-style') 
                }
                })
            })
            
            document.querySelector(`[tromosm="infoRefrTABcl$$"]`).addEventListener('click',async function(){
            async function senF(){
                let temp$$getCRE=false
                if(document.querySelector(`[info="*credits"]`).checked){
                    temp$$getCRE=true
                }
                loader('please wait','s')
                const {error}=await supabase
                .from("feedbackCTWS")
                .insert([{
                    REorFE:localStorage.getItem('lastcl-form-style').toString(),
                    person:document.querySelector(`[info="your name"]`).value,
                    email:document.querySelector(`[info='email']`).value,
                    title:document.querySelector(`[info='title']`).value,
                    description:document.querySelector(`[info='description']`).value,
                    credits: temp$$getCRE,
                    priorityLEVEL:'fr SITE',
                    temps:mainSendELquery
                }])
                if(error){
                 console.error(`error : ${error}`)
                 errorr(error.message)
                }
                else{
                    success(`Success`)
                }
                loader('sybau','sybau')
                .querySelectorAll(`[tromoSM='madocumentin-wra-allk0']`).forEach(closets=>{
                    closets.remove()
                })
             }

                let ig=true
                document.querySelector(`[tromoSM='aside-proj-di']`).querySelectorAll(`[required]`).forEach(req=>{
                    if(req.type=='text' || req.tagName=='TEXTAREA'){
                        if(req.value.trim()==''){
                        ig=false
                        }
                    }
                    else if(req.type=="checkbox"){
                        if(req.checked==false){
                        ig=false
                        }
                    }
                })
                if(ig){
                    senF()
                }
                else{
                    alert('Please fill out the required fields')
                }
                
                
            })
            
            document.querySelectorAll(`flex input[type=radio]`).forEach(opt=>{
                opt.closest(`label`).addEventListener('click',function(){
                    if(opt.getAttribute('actionA')=='req'){
                        if(document.querySelector(`[actionA='req']`).checked){
                         main$$title$$form.innerText='Request Features'
                         localStorage.setItem('lastcl-form-style',main$$title$$form.innerText)
                        }
                        else{
                         main$$title$$form.innerText='Send Feedback'
                         localStorage.setItem('lastcl-form-style',"Send Feedback")
                        }
                    }
                    else{
                         main$$title$$form.innerText='Send Feedback'
                         localStorage.setItem('lastcl-form-style',"Send Feedback")
                    }
                })
            })
    })
    const tab=new URLSearchParams(window.location.search)
    const tabval=tab.get("feedback")
    if(tabval=='true'){
        if(document.querySelector(`[tromosm="feedback"]`)){
            document.querySelector(`[tromosm="feedback"]`).click()
        }
    }
})
