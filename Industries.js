const { browser } = require("protractor");

let Industries_Construction = function () {

    this.industriesClick = function () {
        
        it('Industries>Construction', function () {
            browser.actions().mouseMove(element(by.xpath("//header/div[1]/div[1]/div[2]/ul[1]/li[2]/a[1]"))).perform();
            browser.sleep(1000)
            browser.findElement(by.xpath("//header/div[1]/div[1]/div[2]/ul[1]/li[2]/ul[1]/li[1]/a[1]")).click();
            browser.sleep(3000)
            element(by.xpath('/html/body/div/div/div/div/p/div/button')).click();
            browser.sleep(3000)


        });

        it('Industries>Hospitality', function () {
            browser.actions().mouseMove(element(by.xpath("//header/div[1]/div[1]/div[2]/ul[1]/li[2]/a[1]"))).perform();
            browser.sleep(1000)
            browser.findElement(by.xpath("//header/div[1]/div[1]/div[2]/ul[1]/li[2]/ul[1]/li[2]/a[1]")).click();
            browser.sleep(3000)

        });

        it('Industries>HealthCare', function () {
            browser.actions().mouseMove(element(by.xpath("//header/div[1]/div[1]/div[2]/ul[1]/li[2]/a[1]"))).perform();
            browser.sleep(1000)
            browser.findElement(by.xpath("//header/div[1]/div[1]/div[2]/ul[1]/li[2]/ul[1]/li[3]/a[1]")).click();
            browser.sleep(3000)

        });

    };



};


module.exports = new Industries_Construction();