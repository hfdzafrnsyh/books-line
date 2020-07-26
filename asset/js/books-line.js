// form

const order = () => {
    let name = document.getElementById('name').value;
    let emailUser = document.getElementById('email').value;

    if (name !== "" && emailUser !== "") {
        alert(` Hello ${name} , Kami akan merespon anda melalui email anda ${emailUser}`)
    } else {
        alert('anda belum memasukan form dengan benar')
    }
}




// search 

const searchBook = () => {
    let search = document.getElementById('search').value;
    let textSearch = document.querySelector('#text-search');

    if (search == "") {
        textSearch.innerHTML = '<strong>' + "Sepertinya ada yang salah , mohon isi input dengan benar" + '</strong>';
    } else {
        textSearch.innerHTML = '<strong>' + search + '</strong>' + '<p> ' + " Tidak ada , Stock Kosong! " + '</p>';
    }


}

let searchBookKey = () => {
    let keySearch = document.getElementById('search');

    keySearch.addEventListener('keyup', (event) => {

        if (event.which === 13) {

            searchBook();

        }

    })
}

// nav

const navToggle = document.querySelector('.navbar-toggle input');
const nav = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {

    nav.classList.toggle('slide');

});




// footer 


let date = new Date();
document.getElementById('date').innerHTML = date.getFullYear();