let loginLogout = function () {

    this.loginLogout = function () {


        it('Login>Logout', function () {

            element(by.xpath("//a[contains(text(),'Sign In')]")).click();
            browser.sleep(2000)
            //element(by.xpath("//input[@id='email']")).click().sendKeys('jiemonfb@gmail.com')
            element(by.xpath("//input[@id='email']")).click().sendKeys('hasancse10@gmail.com')
            //element(by.xpath("//input[@id='email']")).click().sendKeys('monday.quartolab@gmail.com')
            browser.sleep(1000)
            element(by.xpath("//a[contains(text(),'Next')]")).click();
            browser.sleep(4000)
            element(by.xpath("//input[@id='password']")).click().sendKeys('Hasib@2019@')
            browser.sleep(1000)
            element(by.xpath("//button[contains(text(),'Log In ')]")).click();
            browser.sleep(6000)
            element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Log Out')]")).click();
            browser.sleep(4000)

        });

    };
};



module.exports = new loginLogout();

