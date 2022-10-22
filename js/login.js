// check apakah sudah login atau tidak?
document.addEventListener("DOMContentLoaded", function(event) { 
    let data = JSON.parse(localStorage.getItem("users"));
    let dataAdmin = JSON.parse(localStorage.getItem("admin"));
    if(data != null){
        window.location.href = "./home_user.html";
    }else if(dataAdmin != null){
        window.location.href = "./view_data.html";
    }
});

async function loginAccount(email="",password=""){
    disableButton()
    let url = "https://635008f878563c1d82b707aa.mockapi.io/user/";
    let newPass = hashPassword(password);

    let dataAdmin = await getAdminByEmail(email);
    if(dataAdmin.length < 1){
        
        let dataUser = await getDataByEmail(email);

        if(dataUser.length < 1){
            alert("Akun tidak ditemukan");
            enableButton();
        }else{
            if(newPass == dataUser[0].password){
                let data = {
                    id:dataUser[0].id,
                    email:dataUser[0].email,
                    username:dataUser[0].username
                }
                
                localStorage.setItem("users",JSON.stringify(data));
                window.location.href = "./home_user.html";
            }else{
                alert("Password salah!")
                enableButton();
            }
        }
    }else{
        if(newPass == dataAdmin[0].password){
            let data = {
                id:dataAdmin[0].id,
                email:dataAdmin[0].email,
                username:dataAdmin[0].username,
                role:dataAdmin[0].role
            }
            
            localStorage.setItem("admin",JSON.stringify(data));
            window.location.href = "./view_data.html";
        }else{
            
            alert("Akun tidak ditemukan");
            enableButton();
        }
    }
}

document.getElementById("login-akun").addEventListener("click", async (e) => {
    e.preventDefault();
    if(document.getElementById("password").value != "" && document.getElementById("email").value != ""){
        loginAccount(document.getElementById("email").value,document.getElementById("password").value)
    }
})