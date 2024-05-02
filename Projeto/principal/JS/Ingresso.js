const formEl = document.getElementById('formulario')


formEl.addEventListener('submit',evento => {
    evento.preventDefault();


    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    //mock api
    const url = 'https://6633f131f7d50bbd9b4b2802.mockapi.io/dados';

    //json
    //http://localhost:8080/dados

    fetch(url , {
        method:'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))
})

document.getElementById("comprar").addEventListener("click", function() {
    alert("Conta criada com sucesso!");
});