const formData = require("../src/server/index.js");

test("url request", ()=> {
    let formJson = {'formText': "http://appalachiantrail.org", 'url': 'url'}
    let body = {'body': formJson};
    expect(formData(body)).toBe(true)
});
