const {checkForName} = require("../src/client/js/nameChecker");

test("enters url", ()=> {
    expect(checkForName("http://appalachiantrail.org")).toBe(true)
});

test("enters text", ()=> {
    expect(checkForName("The fox eats the chickens")).toBe(false)
});