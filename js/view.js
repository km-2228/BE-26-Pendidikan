async function showAll(status,idElement){
    let data = await getAllData();
    let noUrut = 0;
    if(status != "diterima" && status != "ditolak"){
        data.forEach(element => {
            if(element.status_pendaftaran != "" && element.status_pendaftaran == status){
                noUrut++;
                document.getElementById(idElement).innerHTML += `<tr>
                <th scope="row">${noUrut}</th>
                <td>${element.nama}</td>
                <td>${element.nisn}</td>
                <td>${element.tempat}</td>
                <td>${element.asal_sekolah}</td>
                <td>${element.nama_wali}</td>
                <td>${element.nilai}</td>
                <td>
                <button type="button" class="btn btn-success" onclick="terimaSiswa(${element.id}),disableButton()">Terima</button>
                <button type="button" class="btn btn-danger" onclick="tolakSiswa(${element.id}),disableButton()">Tolak</button>
                </td>
            
            </tr>` 
            }
        });
    }else{
        data.forEach(element => {
            if(element.status_pendaftaran != "" && element.status_pendaftaran == status){
                noUrut++;
                document.getElementById(idElement).innerHTML += `<tr>
                <th scope="row">${noUrut}</th>
                <td>${element.nama}</td>
                <td>${element.nisn}</td>
                <td>${element.tempat}</td>
                <td>${element.asal_sekolah}</td>
                <td>${element.nama_wali}</td>
                <td>${element.nilai}</td>
                <td>
                <button type="button" class="btn btn-danger" onclick="batalSiswa(${element.id}),disableButton()">Batalkan</button>
                </td>
            
            </tr>` 
            }
        });
    }
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

async function batalSiswa(id){
    
    let url = "https://635008f878563c1d82b707aa.mockapi.io/user/"+id;
    let dataAccount = {
        "status_pendaftaran": "Sedang Diseleksi"
    }
    
    const resAPI = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify(dataAccount)
    })

    .then(res=>{
        alert("berhasil membatalkan user!");
        location.reload()
    })
    .catch(err=>{
        alert("gagal membatalkan user");
    })

    const content = await resAPI.json();
}

async function tolakSiswa(id){
    let url = "https://635008f878563c1d82b707aa.mockapi.io/user/"+id;
    let dataAccount = {
        "status_pendaftaran": "ditolak"
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
        location.reload()
    })

    const content = await resAPI.json();
}

showAll("Sedang Diseleksi","data-siswa");
showAll("diterima","data-siswa-diterima");
showAll("ditolak","data-siswa-ditolak");
