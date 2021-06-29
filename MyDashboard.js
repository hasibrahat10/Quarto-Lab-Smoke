let myDashboard = function () {

    this.myDashboard = function () {

        it('My Dashboard', function () {

            element(by.xpath("//i[@class='icon icon-dashboard']")).click();
            browser.sleep(1000)
        });

        it('My Dashboard->Need Approval', function () {

            element(by.xpath("//a[contains(text(),'Need Approval')]")).click();
            browser.sleep(1000)
            //
            element(by.xpath("//body/root/dashboard-layout/div[@class='wrapper']/perfect-scrollbar/div[@class='ps ps--active-y']/div[@class='ps-content']/div[@class='main']/div[@class='main-content']/div[@class='container-fluid px-4 position-relative']/app-dashbaord/div[@class='row no-gutters dashboard']/div[@class='col-12 col-md-8 col-xl-3 doc-full-sm bg-white']/div[@class='document-list border border-bottom-0 h-100']/div[@class='custom-scrollbar ng-star-inserted']/div[@class='card card-flush ng-star-inserted card-selected']/div[@class='card-body d-flex flex-row']/div[@class='d-flex flex-fill flex-column']/a[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='card card-flush card-selected']//span[@class='check']")).click();
            browser.sleep(1000)


            // element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click().sendKeys("effect")
            // browser.sleep(1000)
            // element(by.xpath("//h2[contains(text(),'Effects of Dissolution Medium pH and Simulated Gas')]")).click();
            // browser.sleep(2000)

            //approve
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-dashbaord[1]/div[1]/div[3]/div[2]/document-details[1]/div[1]/div[1]/button[2]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).clear();

            //2

            element(by.xpath("//a[contains(text(),'Need Approval')]")).click();
            browser.sleep(1000)
            //
            element(by.xpath("//body/root/dashboard-layout/div[@class='wrapper']/perfect-scrollbar/div[@class='ps ps--active-y']/div[@class='ps-content']/div[@class='main']/div[@class='main-content']/div[@class='container-fluid px-4 position-relative']/app-dashbaord/div[@class='row no-gutters dashboard']/div[@class='col-12 col-md-8 col-xl-3 doc-full-sm bg-white']/div[@class='document-list border border-bottom-0 h-100']/div[@class='custom-scrollbar ng-star-inserted']/div[@class='card card-flush ng-star-inserted card-selected']/div[@class='card-body d-flex flex-row']/div[@class='d-flex flex-fill flex-column']/a[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='card card-flush card-selected']//span[@class='check']")).click();
            browser.sleep(1000)


            // element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click().sendKeys("effect")
            // browser.sleep(1000)
            // element(by.xpath("//h2[contains(text(),'Effects of Dissolution Medium pH and Simulated Gas')]")).click();
            // browser.sleep(2000)

            //approve
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-dashbaord[1]/div[1]/div[3]/div[2]/document-details[1]/div[1]/div[1]/button[2]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).clear();

            //3

            element(by.xpath("//a[contains(text(),'Need Approval')]")).click();
            browser.sleep(1000)
            //
            element(by.xpath("//body/root/dashboard-layout/div[@class='wrapper']/perfect-scrollbar/div[@class='ps ps--active-y']/div[@class='ps-content']/div[@class='main']/div[@class='main-content']/div[@class='container-fluid px-4 position-relative']/app-dashbaord/div[@class='row no-gutters dashboard']/div[@class='col-12 col-md-8 col-xl-3 doc-full-sm bg-white']/div[@class='document-list border border-bottom-0 h-100']/div[@class='custom-scrollbar ng-star-inserted']/div[@class='card card-flush ng-star-inserted card-selected']/div[@class='card-body d-flex flex-row']/div[@class='d-flex flex-fill flex-column']/a[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='card card-flush card-selected']//span[@class='check']")).click();
            browser.sleep(1000)


            // element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click().sendKeys("effect")
            // browser.sleep(1000)
            // element(by.xpath("//h2[contains(text(),'Effects of Dissolution Medium pH and Simulated Gas')]")).click();
            // browser.sleep(2000)

            //approve
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-dashbaord[1]/div[1]/div[3]/div[2]/document-details[1]/div[1]/div[1]/button[2]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).clear();




        });

        // it('My Dashboard->Need Revision-DISCARD', function () {

        //     element(by.xpath("//a[contains(text(),'Need Revision')]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click().sendKeys("effect")
        //     browser.sleep(2000)
        //     element(by.xpath("//h2[contains(text(),'Effects of Dissolution Medium pH and Simulated Gas')]")).click();
        //     browser.sleep(3000)
        //     //discard
        //     element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-dashbaord[1]/div[1]/div[3]/div[2]/document-details[1]/div[1]/div[1]/button[2]")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//button[@class='btn btn-secondary mr-2']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).clear();
        //     browser.sleep(2000)


        // });

        // it('My Dashboard->Add-Bookmarked', function () {

        //     //Reset
        //     element(by.xpath("//i[@class='icon-refresh icon-mid']"))
        //     browser.sleep(1000)
        //     //All Content
        //     element(by.xpath("//a[contains(text(),'All Contents')]")).click();
        //     browser.sleep(3000)
        //     //
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click().sendKeys("effects")
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='form-check without-label mr-4 mt-1']//span[@class='check']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon icon-bookmark']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).clear();
        //     browser.sleep(2000)


        // });

        // it('My Dashboard->Remove-Bookmarked', function () {

        //     //Reset
        //     element(by.xpath("//i[@class='icon-refresh icon-mid']"))
        //     browser.sleep(1000)
        //     //click-bookmark
        //     element(by.xpath("//a[contains(text(),'Bookmarks')]")).click();
        //     browser.sleep(2000)
        //     //
        //     element(by.xpath("//h2[@class='font-weight-light']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='form-check without-label mr-4 mt-1']//span[@class='check']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-dashbaord[1]/div[1]/div[2]/div[1]/ul[1]/li[5]/a[1]/i[1]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).clear();
        //     browser.sleep(2000)


        // });

        // it('My Dashboard->Assign to Me(View)', function () {

        //     element(by.xpath("//a[contains(text(),'Assigned to Me (View)')]")).click();
        //     browser.sleep(1000)

        // });

        // it('My Dashboard->Assigned to Me (Create)', function () {

        //     element(by.xpath("//a[contains(text(),'Assigned to Me (Create)')]")).click();
        //     browser.sleep(1000)

        // });

        // it('My Dashboard->Assigned to Others (View)', function () {

        //     element(by.xpath("//a[contains(text(),'Assigned to Others (View)')]")).click();
        //     browser.sleep(1000)

        // });

        // it('My Dashboard->Assigned to Others (Create)', function () {

        //     element(by.xpath("//a[contains(text(),'Assigned to Others (Create)')]")).click();
        //     browser.sleep(1000)

        // });

        // it('My Dashboard->My Created Document(s)', function () {

        //     element(by.xpath("//a[contains(text(),'My Created Document(s)')]")).click();
        //     browser.sleep(1000)

        // });

        // it('My Dashboard->Add-Archive', function () {

        //     //All Contents
        //     element(by.xpath("//a[contains(text(),'All Contents')]")).click();
        //     browser.sleep(3000)
        //     //Reset
        //     element(by.xpath("//i[@class='icon-refresh icon-mid']"))
        //     browser.sleep(3000)
        //     //
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click().sendKeys("effects")
        //     browser.sleep(2000)
        //     element(by.xpath("//h2[@class='font-weight-light']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[@class='form-check without-label mr-4 mt-1']//span[@class='check']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//i[@class='icon icon-box']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).clear();
        //     browser.sleep(2000)


        // });

        // it('My Dashboard->Remove-Archive', function () {
        //     //Reset
        //     element(by.xpath("//i[@class='icon-refresh icon-mid']"))
        //     browser.sleep(3000)
        //     //archive
        //     element(by.xpath("//a[contains(text(),'Archive')]")).click();
        //     browser.sleep(2000)
        //     //
        //     element(by.xpath("//h2[@class='font-weight-light']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[@class='form-check without-label mr-4 mt-1']//span[@class='check']")).click();
        //     browser.sleep(2000)
        //     //RESTORE
        //     element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-dashbaord[1]/div[1]/div[3]/div[2]/document-details[1]/div[1]/button[1]")).click();
        //     browser.sleep(3000)

        // });

        // it('My Dashboard->Assign User', function () {

        //     //Reset
        //     element(by.xpath("//i[@class='icon-refresh icon-mid']"))
        //     browser.sleep(1000)
        //     //

        //     //All Content
        //     element(by.xpath("//a[contains(text(),'All Contents')]")).click();
        //     browser.sleep(3000)
        //     //
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click().sendKeys("effects")
        //     browser.sleep(2000)
        //     element(by.xpath("//h2[@class='font-weight-light']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[@class='form-check without-label mr-4 mt-1']//span[@class='check']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).clear();
        //     browser.sleep(2000)
        //     //assign
        //     element(by.xpath("//i[@class='icon icon-user-add']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//input[@id='user']")).click().sendKeys("sha")
        //     browser.sleep(2000)
        //     //SQA
        //     element(by.xpath("//i[contains(text(),'(sqa9512@gmail.com)')]")).click();

        //     //Quarto/Qarto
        //     //element(by.xpath("//i[contains(text(),'(shahid@redlimesolutions.com)')]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//textarea[@id='comment']")).click().sendKeys("Add Comments")
        //     browser.sleep(1000)
        //     element(by.xpath("//button[@class='btn btn-secondary mr-2']")).click();
        //     browser.sleep(3000)



        // });

        // it('My Dashboard->check/uncheck_All', function () {

        //     //All-content
        //     element(by.xpath("//a[contains(text(),'All Contents')]")).click();
        //     browser.sleep(2000)

        //     //Search
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[@class='form-check without-label mr-4']//span[@class='check']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[@class='form-check without-label mr-4']//span[@class='check']")).click();
        //     browser.sleep(1000)


        //     //
        //     element(by.xpath("//a[contains(text(),'Draft')]")).click();
        //     browser.sleep(2000)

        // });

        // it('My Dashboard->Draft', function () {

        //     //All-content
        //     element(by.xpath("//a[contains(text(),'All Contents')]")).click();
        //     browser.sleep(2000)
        //     //
        //     element(by.xpath("//a[contains(text(),'Draft')]")).click();
        //     browser.sleep(2000)

        // });

        // it('My Dashboard->Request-Change', function () {

        //     //All-content
        //     element(by.xpath("//a[contains(text(),'All Contents')]")).click();
        //     browser.sleep(3000)
        //     //Add
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click().sendKeys("effect")
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='form-check without-label mr-4 mt-1']//span[@class='check']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-dashbaord[1]/div[1]/div[3]/div[2]/document-details[1]/div[1]/div[1]/button[1]")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/form[1]/div[2]/div[1]/div[1]/div[1]/textarea[1]")).click().sendKeys("Test Request Change")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(3000)
        //     //Remove
        //     element(by.xpath("//a[contains(text(),'Need Revision')]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click().sendKeys("effect")
        //     browser.sleep(2000)
        //     element(by.xpath("//h2[contains(text(),'Effects of Dissolution Medium pH and Simulated Gas')]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//a[@class='btn btn-secondary btn-icon ml-2 rounded d-none justify-content-sm-center d-sm-inline-flex']//i[@class='icon-edit']")).click();
        //     browser.sleep(3000)

        //     //Edit
        //     element(by.xpath("//input[@placeholder='Enter Title']")).clear().sendKeys("Effects of Dissolution Medium pH and Simulated Gastrointestinal Contraction on Drug Release From Nifedipine Extended-Release Tablets-Edit")
        //     browser.sleep(2000)

        //     //insert-video
        //     element(by.xpath("//i[@class='fa fa-video-camera']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//input[@id='fr-video-by-url-layer-text-1']")).click().sendKeys("https://www.youtube.com/watch?v=JQfiXIB04Ds")
        //     browser.sleep(1000)

        //     //insert-img
        //     element(by.xpath("//i[@class='fa fa-image']")).click();
        //     var path = require('path');
        //     var fileToUpload = 'img/sample.jpg',
        //         absolutePath = path.resolve(__dirname, fileToUpload);
        //     element(by.css('input[type="file"]')).sendKeys(absolutePath);

        //     //publish
        //     element(by.xpath("//button[@class='btn btn-secondary mb-2 ml-3 ng-star-inserted']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-link']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).clear();
        //     browser.sleep(2000)

        // });

        // it('My Dashboard', function () {

        //     element(by.xpath("//i[@class='icon icon-dashboard']")).click();
        //     browser.sleep(1000)
        // });

        // it('My Dashboard->Draft', function () {



        //     //All-content
        //     element(by.xpath("//a[contains(text(),'All Contents')]")).click();
        //     browser.sleep(2000)
        //     //
        //     element(by.xpath("//a[contains(text(),'Draft')]")).click();
        //     browser.sleep(2000)

        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).clear();
        //     browser.sleep(2000)

        // });

        // it('My Dashboard->Forwarded to Me', function () {



        //     //All-content
        //     element(by.xpath("//a[contains(text(),'All Contents')]")).click();
        //     browser.sleep(2000)
        //     //
        //     element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-dashbaord[1]/div[1]/div[1]/div[1]/div[2]/perfect-scrollbar[1]/div[1]/div[1]/ul[1]/li[13]/a[1]")).click();
        //     browser.sleep(2000)

        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).clear();
        //     browser.sleep(2000)

        // });

        // it('My Dashboard->Content Delete', function () {

        //     //All-content
        //     element(by.xpath("//a[contains(text(),'All Contents')]")).click();
        //     browser.sleep(2000)
        //     //
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click().sendKeys("effect")
        //     browser.sleep(2000)
        //     element(by.xpath("//h2[@class='font-weight-light']")).click();
        //     browser.sleep(2000)
        //     //delete
        //     element(by.xpath("//i[@class='icon icon-delete']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(3000)



        // });





    }
};
module.exports = new myDashboard();