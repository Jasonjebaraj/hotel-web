document.querySelectorAll(".add").forEach((button)=>{
    button.addEventListener("click",()=>{
        button.previousElementSibling.value++
    })
})
document.querySelectorAll(".minus").forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.nextElementSibling.value>0)
        button.nextElementSibling.value--
    })
})


