let profileMyAccount = function () {
    this.profileMyAccount = function () {
        it('Profile->My Account', function () {
            element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'My Account')]")).click();
            browser.sleep(2000)

        });
    };

};
module.exports = new profileMyAccount();