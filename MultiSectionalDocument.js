let multiSectionalDocument = function () {

    this.multiSectionalDocumentPublish = function () {
        it('Multi-Sectional Document >1> Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='container-fluid']//div[2]//label[1]//img[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(2000)
            //Title
            element(by.xpath("//input[@id='docTitle']")).click().sendKeys("MultiSec_Without_Quiz-1")
            browser.sleep(2000)
            //sections
            //1
            element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-1")
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'ADD')]")).click();
            browser.sleep(2000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            browser.sleep(2000)
            //  //2
            // element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-2")
            // browser.sleep(2000)
            // element(by.xpath("//button[contains(text(),'ADD')]")).click();
            // browser.sleep(2000)
            //  //Body
            //  element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            //  browser.sleep(2000)
            //  //3
            // element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-3")
            // browser.sleep(2000)
            // element(by.xpath("//button[contains(text(),'ADD')]")).click();
            // browser.sleep(2000)
            //  //Body
            //  element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            //  browser.sleep(2000)
            //  //4
            // element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-4")
            // browser.sleep(2000)
            // element(by.xpath("//button[contains(text(),'ADD')]")).click();
            // browser.sleep(2000)
            //  //Body
            //  element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            //  browser.sleep(2000)
            //  //5
            // element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-5")
            // browser.sleep(2000)
            // element(by.xpath("//button[contains(text(),'ADD')]")).click();
            // browser.sleep(2000)
            //  //Body
            //  element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            //  browser.sleep(9000)


            //Category
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(2000)
            //Accounting
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)


            //Filter

            //single
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(2000)
            element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            browser.executeScript('window.scrollTo(0,750);');
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)

            //multiple
            element(by.xpath("//i[@class='icon icon-close']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(2000)
            element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
            browser.sleep(2000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
            browser.sleep(2000)
            browser.executeScript('window.scrollTo(0,750);');
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-close']")).click();
            browser.sleep(2000)
            //Add-img-Attachment-jpg
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(2000)
            var path = require('path');
            var fileToUpload = 'test_data/img/quarto.jpg',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //Add-img-Attachment-png
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(2000)
            var path = require('path');
            var fileToUpload = 'test_data/img/quarto.png',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //manage-sections-cancel
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)
            //manage-sections-save
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //publish
            element(by.xpath("//button[@class='btn btn-secondary mb-2 ml-3']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)

        });
        it('Multi-Sectional Document >2> Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='container-fluid']//div[2]//label[1]//img[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(2000)
            //Title
            element(by.xpath("//input[@id='docTitle']")).click().sendKeys("MultiSec_Without_Quiz-2")
            browser.sleep(2000)
            //sections
            //1
            element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-1")
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'ADD')]")).click();
            browser.sleep(2000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            browser.sleep(2000)
            //Category
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(2000)
            //Accounting
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
           
            //manage-sections-save
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/create-stepwise[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)

        });
        it('Multi-Sectional Document >3> Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='container-fluid']//div[2]//label[1]//img[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(2000)
            //Title
            element(by.xpath("//input[@id='docTitle']")).click().sendKeys("MultiSec_Without_Quiz-3")
            browser.sleep(2000)
            //sections
            //1
            element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-1")
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'ADD')]")).click();
            browser.sleep(2000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            browser.sleep(2000)
            //Category
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(2000)
            //Accounting
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //manage-sections-cancel
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/create-stepwise[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)

        });
        it('Multi-Sectional Document >4> Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='container-fluid']//div[2]//label[1]//img[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(2000)
            //Title
            element(by.xpath("//input[@id='docTitle']")).click().sendKeys("MultiSec_Without_Quiz-4")
            browser.sleep(2000)
            //sections
            //1
            element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-1")
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'ADD')]")).click();
            browser.sleep(2000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            browser.sleep(2000)
            //Category
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(2000)
            //Accounting
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //manage-sections
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/create-stepwise[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)

        });
        it('Multi-Sectional Document >5> Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='container-fluid']//div[2]//label[1]//img[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(2000)
            //Title
            element(by.xpath("//input[@id='docTitle']")).click().sendKeys("MultiSec_Without_Quiz-5")
            browser.sleep(2000)
            //sections
            //1
            element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-1")
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'ADD')]")).click();
            browser.sleep(2000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            browser.sleep(2000)
            //Category
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(2000)
            //Accounting
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //manage-sections
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/create-stepwise[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)

        });
        it('Multi-Sectional Document >6> Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='container-fluid']//div[2]//label[1]//img[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(2000)
            //Title
            element(by.xpath("//input[@id='docTitle']")).click().sendKeys("MultiSec_Without_Quiz-6")
            browser.sleep(2000)
            //sections
            //1
            element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-1")
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'ADD')]")).click();
            browser.sleep(2000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            browser.sleep(2000)
            //Category
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(2000)
            //Accounting
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //manage-sections
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/create-stepwise[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)

        });
        it('Multi-Sectional Document >7> Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='container-fluid']//div[2]//label[1]//img[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(2000)
            //Title
            element(by.xpath("//input[@id='docTitle']")).click().sendKeys("MultiSec_Without_Quiz-7")
            browser.sleep(2000)
            //sections
            //1
            element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-1")
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'ADD')]")).click();
            browser.sleep(2000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            browser.sleep(2000)
            //Category
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(2000)
            //Accounting
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //manage-sections
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/create-stepwise[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)

        });
        it('Multi-Sectional Document >8> Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='container-fluid']//div[2]//label[1]//img[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(2000)
            //Title
            element(by.xpath("//input[@id='docTitle']")).click().sendKeys("MultiSec_Without_Quiz-8")
            browser.sleep(2000)
            //sections
            //1
            element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-1")
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'ADD')]")).click();
            browser.sleep(2000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            browser.sleep(2000)
            //Category
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(2000)
            //Accounting
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //manage-sections
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/create-stepwise[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)

        });
        it('Multi-Sectional Document >9> Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='container-fluid']//div[2]//label[1]//img[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(2000)
            //Title
            element(by.xpath("//input[@id='docTitle']")).click().sendKeys("MultiSec_Without_Quiz-9")
            browser.sleep(2000)
            //sections
            //1
            element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-1")
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'ADD')]")).click();
            browser.sleep(2000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            browser.sleep(2000)
            //Category
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(2000)
            //Accounting
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //manage-sections
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/create-stepwise[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)

        });
        it('Multi-Sectional Document >10> Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='container-fluid']//div[2]//label[1]//img[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(2000)
            //Title
            element(by.xpath("//input[@id='docTitle']")).click().sendKeys("MultiSec_Without_Quiz-10")
            browser.sleep(2000)
            //sections
            //1
            element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-1")
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'ADD')]")).click();
            browser.sleep(2000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            browser.sleep(2000)
            //Category
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(2000)
            //Accounting
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //manage-sections
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/create-stepwise[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)

        });

    };

    this.multiDocaddQuiz = function () {
        //1-without>all>confirm
        it('Add-Quiz>1', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='container-fluid']//div[2]//label[1]//img[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(2000)
            //title
            element(by.xpath("//input[@id='docTitle']")).click().sendKeys("multiDocaddQuiz-1")
            browser.sleep(5000)
            //Category
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(2000)
            //Accounting
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //sections
            //1
            element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-1")
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'ADD')]")).click();
            browser.sleep(2000)
            //Body
            element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            browser.sleep(2000)
            // //2
            // element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-2")
            // browser.sleep(2000)
            // element(by.xpath("//button[contains(text(),'ADD')]")).click();
            // browser.sleep(2000)
            // //Body
            // element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
            // browser.sleep(2000)
            // element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            // browser.sleep(2000)
            // //3
            // element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-3")
            // browser.sleep(2000)
            // element(by.xpath("//button[contains(text(),'ADD')]")).click();
            // browser.sleep(2000)
            // //Body
            // element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
            // browser.sleep(2000)
            // element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            // browser.sleep(2000)
            // //4
            // element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-4")
            // browser.sleep(2000)
            // element(by.xpath("//button[contains(text(),'ADD')]")).click();
            // browser.sleep(2000)
            // //Body
            // element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
            // browser.sleep(2000)
            // element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            // browser.sleep(2000)
            // //5
            // element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-5")
            // browser.sleep(2000)
            // element(by.xpath("//button[contains(text(),'ADD')]")).click();
            // browser.sleep(2000)
            // //Body
            // element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
            // browser.sleep(2000)
            // element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            // browser.sleep(2000)

            //Filter

            //single
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(2000)
            element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            browser.executeScript('window.scrollTo(0,750);');
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)

            //multiple
            element(by.xpath("//i[@class='icon icon-close']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(2000)
            element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
            browser.sleep(2000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
            browser.sleep(2000)
            browser.executeScript('window.scrollTo(0,750);');
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-close']")).click();
            browser.sleep(2000)

            //ADD-QUIZ
            element(By.xpath("//button[@class='btn btn-with-icon btn-light w-100']")).click();
            browser.sleep(2000)

            //Question-1
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(2000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)


            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(2000)

            //Question-2
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--2")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(2000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)

            //ADD NEW QUESTION
            element(By.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/div[1]/button[1]")).click();
            browser.sleep(2000)

            //Question-3
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--3")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/ngb-accordion[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/input[1]")).click().sendKeys("Ans--3")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)

            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(2000)

            //Question-4
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--4")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(2000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)

            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(2000)

            //Question-5
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--5")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(2000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(2000)
            //Question-6
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--6")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(2000)
            //Question-7
            element(By.xpath("//input[@placeholder='Enter question here']")).click();
            element(By.xpath("//input[@placeholder='Enter question here']")).sendKeys("Question--7")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(2000)
            //Question-8
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--8")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)

            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(2000)
            //Question-9
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--9")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            //Save-Quiz
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //manage-sections-save
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //manage-sections-cancel
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/create-stepwise[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)

        });
        it('Answer-Quiz>1', function () {

            //Need-Approval
            element(by.xpath("//i[@class='icon icon-dashboard']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Need Approval')]")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-dashbaord[1]/div[1]/div[3]/div[2]/document-details[1]/div[1]/div[1]/button[2]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)

            //all-content
            element(by.xpath("//a[contains(text(),'All Contents')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click().sendKeys("multiDocaddQuiz-1")
            browser.sleep(2000)
            element(by.xpath("//div[@class='card card-flush card-selected ng-star-inserted']//span[@class='check']")).click();
            browser.sleep(2000)

            //assign
            element(by.xpath("//i[@class='icon icon-user-add']")).click();
            browser.sleep(2000)
            element(by.xpath("//input[@id='user']")).click().sendKeys("shahid")
            browser.sleep(2000)
            element(by.xpath("//i[contains(text(),'(sqa9512@gmail.com)')]")).click();
            browser.sleep(2000)
            element(by.xpath("//textarea[@id='comment']")).click().sendKeys("Answer the following Quiz")

            //include-quiz
            element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
            browser.sleep(2000)
            element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
            browser.sleep(2000)

            //DONE
            element(by.xpath("//button[@class='btn btn-secondary mr-2']")).click();
            browser.sleep(2000)
            //log-out
            element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Log Out')]")).click();
            browser.sleep(2000)
            browser.navigate().refresh();
            browser.sleep(2000)

            //Log-in

            //Monday
            element(by.xpath("//input[@id='email']")).click().sendKeys('sqa9512@gmail.com')
            browser.sleep(2000)
            element(by.xpath("//a[@class='btn btn-secondary w-100']")).click();
            browser.sleep(9000)

            element(by.css('#password')).clear().sendKeys('admin123')
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary w-100 font-weight-medium']")).click();

            browser.sleep(9000)
            setTimeout(function () {
                //done();
            }, 15000);
            expect(element(by.xpath("//h1[contains(text(),'Explore Categories')]")).getText()).toEqual('Explore Categories');
            //assign to me
            element(by.xpath("//i[@class='icon icon-dashboard']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Assigned to Me (View)')]")).click();
            browser.sleep(2000)
            //thumbs-up/down
            element(by.xpath("//i[@class='icon-thumbs-up']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-thumbs-down']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-thumbs-up']")).click();
            browser.sleep(2000)

            //Start-quiz
            element(by.xpath("//button[@class='btn btn-sm btn-success d-inline-block font-12px']")).click();
            browser.sleep(2000)
            //1
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(1) div.card-header button.btn.btn-link.collapsed.ng-star-inserted > i.pe-7s-angle-down.pe-standard.mr-2.ng-star-inserted")).click();
            browser.sleep(2000)
            element(by.xpath("//div[contains(text(),'Answer--2')]")).click();
            browser.sleep(2000)
            //2
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(2000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
            browser.sleep(2000)
            //3
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(2000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
            browser.sleep(2000)
            //4
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
            browser.sleep(2000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
            browser.sleep(2000)
            //5
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
            browser.sleep(2000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(3)")).click();
            browser.sleep(2000)
            //6
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(2000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
            browser.sleep(2000)
            //7
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(2000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
            browser.sleep(2000)
            //8
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(2000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
            browser.sleep(2000)

            //SUBMIT
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)

            //Confirm-without-complete-All
            element(by.xpath("//button[contains(text(),'YES')]")).click();
            browser.sleep(2000)



        });
        it('Assign to Me_View > Delete', function () {
            element(by.xpath("//a[contains(text(),'Assigned to Me (View)')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='card card-flush card-selected ng-star-inserted']//span[@class='check']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-delete']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)

        });
        //2
        it('Add-Quiz>2', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='container-fluid']//div[2]//label[1]//img[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(2000)
            //title
            element(by.xpath("//input[@id='docTitle']")).click().sendKeys("multiDocaddQuiz-2")
            browser.sleep(5000)
            //Category
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(2000)
            //Accounting
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //sections
            //1
            element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-1")
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'ADD')]")).click();
            browser.sleep(2000)
            //Body
            element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            browser.sleep(2000)
            // //2
            // element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-2")
            // browser.sleep(2000)
            // element(by.xpath("//button[contains(text(),'ADD')]")).click();
            // browser.sleep(2000)
            // //Body
            // element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
            // browser.sleep(2000)
            // element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            // browser.sleep(2000)
            // //3
            // element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-3")
            // browser.sleep(2000)
            // element(by.xpath("//button[contains(text(),'ADD')]")).click();
            // browser.sleep(2000)
            // //Body
            // element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
            // browser.sleep(2000)
            // element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            // browser.sleep(2000)
            // //4
            // element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-4")
            // browser.sleep(2000)
            // element(by.xpath("//button[contains(text(),'ADD')]")).click();
            // browser.sleep(2000)
            // //Body
            // element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
            // browser.sleep(2000)
            // element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            // browser.sleep(2000)
            // //5
            // element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-5")
            // browser.sleep(2000)
            // element(by.xpath("//button[contains(text(),'ADD')]")).click();
            // browser.sleep(2000)
            // //Body
            // element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
            // browser.sleep(2000)
            // element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
            // browser.sleep(2000)

            //Filter

            // //single
            // element(by.xpath("//i[@class='icon icon-filter']")).click();
            // browser.sleep(2000)
            // element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
            // browser.sleep(2000)
            // browser.executeScript('window.scrollTo(0,750);');
            // browser.sleep(2000)
            // element(by.xpath("//button[@class='btn btn-secondary']")).click();
            // browser.sleep(2000)

            // //multiple
            // element(by.xpath("//i[@class='icon icon-close']")).click();
            // browser.sleep(2000)
            // element(by.xpath("//i[@class='icon icon-filter']")).click();
            // browser.sleep(2000)
            // element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
            // browser.sleep(2000)
            // element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
            // browser.sleep(2000)
            // element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
            // browser.sleep(2000)
            // browser.executeScript('window.scrollTo(0,750);');
            // browser.sleep(2000)
            // element(by.xpath("//button[@class='btn btn-secondary']")).click();
            // browser.sleep(2000)
            // element(by.xpath("//i[@class='icon icon-close']")).click();
            // browser.sleep(2000)

            //ADD-QUIZ
            element(By.xpath("//button[@class='btn btn-with-icon btn-light w-100']")).click();
            browser.sleep(2000)

            //Question-1
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(2000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)


            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(2000)

            //Question-2
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--2")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(2000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)

            //ADD NEW QUESTION
            element(By.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/div[1]/button[1]")).click();
            browser.sleep(2000)

            //Question-3
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--3")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/ngb-accordion[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/input[1]")).click().sendKeys("Ans--3")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)

            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(2000)

            //Question-4
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--4")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(2000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)

            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(2000)

            //Question-5
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--5")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(2000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(2000)
            //Question-6
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--6")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(2000)
            //Question-7
            element(By.xpath("//input[@placeholder='Enter question here']")).click();
            element(By.xpath("//input[@placeholder='Enter question here']")).sendKeys("Question--7")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(2000)
            //Question-8
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--8")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)

            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(2000)
            //Question-9
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--9")
            browser.sleep(2000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(2000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(2000)
            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(2000)
            //Save-Quiz
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //manage-sections-save
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //manage-sections-cancel
            element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/create-stepwise[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(2000)

        });
        it('Answer-Quiz>2', function () {
            //Need-Approval
            element(by.xpath("//i[@class='icon icon-dashboard']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Need Approval')]")).click();
            browser.sleep(2000)
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-dashbaord[1]/div[1]/div[3]/div[2]/document-details[1]/div[1]/div[1]/button[2]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(2000)
            //all-content
            element(by.xpath("//a[contains(text(),'All Contents')]")).click();
            browser.sleep(2000)
            element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click().sendKeys("multiDocaddQuiz-2")
            browser.sleep(2000)
            element(by.xpath("//div[@class='card card-flush card-selected ng-star-inserted']//span[@class='check']")).click();
            browser.sleep(2000)
            //assign
            element(by.xpath("//i[@class='icon icon-user-add']")).click();
            browser.sleep(2000)
            element(by.xpath("//input[@id='user']")).click().sendKeys("Test")
            browser.sleep(2000)
            element(by.xpath("//i[contains(text(),'(rlmobile20@gmail.com)')]")).click();
            browser.sleep(2000)
            element(by.xpath("//textarea[@id='comment']")).click().sendKeys("Answer the following Quiz")
            //include-quiz
            element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
            browser.sleep(2000)
            element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
            browser.sleep(2000)
            //DONE
            element(by.xpath("//button[@class='btn btn-secondary mr-2']")).click();
            browser.sleep(2000)
            //log-out
            element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Log Out')]")).click();
            browser.sleep(2000)
            browser.navigate().refresh();
            browser.sleep(2000)
            //Log-in
            //Monday
            element(by.xpath("//input[@id='email']")).click().sendKeys('rlmobile20@gmail.com')
            browser.sleep(2000)
            element(by.xpath("//a[@class='btn btn-secondary w-100']")).click();
            browser.sleep(9000)
            element(by.css('#password')).clear().sendKeys('admin123')
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary w-100 font-weight-medium']")).click();
            browser.sleep(9000)
            setTimeout(function () {
                //done();
            }, 15000);
            expect(element(by.xpath("//h1[contains(text(),'Explore Categories')]")).getText()).toEqual('Explore Categories');
            //assign to me
            element(by.xpath("//i[@class='icon icon-dashboard']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Assigned to Me (View)')]")).click();
            browser.sleep(2000)
            //thumbs-up/down
            element(by.xpath("//i[@class='icon-thumbs-up']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-thumbs-down']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-thumbs-up']")).click();
            browser.sleep(2000)
           //Start-quiz
           element(by.xpath("//button[@class='btn btn-sm btn-success d-inline-block font-12px']")).click();
           browser.sleep(2000)
           //1
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(1) div.card-header button.btn.btn-link.collapsed.ng-star-inserted > i.pe-7s-angle-down.pe-standard.mr-2.ng-star-inserted")).click();
           browser.sleep(2000)
           element(by.xpath("//div[contains(text(),'Answer--2')]")).click();
           browser.sleep(2000)
           //2
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
           browser.sleep(2000)
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
           browser.sleep(2000)
           //3
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
           browser.sleep(2000)
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
           browser.sleep(2000)
           //4
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
           browser.sleep(2000)
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
           browser.sleep(2000)
           //5
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
           browser.sleep(2000)
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(3)")).click();
           browser.sleep(2000)
           //6
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
           browser.sleep(2000)
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
           browser.sleep(2000)
           //7
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
           browser.sleep(2000)
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
           browser.sleep(2000)
           //8
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
           browser.sleep(2000)
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
           browser.sleep(2000)
           //9
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(9) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
           browser.sleep(2000)
           element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(9) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
           browser.sleep(2000)
           //SUBMIT
           element(by.xpath("//button[@class='btn btn-secondary']")).click();
           browser.sleep(6000)
           //Confirm-complete-All
           element(by.xpath("//button[@class='btn btn-secondary']")).click();
           browser.sleep(2000)
           // QUIZ RESULT
           element(by.xpath("//button[@class='btn btn-light']")).click();
           browser.sleep(2000)

        });
        // //3-without>all>confirm
        // it('Add-Quiz>3', function () {
        //     browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//a[contains(text(),'Create Document')]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='container-fluid']//div[2]//label[1]//img[1]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
        //     browser.sleep(2000)
        //     //title
        //     element(by.xpath("//input[@id='docTitle']")).click().sendKeys("multiDocaddQuiz-3")
        //     browser.sleep(5000)
        //     //Category
        //     element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
        //     browser.sleep(2000)
        //     //Accounting
        //     element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)
        //     //sections
        //     //1
        //     element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-1")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[contains(text(),'ADD')]")).click();
        //     browser.sleep(2000)
        //     //Body
        //     element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
        //     browser.sleep(2000)
        //     //2
        //     element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-2")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[contains(text(),'ADD')]")).click();
        //     browser.sleep(2000)
        //     //Body
        //     element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
        //     browser.sleep(2000)
        //     //3
        //     element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-3")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[contains(text(),'ADD')]")).click();
        //     browser.sleep(2000)
        //     //Body
        //     element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
        //     browser.sleep(2000)
        //     //4
        //     element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-4")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[contains(text(),'ADD')]")).click();
        //     browser.sleep(2000)
        //     //Body
        //     element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
        //     browser.sleep(2000)
        //     //5
        //     element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-5")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[contains(text(),'ADD')]")).click();
        //     browser.sleep(2000)
        //     //Body
        //     element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
        //     browser.sleep(2000)

        //     //Filter

        //     //single
        //     element(by.xpath("//i[@class='icon icon-filter']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     browser.executeScript('window.scrollTo(0,750);');
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)

        //     //multiple
        //     element(by.xpath("//i[@class='icon icon-close']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon icon-filter']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
        //     browser.sleep(2000)
        //     browser.executeScript('window.scrollTo(0,750);');
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon icon-close']")).click();
        //     browser.sleep(2000)

        //     //ADD-QUIZ
        //     element(By.xpath("//button[@class='btn btn-with-icon btn-light w-100']")).click();
        //     browser.sleep(2000)

        //     //Question-1
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)


        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(2000)

        //     //Question-2
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--2")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)

        //     //ADD NEW QUESTION
        //     element(By.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/div[1]/button[1]")).click();
        //     browser.sleep(2000)

        //     //Question-3
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--3")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/ngb-accordion[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)

        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(2000)

        //     //Question-4
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--4")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)

        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(2000)

        //     //Question-5
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--5")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(2000)
        //     //Question-6
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--6")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(2000)
        //     //Question-7
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click();
        //     element(By.xpath("//input[@placeholder='Enter question here']")).sendKeys("Question--7")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(2000)
        //     //Question-8
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--8")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)

        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(2000)
        //     //Question-9
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--9")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     //Save-Quiz
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)
        //     //manage-sections-save
        //     element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)
        //     //manage-sections-cancel
        //     element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)
        //     //publish
        //     element(by.xpath("//button[@class='btn btn-secondary mb-2 ml-3']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-link']")).click();
        //     browser.sleep(2000)

        // });
        // it('Answer-Quiz>3', function () {

        //     //Need-Approval
        //     element(by.xpath("//i[@class='icon icon-dashboard']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//a[contains(text(),'Need Approval')]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-dashbaord[1]/div[1]/div[3]/div[2]/document-details[1]/div[1]/div[1]/button[2]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)

        //     //all-content
        //     element(by.xpath("//a[contains(text(),'All Contents')]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click().sendKeys("multiDocaddQuiz-3")
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='card card-flush card-selected ng-star-inserted']//span[@class='check']")).click();
        //     browser.sleep(2000)

        //     //assign
        //     element(by.xpath("//i[@class='icon icon-user-add']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//input[@id='user']")).click().sendKeys("shahid")
        //     browser.sleep(2000)
        //     element(by.xpath("//i[contains(text(),'(sqa9512@gmail.com)')]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//textarea[@id='comment']")).click().sendKeys("Answer the following Quiz")

        //     //include-quiz
        //     element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
        //     browser.sleep(2000)

        //     //DONE
        //     element(by.xpath("//button[@class='btn btn-secondary mr-2']")).click();
        //     browser.sleep(2000)
        //     //log-out
        //     element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//a[contains(text(),'Log Out')]")).click();
        //     browser.sleep(2000)
        //     browser.navigate().refresh();
        //     browser.sleep(2000)

        //     //Log-in

        //     //Monday
        //     element(by.xpath("//input[@id='email']")).click().sendKeys('sqa9512@gmail.com')
        //     browser.sleep(2000)
        //     element(by.xpath("//a[@class='btn btn-secondary w-100']")).click();
        //     browser.sleep(9000)

        //     element(by.css('#password')).clear().sendKeys('admin123')
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary w-100 font-weight-medium']")).click();

        //     browser.sleep(9000)
        //     setTimeout(function () {
        //         //done();
        //     }, 15000);
        //     expect(element(by.xpath("//h1[contains(text(),'Explore Categories')]")).getText()).toEqual('Explore Categories');
        //     //assign to me
        //     element(by.xpath("//i[@class='icon icon-dashboard']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//a[contains(text(),'Assigned to Me (View)')]")).click();
        //     browser.sleep(2000)
        //     //thumbs-up/down
        //     element(by.xpath("//i[@class='icon-thumbs-up']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon-thumbs-down']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon-thumbs-up']")).click();
        //     browser.sleep(2000)

        //     //Start-quiz
        //     element(by.xpath("//button[@class='btn btn-sm btn-success d-inline-block font-12px']")).click();
        //     browser.sleep(2000)
        //     //1
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(1) div.card-header button.btn.btn-link.collapsed.ng-star-inserted > i.pe-7s-angle-down.pe-standard.mr-2.ng-star-inserted")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[contains(text(),'Answer--2')]")).click();
        //     browser.sleep(2000)
        //     //2
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
        //     browser.sleep(2000)
        //     //3
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
        //     browser.sleep(2000)
        //     //4
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(2000)
        //     //5
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(3)")).click();
        //     browser.sleep(2000)
        //     //6
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(2000)
        //     //7
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(2000)
        //     //8
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(2000)

        //     //SUBMIT
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)

        //     //Confirm-without-complete-All
        //     element(by.xpath("//button[contains(text(),'YES')]")).click();
        //     browser.sleep(2000)



        // });
        // it('Assign to Me_View > Delete', function () {
        //     element(by.xpath("//a[@class='d-flex justify-content-between ng-star-inserted active']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='form-check without-label mr-4 mt-1']//span[@class='check']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon icon-delete']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)
        // });
        // //4
        // it('Add-Quiz>4', function () {
        //     browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//a[contains(text(),'Create Document')]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='container-fluid']//div[2]//label[1]//img[1]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
        //     browser.sleep(2000)
        //     //title
        //     element(by.xpath("//input[@id='docTitle']")).click().sendKeys("multiDocaddQuiz-4")
        //     browser.sleep(5000)
        //     //Category
        //     element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
        //     browser.sleep(2000)
        //     //Accounting
        //     element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)
        //     //sections
        //     //1
        //     element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-1")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[contains(text(),'ADD')]")).click();
        //     browser.sleep(2000)
        //     //Body
        //     element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
        //     browser.sleep(2000)
        //     //2
        //     element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-2")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[contains(text(),'ADD')]")).click();
        //     browser.sleep(2000)
        //     //Body
        //     element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
        //     browser.sleep(2000)
        //     //3
        //     element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-3")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[contains(text(),'ADD')]")).click();
        //     browser.sleep(2000)
        //     //Body
        //     element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
        //     browser.sleep(2000)
        //     //4
        //     element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-4")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[contains(text(),'ADD')]")).click();
        //     browser.sleep(2000)
        //     //Body
        //     element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
        //     browser.sleep(2000)
        //     //5
        //     element(by.xpath("//input[@placeholder='Add Section']")).click().sendKeys("Section-5")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[contains(text(),'ADD')]")).click();
        //     browser.sleep(2000)
        //     //Body
        //     element(by.xpath("//h4[@class='flex-grow-1 py-2']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Document Section Body Details")
        //     browser.sleep(2000)

        //     //Filter

        //     //single
        //     element(by.xpath("//i[@class='icon icon-filter']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     browser.executeScript('window.scrollTo(0,750);');
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)

        //     //multiple
        //     element(by.xpath("//i[@class='icon icon-close']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon icon-filter']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
        //     browser.sleep(2000)
        //     browser.executeScript('window.scrollTo(0,750);');
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon icon-close']")).click();
        //     browser.sleep(2000)

        //     //ADD-QUIZ
        //     element(By.xpath("//button[@class='btn btn-with-icon btn-light w-100']")).click();
        //     browser.sleep(2000)

        //     //Question-1
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)


        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(2000)

        //     //Question-2
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--2")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)

        //     //ADD NEW QUESTION
        //     element(By.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/div[1]/button[1]")).click();
        //     browser.sleep(2000)

        //     //Question-3
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--3")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/ngb-accordion[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)

        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(2000)

        //     //Question-4
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--4")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)

        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(2000)

        //     //Question-5
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--5")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(2000)
        //     //Question-6
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--6")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(2000)
        //     //Question-7
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click();
        //     element(By.xpath("//input[@placeholder='Enter question here']")).sendKeys("Question--7")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(2000)
        //     //Question-8
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--8")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)

        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(2000)
        //     //Question-9
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--9")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(2000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(2000)
        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(2000)
        //     //Save-Quiz
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)
        //     //manage-sections-save
        //     element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)
        //     //manage-sections-cancel
        //     element(by.xpath("//button[@class='btn btn-sm btn-light mr-2']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)
        //     //publish
        //     element(by.xpath("//button[@class='btn btn-secondary mb-2 ml-3']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-link']")).click();
        //     browser.sleep(2000)

        // });
        // it('Answer-Quiz>4', function () {

        //     //Need-Approval
        //     element(by.xpath("//i[@class='icon icon-dashboard']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//a[contains(text(),'Need Approval')]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-dashbaord[1]/div[1]/div[3]/div[2]/document-details[1]/div[1]/div[1]/button[2]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)

        //     //all-content
        //     element(by.xpath("//a[contains(text(),'All Contents')]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='input-group mb-0 px-20']//input[@placeholder='Search']")).click().sendKeys("multiDocaddQuiz-4")
        //     browser.sleep(2000)
        //     element(by.xpath("//div[@class='card card-flush card-selected ng-star-inserted']//span[@class='check']")).click();
        //     browser.sleep(2000)

        //     //assign
        //     element(by.xpath("//i[@class='icon icon-user-add']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//input[@id='user']")).click().sendKeys("Test")
        //     browser.sleep(2000)
        //     element(by.xpath("//i[contains(text(),'(rlmobile20@gmail.com)')]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//textarea[@id='comment']")).click().sendKeys("Answer the following Quiz")

        //     //include-quiz
        //     element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
        //     browser.sleep(2000)

        //     //DONE
        //     element(by.xpath("//button[@class='btn btn-secondary mr-2']")).click();
        //     browser.sleep(2000)
        //     //log-out
        //     element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//a[contains(text(),'Log Out')]")).click();
        //     browser.sleep(2000)
        //     browser.navigate().refresh();
        //     browser.sleep(2000)

        //     //Log-in

        //     //Monday
        //     element(by.xpath("//input[@id='email']")).click().sendKeys('rlmobile20@gmail.com')
        //     browser.sleep(2000)
        //     element(by.xpath("//a[@class='btn btn-secondary w-100']")).click();
        //     browser.sleep(9000)

        //     element(by.css('#password')).clear().sendKeys('admin123')
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary w-100 font-weight-medium']")).click();

        //     browser.sleep(9000)
        //     setTimeout(function () {
        //         //done();
        //     }, 15000);
        //     expect(element(by.xpath("//h1[contains(text(),'Explore Categories')]")).getText()).toEqual('Explore Categories');
        //     //assign to me
        //     element(by.xpath("//i[@class='icon icon-dashboard']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//a[contains(text(),'Assigned to Me (View)')]")).click();
        //     browser.sleep(2000)
        //     //thumbs-up/down
        //     element(by.xpath("//i[@class='icon-thumbs-up']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon-thumbs-down']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon-thumbs-up']")).click();
        //     browser.sleep(2000)

        //     //Start-quiz
        //     element(by.xpath("//button[@class='btn btn-sm btn-success d-inline-block font-12px']")).click();
        //     browser.sleep(2000)
        //     //1
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(1) div.card-header button.btn.btn-link.collapsed.ng-star-inserted > i.pe-7s-angle-down.pe-standard.mr-2.ng-star-inserted")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//div[contains(text(),'Answer--2')]")).click();
        //     browser.sleep(2000)
        //     //2
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
        //     browser.sleep(2000)
        //     //3
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
        //     browser.sleep(2000)
        //     //4
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(2000)
        //     //5
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(3)")).click();
        //     browser.sleep(2000)
        //     //6
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(2000)
        //     //7
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(2000)
        //     //8
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(2000)
        //     //9
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(9) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(2000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(9) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(2000)

        //     //SUBMIT
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)

        //     //Confirm-complete-All
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(2000)

        //     // QUIZ RESULT
        //     element(by.xpath("//button[@class='btn btn-light']")).click();
        //     browser.sleep(2000)

        // });




    };

};

module.exports = new multiSectionalDocument();