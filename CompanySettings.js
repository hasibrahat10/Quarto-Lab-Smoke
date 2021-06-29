let compaySettings = function () {
    this.compaySettings = function () {
        it('Company Settings', function () {

            element(by.xpath("//i[@class='icon pe-7s-helm']")).click();
            browser.sleep(2000)
        });
        it('Company Settings>Company Information>EDIT', function () {

            element(by.xpath("//a[@class='btn btn-secondary ml-2']")).click();
            browser.sleep(3000)
            //Company logo
            var path = require('path');
            var fileToUpload = 'img/sqa.png',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(2000)
            //Company Web URL
            element(by.xpath("//input[@placeholder='https://www.xyz.com']")).clear().sendKeys("https://www.redlimesolutions.com")
            browser.sleep(1000)
            //Contact Email
            element(by.xpath("//input[@placeholder='xyz@example.com']")).clear().sendKeys("xyz@example.com")
            browser.sleep(1000)
            //Contact Phone
            element(by.xpath("//div[@class='CountryCode']")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='CountryCode']")).click();
            browser.sleep(2000)
            element(by.xpath("//input[@name='InputPhone']")).clear().sendKeys("1234567899")
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'Done')]")).click();
            browser.sleep(3000)


        });

        //Standard
        it('Company Settings>USER>Standard>ADD USER', function () {

            element(by.xpath("//input[@placeholder='e.g. john@quartolab.com']")).click().sendKeys("Standard@gmail.com")
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary mt-3']")).click();
            browser.sleep(2000)

        });
        it('Company Settings>USER>Standard>Edit', function () {

            element(By.xpath("//div[@class='section-content']//div[2]//div[1]//div[1]//div[2]//a[1]//i[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='e.g. john@quartolab.com']")).clear().sendKeys("Standard-update@gmail.com")
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary mt-3']")).click();
            browser.sleep(2000)

        });
        it('Company Settings>USER>Standard>Auto Approve ON/OFF', function () {

            element(by.xpath("//div[@class='section-content']//div[2]//div[1]//div[1]//div[2]//a[2]//i[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='section-content']//div[2]//div[1]//div[1]//div[2]//a[2]//i[1]")).click();

        });
        it('Company Settings>USER>Standard>Deactive', function () {
            element(by.xpath("//div[@class='section-content']//div[2]//div[1]//div[1]//div[2]//a[3]//i[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'Yes')]")).click();
            browser.sleep(3000)
        });
        it('Company Settings>USER>Standard>Active', function () {
            element(by.xpath("//button[@class='btn btn-outline-primary']")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-manage-user[1]/section[1]/div[1]/div[4]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/a[1]")).click();
            browser.sleep(3000)

        });
        // it('Company Settings>USER>Standard>Delete',function(){
        //         });

        it('Company Settings>ACTIVE USERS', function () {

            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)

        });

        //Admin
        it('Company Settings>ADD USER-Admin', function () {

            element(by.xpath("//input[@placeholder='e.g. john@quartolab.com']")).click().sendKeys("Admin@gmail.com")
            browser.sleep(1000)
            element(by.xpath("//label[contains(text(),'Admin')]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary mt-3']")).click();
            browser.sleep(2000)

        });
        it('Company Settings>USER>Admin>Edit', function () {

            element(By.xpath("//div[@class='section-content']//div[2]//div[1]//div[1]//div[2]//a[1]//i[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='e.g. john@quartolab.com']")).clear().sendKeys("Admin-update@gmail.com")
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary mt-3']")).click();
            browser.sleep(2000)

        });
        it('Company Settings>USER>Admin>Auto Approve ON/OFF', function () {

            element(by.xpath("//div[@class='section-content']//div[2]//div[1]//div[1]//div[2]//a[2]//i[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='section-content']//div[2]//div[1]//div[1]//div[2]//a[2]//i[1]")).click();

        });
        it('Company Settings>USER>Admin>Deactive', function () {
            element(by.xpath("//div[@class='section-content']//div[2]//div[1]//div[1]//div[2]//a[3]//i[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'Yes')]")).click();
            browser.sleep(3000)
        });
        it('Company Settings>USER>Admin>Active', function () {
            element(by.xpath("//button[@class='btn btn-outline-primary']")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-manage-user[1]/section[1]/div[1]/div[4]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/a[1]")).click();
            browser.sleep(3000)

        });
        // it('Company Settings>USER>Admin>Delete',function(){
        //   });   

        it('Company Settings>SHOWING>ENTRIES', function () {
            //right
            element(by.xpath("//i[@class='icon-arrow-right pe-rotate-90']")).click();
            browser.sleep(1000)
            //left
            element(by.xpath("//div[@class='section-title mb-md-3 pb-md-3']//a[1]")).click();
            browser.sleep(1000)

        });
        it('Company Settings>Sort By:A-Z', function () {

            element(by.xpath("//div[@class='ng-input']")).click();
            browser.sleep(1000)
            element(by.xpath("//span[contains(text(),'A-Z')]")).click();
            browser.sleep(2000)
            // element(by.xpath("//span[contains(text(),'Z-A')]")).click();
            // browser.sleep(2000)
            // element(by.xpath("//span[@class='ng-option-label'][contains(text(),'Role')]")).click();
            // browser.sleep(2000)
            // element(by.xpath("//span[contains(text(),'Most recent')]")).click();
            // browser.sleep(2000)




        });
        it('Company Settings>Sort By:Z-A', function () {

            element(by.xpath("//div[@class='ng-input']")).click();
            browser.sleep(1000)
            // element(by.xpath("//span[contains(text(),'A-Z')]")).click();
            // browser.sleep(2000)
            element(by.xpath("//span[contains(text(),'Z-A')]")).click();
            browser.sleep(2000)
            // element(by.xpath("//span[@class='ng-option-label'][contains(text(),'Role')]")).click();
            // browser.sleep(2000)
            // element(by.xpath("//span[contains(text(),'Most recent')]")).click();
            // browser.sleep(2000) 

        });
        it('Company Settings>Sort By:Role', function () {

            element(by.xpath("//div[@class='ng-input']")).click();
            browser.sleep(1000)
            // element(by.xpath("//span[contains(text(),'A-Z')]")).click();
            // browser.sleep(2000)
            // element(by.xpath("//span[contains(text(),'Z-A')]")).click();
            // browser.sleep(2000)
            element(by.xpath("//span[@class='ng-option-label'][contains(text(),'Role')]")).click();
            browser.sleep(2000)
            // element(by.xpath("//span[contains(text(),'Most recent')]")).click();
            // browser.sleep(2000) 

        });
        it('Company Settings>Sort By:Most recent', function () {

            element(by.xpath("//div[@class='ng-input']")).click();
            browser.sleep(1000)
            // element(by.xpath("//span[contains(text(),'A-Z')]")).click();
            // browser.sleep(2000)
            // element(by.xpath("//span[contains(text(),'Z-A')]")).click();
            // browser.sleep(2000)
            // element(by.xpath("//span[@class='ng-option-label'][contains(text(),'Role')]")).click();
            // browser.sleep(2000)
            element(by.xpath("//span[contains(text(),'Most recent')]")).click();
            browser.sleep(2000)

        });


    };
};
module.exports = new compaySettings();