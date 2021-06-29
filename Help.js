let profileHelp = function () {
    this.profileHelp = function () {
        it('HELP', function () {
            element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Help')]")).click();
            browser.sleep(3000)

        });

        it('HELP>FAQ', function () {

            //Click-FAQ
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]")).click();
            browser.sleep(2000)
            //
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[2]/app-faqs[1]/div[1]/div[2]/ngb-accordion[1]/div[1]/div[1]/h5[1]/button[1]/i[1]")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[2]/app-faqs[1]/div[1]/div[2]/ngb-accordion[1]/div[1]/div[1]/h5[1]/button[1]")).click();
            browser.sleep(2000)

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[2]/app-faqs[1]/div[1]/div[2]/ngb-accordion[1]/div[2]/div[1]/h5[1]/button[1]")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[2]/app-faqs[1]/div[1]/div[2]/ngb-accordion[1]/div[2]/div[1]/h5[1]/button[1]")).click();
            browser.sleep(2000)

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[2]/app-faqs[1]/div[1]/div[2]/ngb-accordion[1]/div[3]/div[1]/h5[1]/button[1]")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[2]/app-faqs[1]/div[1]/div[2]/ngb-accordion[1]/div[3]/div[1]/h5[1]/button[1]")).click();
            browser.sleep(2000)

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[2]/app-faqs[1]/div[1]/div[2]/ngb-accordion[1]/div[4]/div[1]/h5[1]/button[1]")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[2]/app-faqs[1]/div[1]/div[2]/ngb-accordion[1]/div[4]/div[1]/h5[1]/button[1]")).click();
            browser.sleep(2000)

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[2]/app-faqs[1]/div[1]/div[2]/ngb-accordion[1]/div[5]/div[1]/h5[1]/button[1]")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[2]/app-faqs[1]/div[1]/div[2]/ngb-accordion[1]/div[5]/div[1]/h5[1]/button[1]")).click();
            browser.sleep(2000)

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[2]/app-faqs[1]/div[1]/div[2]/ngb-accordion[1]/div[6]/div[1]/h5[1]/button[1]")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[2]/app-faqs[1]/div[1]/div[2]/ngb-accordion[1]/div[6]/div[1]/h5[1]/button[1]")).click();
            browser.sleep(2000)

        });
        it('HELP>See Walkthrough Again', function () {

            element(by.xpath("//a[contains(text(),'See Walkthrough Again')]")).click();
            browser.sleep(3000)

            element(by.xpath("//button[@class='next ml-auto btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='next ml-auto btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='next ml-auto btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='next ml-auto btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='next ml-auto btn btn-secondary']")).click();
            browser.sleep(2000)






        });
        it('HELP>See How to Create Single Document?', function () {

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[3]/a[1]")).click();
            browser.sleep(2000)



        });
        it('HELP>How to Create Multi-Sectional Document?', function () {

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[4]/a[1]")).click();
            browser.sleep(2000)



        });
        it('HELP>How to Create Visual Document?', function () {

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[5]/a[1]")).click();
            browser.sleep(2000)



        });
        it('HELP>How to Create and Manage Category?', function () {

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[6]/a[1]")).click();
            browser.sleep(2000)



        });
        it('HELP>How to Manage User Roles?', function () {

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[7]/a[1]")).click();
            browser.sleep(2000)



        });
        it('HELP>How to Upload Videos?', function () {

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[8]/a[1]")).click();
            browser.sleep(2000)



        });
        it('HELP>How to Manage Files?', function () {

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[9]/a[1]")).click();
            browser.sleep(2000)



        });
        it('HELP>How to Use Search Bar?', function () {

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[10]/a[1]")).click();
            browser.sleep(2000)



        });
        it('HELP>How to Assign Someone to Create a Document?', function () {

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[11]/a[1]")).click();
            browser.sleep(2000)



        });
        it('HELP>How to Assign Someone to View a Document?', function () {

            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[12]/a[1]")).click();
            browser.sleep(2000)



        });
        it('HELP>Contact Support', function () {
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-help[1]/help-list[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[13]/a[1]")).click();
            browser.sleep(3000)

            element(by.xpath("//input[@id='title']")).click().sendKeys("Test support")
            browser.sleep(1000)
            element(by.xpath("//textarea[@placeholder='Please provide the details about your query']")).click().sendKeys("Test Issue")
            browser.sleep(1000)
            //img-attach
            var path = require('path');
            var fileToUpload = 'img/quarto.jpg',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            //send
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)

        });

    };
};
module.exports = new profileHelp();