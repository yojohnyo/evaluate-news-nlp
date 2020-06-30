function checkForName(inputText) {
    let url_regex = new RegExp("^(http|https):\\/\\/");

    console.log("::: Running checkForName :::", inputText);
    console.log(url_regex.test(inputText));


    return url_regex.test(inputText)
}

module.exports = checkForName;

// export { checkForName }

