function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let label = Client.postData(formText);
}

export { handleSubmit }
