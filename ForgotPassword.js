let forgotPassword = function () {

    this.forgotPassword = function () {

        it('Forgot-Password', function () {

            element(by.xpath("//input[@id='email']")).click().sendKeys('jihan@redlimesolutions.com')
            browser.sleep(2000)
            element(by.xpath("//a[@class='btn btn-secondary w-100']")).click();
            browser.sleep(3000)
            element(by.xpath("/html[1]/body[1]/root[1]/login[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/owl-carousel[1]/owl-carousel-child[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/a[1]")).click();
            browser.sleep(6000)
            setTimeout(function () {
                done();
            }, 25000);
            element(by.xpath("/html[1]/body[1]/root[1]/forgot-pass[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[2]/button[1]")).click();
            browser.sleep(4000)
            element(by.xpath("//div[3]//div[1]//div[1]//a[1]")).click();
            browser.sleep(2000)

        });
    };
};

module.exports = new forgotPassword();