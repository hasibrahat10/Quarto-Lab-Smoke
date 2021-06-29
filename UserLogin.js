let userlogin = function () {

    this.login = function () {

        it('user-login', function () {
            //login-button
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Sign In')]")).click();
            browser.sleep(3000)
            // Acme
            //element(by.xpath("//input[@id='email']")).click().sendKeys('jihan@redlimesolutions.com')
            // 
            element(by.xpath("//input[@id='email']")).click().sendKeys('hasancse10@gmail.com')
            browser.sleep(2000)
            //
            element(by.xpath("//a[contains(text(),'Next')]")).click();
            browser.sleep(5000)
            setTimeout(function () {
                //done();
            }, 15000);
            element(by.xpath("//input[@id='password']")).clear().sendKeys('Hasib@2019@')
            browser.sleep(1000)
            element(by.xpath("//button[contains(text(),'Log In ')]")).click();
            browser.sleep(5000)
            setTimeout(function () {
                //done();
            }, 15000);
            expect(element(by.xpath("//span[contains(text(),'Explore Categories')]")).getText()).toEqual('Explore Categories');

        });
    };
};

module.exports = new userlogin();
