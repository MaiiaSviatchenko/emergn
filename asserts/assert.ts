export class ExpectedResults {
    setCookieResult() {
        const actualTest1 = {
            "cookies": {
                "foo1": "bar1",
                "foo2": "bar2",
                "foo3": "bar3"
            }
        };
        return actualTest1
    }
    deleteCookieResult() {
        const actualTest2 = {
            "cookies": {
                "foo2": "bar2",
                "foo3": "bar3"
            }
        }
        return actualTest2
    }
}