let categoryManager = function () {

    this.categoryManager = function () {


        it('Category Manager', function () {

            element(by.xpath("//i[@class='icon icon-block']")).click();
            browser.sleep(2000)

        });

        it('create-category-master', function () {

            element(by.xpath("//i[@class='icon icon-block']")).click();
            browser.sleep(2000)
            element(by.xpath("//input[@placeholder='Category Title']")).sendKeys("Master Category2")
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon-camera icon-large icon-disabled ng-star-inserted']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-hr-task icon-large']")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary mr-3']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary mt-3']")).click();
            browser.sleep(2000)


        });

        it('edit-sub-category', function () {
            element(by.xpath("//li[4]//div[1]//div[1]//a[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//input[@placeholder='Category Title']")).clear().sendKeys("sub-category")
            browser.sleep(1000)
            element(by.xpath("//span[@class='check']")).click();
            browser.sleep(2000)
            //lessons
            element(by.xpath("//li[6]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //accounting
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //update-button
            element(by.xpath("//button[@class='btn btn-secondary mt-3']")).click();
            browser.sleep(3000)
        });

        //Get-Help
        it('Category Manager>Get-Help-Watch ALL', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon-arrow-left px-1']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-bulb-off']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[@class='btn btn-secondary mr-3']")).click();
            browser.sleep(3000)
        });
        it('Category Manager', function () {

            element(by.xpath("//i[@class='icon icon-block']")).click();
            browser.sleep(2000)

        });
        it('Category Manager>Get-Help-Cancel', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon-arrow-left px-1']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-bulb-off']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)
        });
        


    };


};
module.exports = new categoryManager();