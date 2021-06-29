let forum = function () {
    this.forum = function () {

        it('Forum', function () {

            element(by.xpath("//i[@class='icon icon-forum']")).click();
            browser.sleep(1000)
        });

        it('Forum_All Category ', function () {

            element(by.xpath("//a[contains(text(),'All Category')]")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon-arrow-right']")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon-arrow-left']")).click();
            browser.sleep(1000)
        });

        it('Forum->CREATE POST', function () {
            element(by.xpath("//i[@class='icon icon-forum']")).click();
            browser.sleep(1000)
            element(by.xpath("//a[@class='btn btn-secondary ml-2 mb-2 mb-md-0']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Sample Title")
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Sample Body")
            browser.sleep(1000)

            //Accounting
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100']")).click();
            browser.sleep(1000)
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //Submit
            element(by.xpath("//button[@class='btn btn-secondary w-100']")).click();
            browser.sleep(2000)



        });

    };
};
module.exports = new forum();