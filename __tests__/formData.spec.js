const { postData } = require("../src/client/js/nameChecker");

const url = 'http://appalachiantrail.org';

test("url request", async (done)=> {
    const response = await postData('http://appalachiantrail.org')
    expect(response).toBe(true)
    done();
});
