function postData(inputText) {
    const fetch = require("node-fetch");
    let url_regex = new RegExp("^(http|https):\\/\\/");

    console.log("::: Running checkForName :::", inputText);
    console.log(url_regex.test(inputText));
    let format = url_regex.test(inputText)
    let formatValue = format ? 'url' : 'text'
    console.log(formatValue);
    let formJson = {'formText': inputText, 'url': format ? 'url' : 'text'}
    // let formJson = {'formText': formText}
    console.log(formJson);

    console.log("::: Form Submitted :::")

    async function fetchData(formData) {
        fetch('http://localhost:8082/test', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then (res => {
                return res.json()
            })
            .then (function (res) {
                let response = res.categories[0];
                // console.log(response);
                document.getElementById('results').innerHTML = res.categories[0].label
            })
    }
    const myResponse = fetchData(formJson)
    // console.log(myResponse)
    return myResponse;

}

// module.exports = checkForName;

export { postData }


