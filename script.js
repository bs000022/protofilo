var typed = new Typed (".typing",{
    strings:["","Web developer","web designer","Social media specialist"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link")
}
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}
function emailSend(){
    var userName = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var message = document.getElementById('Message').value;

    var messageBody = "Name" + userName + 
    "<br/> Email:"+ email +
    "<br/> Message"+ message ;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tagsite8@gmail.com",
        Password : "4392B1262F6FF73C76DE61AB9309371535DF",
        To : 'boushrasleem.bs@gmail.com',
        From : "sleemboushragmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => alert(message)
    );
}