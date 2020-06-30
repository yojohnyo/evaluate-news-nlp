const formHandler = require("../src/client/js/formHandler");

test("enters url", ()=> {
    expect(checkForName("http://appalachiantrail.org")).toBe(true)
});