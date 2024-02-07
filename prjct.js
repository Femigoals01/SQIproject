//addEventListener mtheod

// let names = document.getElementById("Name");
// let email = document.getElementById("Email");
// let phoneNumber = document.getElementById("phoneNumber");
// let passWord = document.getElementById("passWord");


// document.addEventListener("DOMContentLoaded", function(){
//     let signUp = document.getElementById("createButton")

//     signUp.addEventListener( "click", function(){

//     let name1 = names.value;
//     let email1 = email.value;
//     let phoneNumber1 = phoneNumber.value;
//     let passWord1 = passWord.value;

//     if(name1 && email1  && phoneNumber1  && passWord1){
        

//         window.location.href = 'prjctDashbd.html'
//     } else {
//         alert ("fill all fields")
//     }

//     })
// })


let names = document.getElementById("Name");
let email = document.getElementById("Email");
let phoneNumber = document.getElementById("phoneNumber");
let passWord = document.getElementById("passWord");


function signUp(){
    let name1 = names.value;
    let email1 = email.value;
    let phoneNumber1 = phoneNumber.value;
    let passWord1 = passWord.value;
    
    if(name1 && email1  && phoneNumber1  && passWord1){

        if(email1.includes('@') && email1.includes('.com')){

            if(passWord1.length >= 7 && /[a-z]/.test(passWord1) && /[A-Z]/.test(passWord1) && /\d/.test(passWord1)){
                if(/^\d{11}$/.test(phoneNumber1)){
                    let storedUserData = JSON.parse(localStorage.getItem("RegUsers")) || []
                    
                    let existingEmail = storedUserData.some(user => user.email12 === email1)
                    let existingPhone = storedUserData.some(user => user.phone === phoneNumber1)

                    if(existingEmail){
                        alert("Email already exists. If you have an account you can login")
                    } else if (existingPhone){
                        alert("Phone number already exists. If you have an account you can login")
                    } else {

                    let AccountNo = generateAccountNumber()
                    let mainBalance = actBal()


                    storedUserData.push ({
                        username: name1,
                        email12: email1,
                        Phone: phoneNumber1,
                        Passwd: passWord1,
                        accountNo: AccountNo,
                        balance: mainBalance
                        
                    }); 
                    
                    localStorage.setItem("RegUsers", JSON.stringify(storedUserData)); 

                    setTimeout(function() {
                     window.location.href = "project.html"
                    }, 1000)
                }
                
                } else {
                    alert("Invalid Phone Number");
                 } 
                
            } else {
                    alert("password should contains atleast 8 charateres, one uppercase, lowercase and digit")
                }
        } else {
                 alert("invalid email")
              }
            
    } else {
            alert("fill all fields")
         }
        

}



function generateAccountNumber() {
    
    let randomNumber = Math.floor(Math.random() * 10000000000);
    return  randomNumber;
}


 
function actBal() {
    let mainBal = document.createElement("h3");
    mainBal.id = "mBal";
    mainBal.innerHTML = Number(250000);
    mainBal.type = "number";
   

    // const formattedBal = new Intl.NumberFormat("en-US", {
    //     style: "currency",
    //     currency: "USD"
    // }).format(Number(mainBal.innerHTML));

    // mainBal.innerHTML = formattedBal;

    return mainBal.innerHTML;
}


let balanceElement = actBal();
console.log(balanceElement.id);