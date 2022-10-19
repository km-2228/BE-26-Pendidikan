function hashPassword(password) {
    let hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
    hashObj.update(password);
    let hash = hashObj.getHash("HEX");
    // pwdObj.value = hash;
    return hash;
}