function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    let formJson = {'formText': formText}
    console.log(formJson);

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8082/test', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formJson),
    })
        .then(res => res.json())
        .then(function (res) {
            console.log(res);
            document.getElementById('results').innerHTML = res.polarity_confidence
        })
}

export { handleSubmit }
