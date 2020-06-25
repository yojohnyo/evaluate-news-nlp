function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log(textapi);
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(function () {
        console.log('hello2');
        res => res.json()
    })
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
