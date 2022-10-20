async function getDataByEmail(email=""){
    let url = "https://635008f878563c1d82b707aa.mockapi.io/user/";
    
    let res = await fetch(url);
    let result = await res.json();
    let filter = result.filter(item => {
        return item.email == email;
    });

    return filter;
}

async function getDataByID(id){
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


function hashPassword(password) {
    let hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
    hashObj.update(password);
    let hash = hashObj.getHash("HEX");
    // pwdObj.value = hash;
    return hash;
}