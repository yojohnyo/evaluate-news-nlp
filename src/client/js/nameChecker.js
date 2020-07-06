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
    const responseData = fetchData(formJson)
        .then((responseData) => applyUpdate(responseData))

    console.log(responseData)
    return responseData;

};

const fetchData = async (formData) => {
    const fetch = require("node-fetch");
    console.log(formData);
        const response = await fetch('http://localhost:8082/test', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const responseData = await response.json();
        return responseData;
    }


const applyUpdate = async (responseData) => {
            let response = responseData.categories[0];
            console.log(response.label);
            document.getElementById('results').innerHTML = response.label
            return response;
    }


// module.exports = checkForName;

export { postData, fetchData }
