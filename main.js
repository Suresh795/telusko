var Number= 7;
var name ="Suresh D Vijay";
var flag=true;
var x,y,z;
document.write("<h1>Hello</h1>");
function buttonClick(){
    var x=document.getElementById("heading");
    x.innerHTML="Haha"
}
function textAction(){
    var rd1=document.getElementById("rd1");
    var rd2=document.getElementById("rd2");
    if(rd1.checked===true){
        alert(rd1.value);
    }else if(rd2.checked===true){
        alert(rd2.value)
    }else{
        if(document.getElementById("text1").value === document.getElementById("text2").value)
            alert("User Name and Password are same");
        else
          alert("User Name and Password are not same");
    }
}