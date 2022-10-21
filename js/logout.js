document.addEventListener("DOMContentLoaded", function(event) { 
    let data = JSON.parse(localStorage.getItem("users"));
    if(data == null){
        window.location.href = "./index.html";
    }
    if(isAdmin()){
        window.location.href = "./view_data.html";
    }
    
    document.getElementById("usernameDisplay").innerHTML = data.username;
    // console.log(data)
});

async function logout(){
    localStorage.removeItem("users");
    window.location.href = "./index.html";
}