// check apakah sudah login atau tidak?
var dataUser = JSON.parse(sessionStorage.getItem("users"));

document.addEventListener("DOMContentLoaded",async function(event) { 
    // mengambil data lama
    let res = await getDataByID(dataUser.id);
    let dataAkun = await res.json();
    
    // Menerapkan inputan data lama
    if(dataAkun != null){
        document.getElementById("nama-user").value = dataAkun.nama;
        document.getElementById("jk-user").value = dataAkun.jenis_kelamin || "Pria";
        document.getElementById("tanggal-user").value = dataAkun.tanggal_lahir;
        document.getElementById("tempat-user").value = dataAkun.tempat;
        document.getElementById("alamat-user").value = dataAkun.alamat;
        document.getElementById("nisn-user").value = dataAkun.nisn;
        document.getElementById("sekolah-user").value = dataAkun.asal_sekolah;
        document.getElementById("wali-user").value = dataAkun.nama_wali;
        document.getElementById("nilai-user").value = dataAkun.nilai;
    }
});

// mengambil data lama


// update data
async function updateForm(id, nama,jk,tanggal,tempat,alamat,nisn,sekolah,wali,nilai){
    let url = "https://635008f878563c1d82b707aa.mockapi.io/user/"+id;
    let dataAccount = {
        "nama": nama,
        "asal_sekolah": sekolah,
        "nilai": nilai,
        "alamat": alamat,
        "jenis_kelamin": jk,
        "nisn": nisn,
        "nama_wali": wali,
        "tempat": tempat,
        "tanggal_lahir": tanggal,
        "status_pendaftaran": "true"
       }
    
    const resAPI = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify(dataAccount)
    })

    .then(res=>{
        alert("berhasil melakukan pendaftaran form!");
        location.reload()
    })
    .catch(err=>{
        alert("terjadi error dalam mendaftar form!");
    })

    const content = await resAPI.json();
}


document.getElementById("daftar-form").addEventListener("click", async (e) => {
    e.preventDefault();
    updateForm(dataUser.id,
        document.getElementById("nama-user").value,
        document.getElementById("jk-user").value,
        document.getElementById("tanggal-user").value,
        document.getElementById("tempat-user").value,
        document.getElementById("alamat-user").value,
        document.getElementById("nisn-user").value,
        document.getElementById("sekolah-user").value,
        document.getElementById("wali-user").value,
        document.getElementById("nilai-user").value)
})