async function getDataByEmail(email=""){
    let url = "https://635008f878563c1d82b707aa.mockapi.io/user/";
    
    let res = await fetch(url);
    let result = await res.json();
    let filter = result.filter(item => {
        return item.email == email;
    });

    return filter;
    // hasilnya menggunakan array
}

function disableButton(){
    const buttons = document.getElementsByTagName("button");
    for (const button of buttons) {
        button.disabled = true;
    }
}

function enableButton(){
    const buttons = document.getElementsByTagName("button");
    for (const button of buttons) {
        button.disabled = false;
    }
}

async function getDataByID(id=""){
    let url = "https://635008f878563c1d82b707aa.mockapi.io/user/"+id
    let res = await fetch(url)
    return res;
}

async function getAllData(){
    let url = "https://635008f878563c1d82b707aa.mockapi.io/user/"
    let res = await fetch(url)
    let hasil = await res.json()

    // console.log(hasil);
    return hasil;
}

function isAdmin(){
    let checkAdmin = JSON.parse(localStorage.getItem("admin"))
    if(checkAdmin != null){
        if(checkAdmin.role == "admin"){
            hasil = true;
        }else{
            hasil = false;
        }
    }else{
        hasil = false;
    }

    return hasil
}

async function getAdminByEmail(email=""){
    let url = "https://635008f878563c1d82b707aa.mockapi.io/admin/";
    
    let res = await fetch(url);
    let result = await res.json();
    let filter = result.filter(item => {
        return item.email == email;
    });

    return filter;
}


function hashPassword(password) {
    let hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
    hashObj.update(password);
    let hash = hashObj.getHash("HEX");
    // pwdObj.value = hash;
    return hash;
}