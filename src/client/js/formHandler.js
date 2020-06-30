function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let format = Client.checkForName(formText);
    let formatValue = format ? 'url' : 'text'
    console.log(formatValue);
    let formJson = {'formText': formText, 'url': format ? 'url' : 'text'}
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
            console.log(res.categories[0]);
            document.getElementById('results').innerHTML = res.categories[0].label
        })
}

export { handleSubmit }
