import {checkForName} from "../src/client/js/nameChecker"

const {handleSubmit} = require("../src/client/js/formHandler");

describe ("Test submit", ()=>{
    test("enters url", ()=> {
        document.body.innerHTML = `
                        <form class="" onsubmit="return Client.handleSubmit()">
                    <p>Enter a URL or text to get the natural language classification</p>
                    <input id="name" type="text" name="input" value="" onblur="onBlur()" placeholder="Name">
                    <input type="submit" id="formSubmit" value="submit" onclick="return Client.handleSubmit()" onsubmit="return Client.handleSubmit()">
                </form>
        `;
        document.getElementById('name').value = "http://appalachiantrail.org";

        const formText = document.getElementById('name').value;
        const format = checkForName('formText');
        // const formSubmit = document.getElementById('formSubmit').click();
        expect(handleSubmit().toBe('economy, business and finance - media'))

    })
});