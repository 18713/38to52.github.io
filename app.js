// question = 1

function change(){
    var user =prompt("text color")
    var user1 = prompt("bagraound color")
    var par = document.getElementById("paragraph")
    par.style.color=user
    par.style.backgroundColor=user1
}


// question = 2

function shower(){
 document.getElementById("imges").src ='./image/img2.jpg'

}
function bigger(){
    var big= document.getElementById("imges") 
    big.style.width="700px"
}

function small(){
    var sma= document.getElementById("imges") 
    sma.style.width="200px"
}

function hide(){
    document.getElementById("imges").src="" 
}

// question =3

function on(){
    document.getElementById('bulb1').src="./image/on.png"
}
function off(){
    document.getElementById("bulb1").src="./image/off.png"
}

function changing(){
var para = document.getElementsByTagName("p").length
// console.log(para)
for(var i = 0 ; i <para ;i++){
    var user =prompt("enter color" + (i+1) )
     
}


}
