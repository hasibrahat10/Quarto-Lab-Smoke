let globalsearch = function () {

    this.globalSearch = function () {


        it('Global Search', function () {
            element(by.xpath("//i[@class='icon icon-glass hvr-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//input[@placeholder='Search']")).click()
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search']")).sendKeys("effects")
            browser.sleep(5000)
            element(by.xpath("//a[contains(text(),'Effects of Dissolution Medium pH and Simulated Gas')]")).click();
            browser.sleep(5000)
            element(by.xpath("//div[@class='card-body card-doc_list d-flex']")).click();
            browser.sleep(5000)
            element(by.xpath("//input[@placeholder='Search']")).clear();
            browser.sleep(2000)
            element(by.xpath("//input[@placeholder='Search']")).clear();

        });


    };
};

module.exports = new globalsearch();