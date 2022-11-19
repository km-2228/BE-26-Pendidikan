# User
## User Attribute
| Attr      | Tipe Data |Panjang Max|Panjang Min|defaul|Deskripsi|
| ----------- | ----------- | ----------- |----------- |----------- |----------- |
| nama      | string       |255|0|null|nama pengguna akun|nama pengguna akun|
| email      | string       |100|0|null|untuk autentifikasi pengguna|untuk autentifikasi pengguna|
| password      | string       |6|1024|null|untuk autentifikasi pengguna|untuk autentifikasi pengguna|
| createdAt      | date       |null|null|Date.now|untuk menentukan tanggal akun dibuat|

## Register
Request :
* Method : POST
* Endpoint : /user/register
* Header : 
  * Content-Type : application/json
  * Accept : application/json
* Body :
```json
{
  "nama":"string",
  "email":"string",
  "password":"string"
}
```
* Respone :
```json
{
  "_id": "string",
  "nama": "string",
  "email": "string",
  "password": "string",
  "createdAt": "date",
  "__v": "number"
}
```

## Login
Request :
* Method : POST
* Endpoint : /user/login
* Header : 
  * Content-Type : application/json
  * Accept : application/json
* Body :
```json
{
  "email":"string",
  "password":"string"
}
```
* Respone :
```json
{
  "token":"string"
}
```

# Admin
## Admin Attribute
| Attr      | Tipe Data |Panjang Max|Panjang Min|defaul|Deskripsi|
| ----------- | ----------- | ----------- |----------- |----------- |----------- |
| nama      | string       |255|0|null|nama pengguna akun|nama pengguna akun|
| email      | string       |100|0|null|untuk autentifikasi pengguna|untuk autentifikasi pengguna|
| password      | string       |6|1024|null|untuk autentifikasi pengguna|untuk autentifikasi pengguna|
| createdAt      | date       |null|null|Date.now|untuk menentukan tanggal akun dibuat|
## Register
Request :
* Method : POST
* Endpoint : /admin/register
* Header : 
  * Content-Type : application/json
  * Accept : application/json
* Body :
```json
{
  "nama":"string",
  "email":"string",
  "password":"string"
}
```
* Respone :
```json
{
  "_id": "string",
  "nama": "string",
  "email": "string",
  "password": "string",
  "createdAt": "date",
  "__v": "number"
}
```

## Login
Request :
* Method : POST
* Endpoint : /admin/login
* Header : 
  * Content-Type : application/json
  * Accept : application/json
* Body :
```json
{
  "email":"string",
  "password":"string"
}
```
* Respone :
```json
{
  "token":"string"
}
```

# PPDB
## PPDB Attribute
| Attr      | Tipe Data |Deskripsi|
| ----------- | ----------- |----------- |
| nama      | string       |Nama siswa pendaftar PPDB|
| alamat      | string       |Nama siswa pendaftar PPDB|
| jenisKelamin      | string       |Jenis kelamin siswa pendaftar PPDB|
| wali      | string       |Nama wali pendaftar PPDB|
| nilai      | number       |Nilai kelulusan di sekolah sebelumnya|
| asal      | string       |Asal sekolah sebelumnya|
| status      | string       |Status kelulusan seleksi PPDB|
| tglTerdaftar      | date       |Tanggal data PPDB dibuat|

## Add PPDB Data
Request :
* Method : POST
* Endpoint : /ppdb/
* Header : 
  * Content-Type : application/json
  * Accept : application/json
  * auth-token : jwt/token
* Body :
```json
{
  "nama":"string",
  "alamat": "string",
  "jenisKelamin":"string",
  "wali":"string",
  "nilai":"number",
  "asal":"string"
}
```
* Respone :
```json
{
  "status": "string",
  "_id": "string",
  "nama": "string",
  "alamat": "string",
  "jenisKelamin": "string",
  "wali": "string",
  "nilai": "number",
  "asal": "string",
  "tglTerdaftar": "date",
  "__v": "number"
}
```

## Get All PPDB Data
Request :
* Method : GET
* Endpoint : /ppdb/
* Header : 
  * Content-Type : application/json
  * Accept : application/json
* Respone :
```json
[
  {
    "status": "string",
    "_id": "string",
    "nama": "string",
    "alamat": "string",
    "jenisKelamin": "string",
    "wali": "string",
    "nilai": "number",
    "asal": "string",
    "tglTerdaftar": "date",
    "__v": "number"
  }
]
```

## Update PPDB Data
Request :
* Method : PUT
* Endpoint : /ppdb/:ppdbId
* Header : 
  * Content-Type : application/json
  * Accept : application/json
  * auth-token2 : jwt/token
* Body :
```json
{
  "nama":"string",
  "alamat": "string"
}
```
* Respone :
```json
{
  "n": "number",
  "electionId": "string",
  "opTime": {
    "ts": "string",
    "t": "number"
  },
  "nModified": "number",
  "ok": "number",
  "$clusterTime": {
    "clusterTime": "string",
    "signature": {
      "hash": "string",
      "keyId": "string"
    }
  },
  "operationTime": "string"
}
```

## Delete PPDB Data
Request :
* Method : DELETE
* Endpoint : /ppdb/:ppdbId
* Header : 
  * Content-Type : application/json
  * Accept : application/json
  * auth-token2 : jwt/token
* Respone :
```json
{
  "n": "number",
  "electionId": "string",
  "opTime": {
    "ts": "string",
    "t": "number"
  },
  "ok": "number",
  "$clusterTime": {
    "clusterTime": "string",
    "signature": {
      "hash": "string",
      "keyId": "string"
    }
  },
  "operationTime": "string",
  "deletedCount": "number"
}
```