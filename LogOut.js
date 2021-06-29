let logOut = function () {
    this.logOut = function () {

        it('Log Out', function () {
            element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Log Out')]")).click();
            browser.sleep(1000)
        });
        it('Return_Home', function () {

            element(by.xpath("//a[@class='btn btn-outline-primary text-uppercase']")).click();
            browser.sleep(2000)

        });

    };
};
module.exports = new logOut();