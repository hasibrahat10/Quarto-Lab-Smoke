let loginLogout = function () {

    this.loginLogout = function () {


        it('Login>Logout', function () {

            element(by.xpath('/html/body/root/app-website/app-homepage/header-v2/header/nav/ul/li[3]/a')).click();
            browser.sleep(2000)
            //element(by.xpath("//input[@id='email']")).click().sendKeys('jiemonfb@gmail.com')
            element(by.xpath("//input[@id='email']")).click().sendKeys('jihan@redlimesolutions.com')
            //element(by.xpath("//input[@id='email']")).click().sendKeys('monday.quartolab@gmail.com')
            browser.sleep(1000)
            element(by.xpath("//a[@class='btn btn-secondary w-100']")).click();
            browser.sleep(6000)
            element(by.xpath("//input[@id='password']")).click().sendKeys('admin123')
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary w-100 font-weight-medium']")).click();
            browser.sleep(6000)
            element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Log Out')]")).click();
            browser.sleep(6000)

        });

    };
};



module.exports = new loginLogout();

