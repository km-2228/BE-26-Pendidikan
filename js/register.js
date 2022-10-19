// check apakah sudah login atau tidak?
document.addEventListener("DOMContentLoaded", function(event) { 
    let data = JSON.parse(sessionStorage.getItem("users"));
    if(data != null){
        window.location.href = "./home_user.html";
    }
});

async function registerAccount(username="",email="",password=""){
    let url = "https://635008f878563c1d82b707aa.mockapi.io/user";
    let newPass = hashPassword(password);
    let dataAccount = {
        "nama": "",
        "username": username,
        "email": email,
        "password": newPass,
        "asal_sekolah": "",
        "nilai": 0,
        "alamat": "",
        "jenis_kelamin": "",
        "nisn": "",
        "nama_wali": "",
        "tempat": "",
        "tanggal_lahir": 00000000,
        "status_pendaftaran": "",
        "id": ""
       }
    
    const resAPI = await fetch(url, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataAccount)
    })
    .then(res=>{
        alert("berhasil membuat akun!");
        window.location.href = "./index.html";
    })
    .catch(err=>{
        alert("terjadi error dalam membuat akun!");
    })

    const content = await resAPI.json();
    
    console.log(content);
}

document.getElementById("daftar-akun").addEventListener("click", async (e) => {
    e.preventDefault();
    if(document.getElementById("username").value != "" && document.getElementById("password").value != "" && document.getElementById("email").value != ""){
        registerAccount(document.getElementById("username").value,document.getElementById("email").value,document.getElementById("password").value)
    }
})