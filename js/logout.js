document.addEventListener("DOMContentLoaded", function(event) { 
    let data = JSON.parse(sessionStorage.getItem("users"));
    if(data == null){
        window.location.href = "./index.html";
    }
    console.log(data);
});

async function logout(){
    sessionStorage.removeItem("users");
    window.location.href = "./index.html";
}