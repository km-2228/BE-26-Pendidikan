var data = JSON.parse(localStorage.getItem("users"));


document.addEventListener("DOMContentLoaded", async function(event) { 
    if(data == null){
        window.location.href = "./index.html";
    }
    let res = await getDataByID(data.id);
    let dataAkun = await res.json();
    // console.log(dataAkun.status_pendaftaran);
    if(dataAkun.status_pendaftaran == ""){
        alert("Mohon untuk mengisi form daftar PPDB Terlebih dahulu!");
        window.location.href = "./form_upload.html";
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
    else if(res.status_pendaftaran == "ditolak"){
        status.style.background = "red";
    }
    else {
        status.style.background = "yellow";
        status.style.color = "black";
    }

    
    // console.log(res)
}

tampilProfile()
