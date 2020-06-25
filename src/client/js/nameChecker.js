function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    console.log("hello", textapi);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")

    }
}

export { checkForName }
