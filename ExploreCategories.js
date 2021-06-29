let exploreCategories = function () {

    this.exploreCategories = function () {

        it('Explore Categories', function () {

            element(by.xpath("//i[@class='icon icon-category']")).click();
            browser.sleep(2000)

        });

        it('Explore Categories->Z-A', function () {

            element(by.xpath("//i[@class='icon icon-category']")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='ng-input']")).click();
            browser.sleep(1000)
            element(by.xpath("//span[contains(text(),'Z-A')]")).click();
            browser.sleep(1000)

        });

        it('Explore Categories->A-Z', function () {

            element(by.xpath("//div[@class='ng-input']")).click();
            browser.sleep(1000)
            element(by.xpath('/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/quarto-home[1]/explore-category[1]/section[1]/div[1]/div[2]/div[1]/ng-select[1]/ng-dropdown-panel[1]/div[1]/div[2]/div[1]/span[1]')).click();
            browser.sleep(1000)

        });

        it('Explore Categories->Most-Viewed', function () {


            element(by.xpath("//div[@class='ng-input']")).click();
            browser.sleep(1000)
            element(by.xpath('/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/quarto-home[1]/explore-category[1]/section[1]/div[1]/div[2]/div[1]/ng-select[1]/ng-dropdown-panel[1]/div[1]/div[2]/div[3]/span[1]')).click();
            browser.sleep(1000)

        });

        it('Explore Categories->Bookmark', function () {
            element(by.xpath("//i[@class='icon-bucket']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-finance-budget']")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon-bucket']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-finance-budget']")).click();
            browser.sleep(9000)

        });

        it('Explore Categories->All_Videos', function () {
            element(by.xpath("//a[@class='next']")).click();
            browser.sleep(4000)
            element(by.xpath("//i[@class='icon icon-arrow-left']")).click();
            browser.sleep(4000)
            element(by.xpath("//a[@class='btn btn-secondary mb-2 mb-md-0']")).click();
            browser.sleep(4000)
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-video[1]/app-list[1]/section[1]/div[2]/div[1]/div[1]/div[1]/a[1]")).click();
            browser.sleep(4000)


        });

        it('Explore Categories->All_Videos>Sort By:', function () {
            //dropdown
            element(by.xpath("/html/body/root/dashboard-layout/div/perfect-scrollbar/div/div[1]/div/div/div/app-video/app-details/section/div[1]/div/div/ng-select/div/div/div[3]")).click();
            browser.sleep(1000)
            //Date
            element(By.xpath("//span[contains(text(),'Date')]")).click();
            browser.sleep(1000)
            //dropdown
            element(by.xpath("/html/body/root/dashboard-layout/div/perfect-scrollbar/div/div[1]/div/div/div/app-video/app-details/section/div[1]/div/div/ng-select/div/div/div[3]")).click();
            browser.sleep(1000)
            //Most Viewed
            element(by.xpath("//span[contains(text(),'Most Viewed')]")).click();
            browser.sleep(1000)
            //dropdown
            element(by.xpath("/html/body/root/dashboard-layout/div/perfect-scrollbar/div/div[1]/div/div/div/app-video/app-details/section/div[1]/div/div/ng-select/div/div/div[3]")).click();
            browser.sleep(1000)
            //Z-A
            element(by.xpath("//span[contains(text(),'Z-A')]")).click();
            browser.sleep(1000)
            //dropdown
            element(by.xpath("/html/body/root/dashboard-layout/div/perfect-scrollbar/div/div[1]/div/div/div/app-video/app-details/section/div[1]/div/div/ng-select/div/div/div[3]")).click();
            browser.sleep(1000)
            //A-Z
            element(by.xpath("//span[contains(text(),'A-Z')]")).click();
            browser.sleep(1000)
            //BACK TO LIST
            element(by.xpath("//a[@class='btn btn-secondary mb-1 mb-sm-0']")).click();
            browser.sleep(2000)

        });

        it('Explore Categories', function () {

            element(by.xpath("//i[@class='icon icon-category']")).click();
            browser.sleep(2000)

        });

        it('Explore Categories>CATEGORIES ', function () {

            element(by.xpath("//i[@class='icon icon-category']")).click();
            browser.sleep(2000)
            //Accounting
            element(by.xpath("//h3[contains(text(),'Accounting')]")).click();
            browser.sleep(3000)

        });

        it('Explore Categories>CATEGORIES>List_View', function () {
            element(by.xpath("//i[@class='icon-list']")).click();
            browser.sleep(3000)
            //dropdown
            element(by.xpath("//div[@class='ng-input']")).click();
            browser.sleep(2000)
            //Date
            element(By.xpath("//span[contains(text(),'Date')]")).click();
            browser.sleep(2000)
            //dropdown
            element(by.xpath("//div[@class='ng-input']")).click();
            browser.sleep(2000)
            //Most Viewed
            element(by.xpath("//span[@class='ng-option-label ng-star-inserted'][contains(text(),'Most Viewed')]")).click();
            browser.sleep(2000)
            //dropdown
            element(by.xpath("//div[@class='ng-input']")).click();
            browser.sleep(2000)
            //Z-A
            element(by.xpath("//span[@class='ng-option-label ng-star-inserted'][contains(text(),'Z-A')]")).click();
            browser.sleep(2000)
            //dropdown
            element(by.xpath("//div[@class='ng-input']")).click();
            browser.sleep(2000)
            //A-Z
            element(by.xpath("//span[contains(text(),'A-Z')]")).click();
            browser.sleep(2000)
            //dropdown
            element(by.xpath("//div[@class='ng-input']")).click();
            browser.sleep(2000)
            //Bookmark
            element(by.xpath("//span[contains(text(),'Bookmark')]")).click();
            browser.sleep(2000)
            //dropdown
            element(by.xpath("//div[@class='ng-input']")).click();
            browser.sleep(2000)
            //Document
            element(by.xpath("//div[@id='aed88057b878']//span[@class='ng-option-label ng-star-inserted'][contains(text(),'Document')]")).click();
            browser.sleep(2000)
            //dropdown
            element(by.xpath("//div[@class='ng-input']")).click();
            browser.sleep(2000)
            //Video
            element(by.xpath("//span[contains(text(),'Video')]")).click();
            browser.sleep(2000)





        });

        it('Explore Categories>CATEGORIES>Grid_View', function () {

            element(by.xpath("//i[@class='icon-grid']")).click();
            browser.sleep(3000)


        });


     };

};
module.exports = new exploreCategories();