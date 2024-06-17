const img= document.getElementById("dark")
const inputbox= document.getElementById("inputbox")
const list= document.getElementById("list-container")
function Addtask(){
    if(inputbox.value === ''){
        alert("Your must write something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML=inputbox.value
        list.appendChild(li)
        let span =document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    
    }
    inputbox.value=""
    savedata()
}
list.addEventListener("click",function(e){
    console.log("dsf")
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
    savedata()
},false)
function savedata(){
    localStorage.setItem("data",list.innerHTML);
}
function getdata(){
    list.innerHTML=localStorage.getItem("data")
}
getdata()
img.onclick=function (){
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){

        img.src="apple_logo_PNG19675.png"
    }
    else{
        img.src="apple_logo_PNG19674.png"

    }
}