let userlogin = function () {

    this.login = function () {

        it('user-login', function () {
            //login-button
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Login')]")).click();
            browser.sleep(3000)
            // Acme
            //element(by.xpath("//input[@id='email']")).click().sendKeys('jihan@redlimesolutions.com')
            // 
            element(by.xpath("//input[@id='email']")).click().sendKeys('emon.esoft@gmail.com')
            browser.sleep(2000)
            //
            element(by.xpath("//a[contains(text(),'Next')]")).click();
            browser.sleep(9000)
            setTimeout(function () {
                //done();
            }, 15000);
            element(by.css('#password')).clear().sendKeys('admin@321')
            browser.sleep(1000)
            element(by.xpath("//body/root[1]/login[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[3]/div[1]/button[1]")).click();
            browser.sleep(9000)
            setTimeout(function () {
                //done();
            }, 55000);
            expect(element(by.xpath("//h1[contains(text(),'Explore Categories')]")).getText()).toEqual('Explore Categories');

        });
    };
};

module.exports = new userlogin();
