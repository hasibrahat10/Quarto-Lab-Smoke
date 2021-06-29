let fileManager = function () {

    this.fileManager = function () {

        it('File Manager', function () {

            element(by.xpath("//i[@class='icon pe-7s-folder']")).click();
            browser.sleep(1000)
        });
        it('File Manager>image-upload', function () {
            var path = require('path');
            var fileToUpload = 'test_data/img/quarto.jpg',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(2000)
        });
        it('File Manager>ADD TO CATEGORIES', function () {
            element(by.xpath("//button[@class='btn btn-primary']")).click();
            browser.sleep(2000)
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
        });
        it('File Manager>Filter', function () {
            //clear-filter
            element(by.xpath("//a[contains(text(),'Clear Filter')]")).click();
            //Filter-icon
            element(by.xpath("//button[@class='btn btn-primary btn-with-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
        });
        it('File Manager>Filter', function () {
            element(by.xpath("//button[@class='btn btn-secondary mt-3']")).click();
            browser.sleep(2000)
            element(By.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)


        });
        it('File Manager>File-Search', function () {
            element(by.xpath("//input[@placeholder='Search File(s)']")).click().sendKeys("quarto.jpg")
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search File(s)']")).clear();
            browser.sleep(1000)



        });
        //Get-Help-File Manager
        it('File Manager>Get-Help-Watch ALL', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon-arrow-left px-1']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-bulb-off']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[@class='btn btn-secondary mr-3']")).click();
            browser.sleep(3000)
        });
        it('File Manager', function () {

            element(by.xpath("//i[@class='icon pe-7s-folder']")).click();
            browser.sleep(1000)
        });
        it('File Manager>Get-Help-Cancel', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon-arrow-left px-1']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-bulb-off']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)
        });



    };
};

module.exports = new fileManager();