var Dob;
document.getElementById("btn").addEventListener("click",()=>{
Dob=document.getElementById("DOB").value;
var CurrentDate = new Date();
var DOB = new Date(Dob);
var age = CurrentDate.getFullYear()-DOB.getFullYear();
if(age<44||age>18){
    window.location.href="https://selfregistration.cowin.gov.in";
}
});
