import { expect } from "chai";
import { Given, When, Then } from "cucumber";
import { Cookie } from "../../src/cookie";
import { ExpectedResults } from "../../asserts/assert";

Given("a three {string}, {string}, {string}", function(s1, s2, s3) {
    this.setCookie = new Cookie();
    this.actual = this.setCookie
    expect(this.setCookieResult).to.be.equal(this.actual);
});

When("I retrive three cookies", function (expected: string) {
    this.setCookie = new Cookie();
    this.actual = this.getCookie
    expect(this.setCookieResult).to.be.equal(this.actual)
});

Then("I delete {string} cookie", function(s1, expected: string)  {
    this.setCookie = new Cookie();
    this.actual = this.setCookie
    expect(this.deleteCookieResult).to.be.equal(this.actual)
}); 