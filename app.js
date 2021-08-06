const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById ('error');


form .addEventListener('submit', (e) => {
    let message = []
    if(name.value === password.value) {
        message.push("password valide")
        

        }else
        if (name.value ==! password.value) {
            message.push("password not valide")
        }
