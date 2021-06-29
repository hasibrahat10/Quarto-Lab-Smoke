let requestDemo = function () {

    this.requestDemo = function () {

        it('Request Demo', function () {
            element(by.xpath("//div[@class='brand']//a//img")).click();
            browser.sleep(2000)
            element(by.xpath("/html/body/root/app-website/app-homepage/hero-banner-v4/section[1]/div/div/div/owl-carousel/owl-carousel-child/div[1]/div/div/div/div[1]/div[1]/div[2]/div[2]/a[1]")).click();
            browser.sleep(3000)
            element(by.css('#InputName')).sendKeys('Jihan Emon')
            element(by.css('#InputCompany')).sendKeys('Redlime Solution')
            element(by.css('#InputEmail1')).sendKeys('jihan@redlimesolutions.com')
            element(by.xpath('/html[1]/body[1]/root[1]/app-website[1]/app-homepage[1]/div[3]/contact-v2[1]/section[1]/div[1]/form[1]/div[4]/div[1]/intl-input-phone[1]/div[1]/input[1]')).sendKeys('01712367443')
            element(by.css('#message')).clear().sendKeys('Send Me a Demo Copy')
            element(by.xpath("//button[@class='btn btn-primary btn-md mb-2 mb-xs-0']")).click();
        });

    };
};



module.exports = new requestDemo();