async function showAll(){

    let data = await getAllData();

    data.forEach(element => {
        if(element.nisn != "" && element.status_pendaftaran == "Sedang Diseleksi"){
            document.getElementById("data-siswa").innerHTML += `<tr>
            <th scope="row">${element.id}</th>
            <td>${element.nama}</td>
            <td>${element.nisn}</td>
            <td>${element.tempat}</td>
            <td>${element.asal_sekolah}</td>
            <td>${element.nama_wali}</td>
            <td>${element.nilai}</td>
            <td>
            <button type="button" class="btn btn-success" onclick="terimaSiswa(${element.id})">Terima</button>
            <button type="button" class="btn btn-danger" onclick="tolakSiswa(${element.id})">Tolak</button>
            </td>
        
        </tr>` 
        }
    });
}

async function terimaSiswa(id){
    let url = "https://635008f878563c1d82b707aa.mockapi.io/user/"+id;
    let dataAccount = {
        "status_pendaftaran": "diterima"
    }
    
    const resAPI = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify(dataAccount)
    })

    .then(res=>{
        alert("berhasil menerima user!");
        location.reload()
    })
    .catch(err=>{
        alert("gagal menerima user");
    })

    const content = await resAPI.json();
}

async function tolakSiswa(id){
    let url = "https://635008f878563c1d82b707aa.mockapi.io/user/"+id;
    let dataAccount = {
        "status_pendaftaran": "ditolak nice try"
    }
    
    const resAPI = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify(dataAccount)
    })

    .then(res=>{
        alert("berhasil menolak user!");
        location.reload()
    })
    .catch(err=>{
        alert("gagal menolak user");
    })

    const content = await resAPI.json();
}

showAll();