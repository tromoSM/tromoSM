window.addEventListener("DOMContentLoaded",function(){
const temp$$err$code=new URLSearchParams(window.location.search)
if(temp$$err$code.get("error")){
document.querySelector(`[main="title"]`).innerHTML=temp$$err$code.get("error")
}
else{
document.querySelector(`[main="title"]`).innerHTML='?'
}
})
