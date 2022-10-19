// check apakah sudah login atau tidak?
document.addEventListener("DOMContentLoaded", function(event) { 
    let data = JSON.parse(sessionStorage.getItem("users"));
    if(data != null){
        window.location.href = "./home_user.html";
    }
    console.log(data);
});

async function loginAccount(email="",password=""){
    let url = "https://635008f878563c1d82b707aa.mockapi.io/user/";
    let newPass = hashPassword(password);
    
    let res = await fetch(url);
    let result = await res.json();
    result.forEach(e => {
        if(e.email == email && e.password == newPass){
            let data = {
                id:e.id,
                email:e.email,
                username:e.username
            }
            sessionStorage.setItem("users",JSON.stringify(data));
            alert("Login berhasil");
            window.location.href = "./home_user.html";
        }else if(e.email == email){
            alert("Password salah");
        }
    });
}

document.getElementById("login-akun").addEventListener("click", async (e) => {
    e.preventDefault();
    if(document.getElementById("password").value != "" && document.getElementById("email").value != ""){
        loginAccount(document.getElementById("email").value,document.getElementById("password").value)
    }
})