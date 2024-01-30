//Elementi
const cookies=document.getElementById("cookies")
const closeBtn=document.getElementById("modal-close-btn")
const consentForm=document.getElementById("consent-form")
const modalText=document.getElementById("modal-text")
const btnDencile=document.getElementById("btn-dencile")
//Timeout funkcija u koju sam ubacio display a u css stavio display none.I onda se posle 1,5 sekundu pojavljuje na ekranu.
setTimeout(() => {
    cookies.style.display="inline"
}, 1500);

//Dugme kojim gasimo cookies.
closeBtn.addEventListener("click",()=>{
  cookies.style.display="none"
})

//Dodao sam dodatnu klasu u div,koja dodaje row-reverse i menja kada prodjemo misem preko dugmeta "dencile".Sa 
//evenlistenerom "mouseover".
btnDencile.addEventListener("mouseover",()=>{
    document.getElementById("buttons-cookies").classList.toggle("reverse")
})

//Renderovanje kada se klikne submit,sa funkcijom timeout.
consentForm.addEventListener("submit",(e)=>{
e.preventDefault()
const LoginformData=new FormData(consentForm)
const name=LoginformData.get("username")

modalText.innerHTML=`<div class="modal-inner-loading">
<img src="images/loading.svg" class="loading">
<p id="upload-text">Uploading your data to the dark web...</p>
</div>`
setTimeout(() => {
    document.getElementById("upload-text").innerText=`Making the proces... `
}, 1500);

setTimeout(() => {
    document.getElementById("modal-inner").innerHTML=`
    <h2 class="cookie-h2">Thanks <span class="user-color">${name}</span>,you sucker!</h2>
    <div class="pirate-gif">
    <img src="images/pirate.gif">
    </div>`
    closeBtn.disabled = false
}, 3000);

})