const { fetchData } = require("../src/client/js/nameChecker");

const url = 'http://appalachiantrail.org';
const body = {'formText': url, 'url': 'url'}

test("url request", async (done)=> {
    document.body.innerHTML = `
                        <form class="" onsubmit="return Client.handleSubmit()">
                    <p>Enter a URL or text to get the natural language classification</p>
                    <input id="name" type="text" name="input" value="" onblur="onBlur()" placeholder="Name">
                    <input type="submit" id="formSubmit" value="submit" onclick="return Client.handleSubmit()" onsubmit="return Client.handleSubmit()">
                </form>
        `;
    const response = await fetchData(body)
    expect(response.categories[0].label).toMatch(/economy/)
    done();
});
