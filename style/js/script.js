const radios=document.querySelectorAll("input[type=radio]");
radios.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        if(e.target.getAttribute("checked")){
            radios.forEach((item1)=> item1.removeAttribute("checked"))
            e.target.checked = false
            
        }else{
            radios.forEach((item1)=> item1.removeAttribute("checked"))
            e.target.setAttribute("checked", true)
        }
    })
})