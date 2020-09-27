"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var cucumber_1 = require("cucumber");
var cookie_1 = require("../../src/cookie");
cucumber_1.Given("a three {string}, {string}, {string}", function (s1, s2, s3) {
    this.setCookie = new cookie_1.Cookie();
    this.actual = this.setCookie;
    chai_1.expect(this.setCookieResult).to.be.equal(this.actual);
});
cucumber_1.When("I retrive three cookies", function (expected) {
    this.setCookie = new cookie_1.Cookie();
    this.actual = this.getCookie;
    chai_1.expect(this.setCookieResult).to.be.equal(this.actual);
});
cucumber_1.Then("I delete {string} cookie", function (s1) {
    this.setCookie = new cookie_1.Cookie();
    this.actual = this.setCookie;
    chai_1.expect(this.deleteCookieResult).to.be.equal(this.actual);
});
