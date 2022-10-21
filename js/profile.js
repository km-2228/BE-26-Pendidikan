var data = JSON.parse(localStorage.getItem("users"));


document.addEventListener("DOMContentLoaded", function(event) { 
    if(data == null){
        window.location.href = "./index.html";
    }
});

async function tampilProfile() {
    let dataProfile = await getDataByEmail(data.email)

    let res = dataProfile[0]

    document.getElementById("username").value = res.username;
    document.getElementById("nisn").value = res.nisn;
    document.getElementById("email").value = res.email;
    document.getElementById("nilai").value = res.nilai;
    document.getElementById("nama_wali").value = res.nama_wali;

    let status = document.getElementById("status_pendaftaran")
    status.value = res.status_pendaftaran.toUpperCase();
    if(res.status_pendaftaran == "diterima"){
        status.style.background = "green";
    }
    else if(res.status_pendaftaran == "ditolak nice try"){
        status.style.background = "red";
    }
    else {
        status.style.background = "yellow";
        status.style.color = "black";
    }

    
    console.log(res)
}

tampilProfile()