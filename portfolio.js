menu=document.querySelector("#header")
opens=document.querySelector("#open")
closes=document.querySelector("#close")
opens.addEventListener("click",()=>{
    menu.style.transform ="translateX(0px)"
    opens.style.display="none"
    closes.style.display="block"
    
})
closes.addEventListener("click",()=>{
    menu.style.transform ="translateX(-300px)"
    opens.style.display="block"
    closes.style.display="none"
    
})
displaytous=document.querySelector("#tous")
displaytrad=document.querySelector("#trad")
displayed=document.querySelector("#ed")
displayens=document.querySelector("#ens")
btntous=document.querySelector(".tous")
btntrad=document.querySelector(".trad")
btned=document.querySelector(".ed")
btnens=document.querySelector(".ens")

displaytous.style.display="block" 
  displaytrad.style.display="none"  
  displayed.style.display="none"  
  displayens.style.display="none" 

btntous.addEventListener("click",()=>{
  displaytous.style.display="block"  
  displaytrad.style.display="none"  
  displayed.style.display="none"  
  displayens.style.display="none"  
  
})
btntrad.addEventListener("click",()=>{
    displaytous.style.display="none"  
    displaytrad.style.display="block"  
    displayed.style.display="none"  
    displayens.style.display="none"  
  })
btned.addEventListener("click",()=>{
    displaytous.style.display="none"  
    displaytrad.style.display="none"  
    displayed.style.display="block"  
    displayens.style.display="none"  
  })
btnens.addEventListener("click",()=>{
    displaytous.style.display="none"  
    displaytrad.style.display="none"  
    displayed.style.display="none"  
    displayens.style.display="block"  
  })
   
const txtAnim= document.querySelector('.animation');

new  Typewritre(txtAnim, {
deleteSpeed: 20
})
.typeString('Traducteur')
.pauseFOR(300)
.typeString('<strong>, interpreteur</strong>')




