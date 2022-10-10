let num1=document.getElementById("num1")
let num2=document.getElementById("num2")
let n1=0
let n2=0
function hAdd1(){
    n1+=1
    num1.innerText=n1
}
function hAdd2(){
    n1+=2
    num1.innerText=n1
}
function hAdd3(){
    n1+=3
    num1.innerText=n1
}
function gAdd1(){
    n2+=1
    num2.textContent=n2
}
function gAdd2(){
    n2+=2
    num2.textContent=n2
}
function gAdd3(){
    n2+=3
    num2.textContent=n2
}
function reset(){
    n1=0
    n2=0
    num1.textContent=n1
    num2.textContent=n2
}