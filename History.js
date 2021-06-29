let profileHistory = function () {
    this.profileHistory = function () {

        it('History', function () {

            element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'History')]")).click();
            browser.sleep(3000)

        });


    };
};
module.exports = new profileHistory();