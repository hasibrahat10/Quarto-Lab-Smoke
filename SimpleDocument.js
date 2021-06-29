let simpleDoc = function () {

    this.publish = function () {

        it('Simple Document >1 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-1")
            browser.sleep(3000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)

            // //Category-click
            // element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            // browser.sleep(1000)

            // //DevOps
            // element(by.xpath('//li[4]//div[1]//div[1]//label[1]//span[1]')).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            // browser.sleep(1000)

            // //Filter

            // //single
            // element(by.xpath("//i[@class='icon icon-filter']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // browser.sleep(1000)
            // element(by.xpath("//button[@class='btn btn-secondary']")).click();
            // browser.sleep(1000)

            // //multiple
            // element(by.xpath("//i[@class='icon icon-close']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//i[@class='icon icon-filter']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
            // browser.sleep(1000)
            // element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
            // browser.sleep(1000)
            // element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // //element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[15]/div/div/label/span")).click();
            // browser.sleep(1000)
            // element(by.xpath("//button[@class='btn btn-secondary']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//i[@class='icon icon-close']")).click();
            // browser.sleep(1000)

            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >2 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-2")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >3 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-3")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >4 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-4")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >5 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-5")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)
        });
        it('Simple Document >6 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-6")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(3000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >7 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-7")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >8 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-8")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >9 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-9")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >10 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-10")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >11 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-11")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >12 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-12")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >13 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-13")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >14 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-14")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >15 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-15")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >16 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-16")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >17 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-17")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >18 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-18")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >19 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-19")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >20 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-20")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >21 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-21")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >22 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-22")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >23 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-23")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >24 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-24")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >25 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-25")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >26 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-26")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >27 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-27")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >28 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-28")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >29 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-29")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >30 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-30")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        }); 
        it('Simple Document >31 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-31")
            browser.sleep(3000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)

            // //Category-click
            // element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            // browser.sleep(1000)

            // //DevOps
            // element(by.xpath('//li[4]//div[1]//div[1]//label[1]//span[1]')).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            // browser.sleep(1000)

            // //Filter

            // //single
            // element(by.xpath("//i[@class='icon icon-filter']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // browser.sleep(1000)
            // element(by.xpath("//button[@class='btn btn-secondary']")).click();
            // browser.sleep(1000)

            // //multiple
            // element(by.xpath("//i[@class='icon icon-close']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//i[@class='icon icon-filter']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
            // browser.sleep(1000)
            // element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
            // browser.sleep(1000)
            // element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // //element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[15]/div/div/label/span")).click();
            // browser.sleep(1000)
            // element(by.xpath("//button[@class='btn btn-secondary']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//i[@class='icon icon-close']")).click();
            // browser.sleep(1000)

            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >32 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-32")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >33 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-33")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >34 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-33")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
           //publish
           element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-secondary']")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-link']")).click();
           browser.sleep(3000)

        });
        it('Simple Document >35 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-35")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)
        });
        it('Simple Document >36 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-36")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(3000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
           //publish
           element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-secondary']")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-link']")).click();
           browser.sleep(3000)

        });
        it('Simple Document >37 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-37")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >38 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-38")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >39 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-39")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >40 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-40")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >41 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-41")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >42 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-42")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >43 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-43")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >44 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-44")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >45 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-45")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >46 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-46")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >47 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-47")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >48 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-48")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >49 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-49")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >50 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz-50")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >51 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >52 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >53 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >54 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >55 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >56 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >57 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >58 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >59 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >60 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        }); 
        it('Simple Document >61 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)

            // //Category-click
            // element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            // browser.sleep(1000)

            // //DevOps
            // element(by.xpath('//li[4]//div[1]//div[1]//label[1]//span[1]')).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            // browser.sleep(1000)

            // //Filter

            // //single
            // element(by.xpath("//i[@class='icon icon-filter']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // browser.sleep(1000)
            // element(by.xpath("//button[@class='btn btn-secondary']")).click();
            // browser.sleep(1000)

            // //multiple
            // element(by.xpath("//i[@class='icon icon-close']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//i[@class='icon icon-filter']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
            // browser.sleep(1000)
            // element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
            // browser.sleep(1000)
            // element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // //element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[15]/div/div/label/span")).click();
            // browser.sleep(1000)
            // element(by.xpath("//button[@class='btn btn-secondary']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//i[@class='icon icon-close']")).click();
            // browser.sleep(1000)

            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >62 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >63 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >64 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
           //publish
           element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-secondary']")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-link']")).click();
           browser.sleep(3000)

        });
        it('Simple Document >65 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)
        });
        it('Simple Document >66 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(3000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
           //publish
           element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-secondary']")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-link']")).click();
           browser.sleep(3000)

        });
        it('Simple Document >67 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >68 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >69 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >70 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >71 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >72 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >73 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document 74 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >75 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >76 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >77 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >78 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >79 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >80 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >81 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >82 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >83 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >84 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
           //publish
           element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-secondary']")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-link']")).click();
           browser.sleep(3000)

        });
        it('Simple Document >85 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)
        });
        it('Simple Document >86 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(3000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
           //publish
           element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-secondary']")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-link']")).click();
           browser.sleep(3000)

        });
        it('Simple Document >87 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >88 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >89 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >90 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >91 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >92 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >93 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >94 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >95 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >96 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >97 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >98 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >99 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >100 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >101 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >102 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >103 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >104 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >105 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >106 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >107 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >108 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >109 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >110 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        }); 
        it('Simple Document >111 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)

            // //Category-click
            // element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            // browser.sleep(1000)

            // //DevOps
            // element(by.xpath('//li[4]//div[1]//div[1]//label[1]//span[1]')).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            // browser.sleep(1000)

            // //Filter

            // //single
            // element(by.xpath("//i[@class='icon icon-filter']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // browser.sleep(1000)
            // element(by.xpath("//button[@class='btn btn-secondary']")).click();
            // browser.sleep(1000)

            // //multiple
            // element(by.xpath("//i[@class='icon icon-close']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//i[@class='icon icon-filter']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
            // browser.sleep(1000)
            // element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
            // browser.sleep(1000)
            // element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // //element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[15]/div/div/label/span")).click();
            // browser.sleep(1000)
            // element(by.xpath("//button[@class='btn btn-secondary']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//i[@class='icon icon-close']")).click();
            // browser.sleep(1000)

            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >112 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >113 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >114 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
           //publish
           element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-secondary']")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-link']")).click();
           browser.sleep(3000)

        });
        it('Simple Document >115 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)
        });
        it('Simple Document >116 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(3000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
           //publish
           element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-secondary']")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-link']")).click();
           browser.sleep(3000)

        });
        it('Simple Document >117 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >118 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >119 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >120 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >121 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >122 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >123 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >124 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >125 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >126 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >127 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >128 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >129 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >130 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >131 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >132 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >133 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >134 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >135 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >136 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >137 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >138 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >139 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >140 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        }); 
        it('Simple Document >141 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >142 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >143 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >144 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >145 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >146 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >147 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >148 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >149 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >150 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        }); 
        it('Simple Document >151 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >152 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >153 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >154 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >155 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >156 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >157 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >158 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >159 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >160 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        }); 
        it('Simple Document >161 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            //Body
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)

            // //Category-click
            // element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            // browser.sleep(1000)

            // //DevOps
            // element(by.xpath('//li[4]//div[1]//div[1]//label[1]//span[1]')).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            // browser.sleep(1000)

            // //Filter

            // //single
            // element(by.xpath("//i[@class='icon icon-filter']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // browser.sleep(1000)
            // element(by.xpath("//button[@class='btn btn-secondary']")).click();
            // browser.sleep(1000)

            // //multiple
            // element(by.xpath("//i[@class='icon icon-close']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//i[@class='icon icon-filter']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
            // browser.sleep(1000)
            // element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
            // browser.sleep(1000)
            // element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
            // browser.sleep(1000)
            // browser.executeScript('window.scrollTo(0,750);');
            // //element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[15]/div/div/label/span")).click();
            // browser.sleep(1000)
            // element(by.xpath("//button[@class='btn btn-secondary']")).click();
            // browser.sleep(1000)
            // element(by.xpath("//i[@class='icon icon-close']")).click();
            // browser.sleep(1000)

            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >162 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >163 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >164 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
           //publish
           element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-secondary']")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-link']")).click();
           browser.sleep(3000)

        });
        it('Simple Document >165 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)
        });
        it('Simple Document >166 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(3000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
           //publish
           element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-secondary']")).click();
           browser.sleep(3000)
           element(by.xpath("//button[@class='btn btn-link']")).click();
           browser.sleep(3000)

        });
        it('Simple Document >167 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >168 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >169 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >170 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >171 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >172 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >173 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >174 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >175 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(3000)
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >176 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >177 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple Document >178 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >179 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >180 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >181 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >182 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >183 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >184 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >185 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >186 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >187 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >188 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >189 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >190 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        }); 
        it('Simple Document >191 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >192 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >193 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >194 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >195 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >196 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >197 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >198 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >199 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
             //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });
        it('Simple Document >200 Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple-Doc-Without-Quiz")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Document Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            //publish
             element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-secondary']")).click();
             browser.sleep(3000)
             element(by.xpath("//button[@class='btn btn-link']")).click();
             browser.sleep(3000)

        });

    };

    this.imgPublish = function () {


        it('Simple Document>Attachment>img> Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(1000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Sample Document")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Sample Documents Body")
            browser.sleep(1000)

            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)

            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();

            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)

            //DevOps
            element(by.xpath('//li[4]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(1000)

            //Filter

            //single
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(1000)
            element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //multiple
            element(by.xpath("//i[@class='icon icon-close']")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(1000)
            element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
            browser.sleep(1000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-close']")).click();
            browser.sleep(1000)

            //Add-img-Attachment-jpg
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(3000)
            var path = require('path');
            var fileToUpload = 'test_data/img/quarto.jpg',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(4000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //Add-img-Attachment-png
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(3000)
            var path = require('path');
            var fileToUpload = 'test_data/img/quarto.png',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(4000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //Add-img-Attachment-gif
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(3000)
            var path = require('path');
            var fileToUpload = 'test_data/img/quarto.gif',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(4000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //Add-img-Attachment-bmp
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(3000)
            var path = require('path');
            var fileToUpload = 'test_data/img/quarto.bmp',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(4000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //Add-img-Attachment-tif
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(3000)
            var path = require('path');
            var fileToUpload = 'test_data/img/quarto.tif',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });

    };

    this.docPublish = function () {

        it('Simple Document>Attachment>Doc>Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(1000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Sample Document")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Sample Documents Body")
            browser.sleep(1000)

            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)

            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();

            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)

            //DevOps
            element(by.xpath('//li[4]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(1000)

            //Filter

            //single
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(1000)
            element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //multiple
            element(by.xpath("//i[@class='icon icon-close']")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(1000)
            element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
            browser.sleep(1000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            //element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[15]/div/div/label/span")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-close']")).click();
            browser.sleep(1000)

            //Add-doc-Attachment-doc
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(3000)
            var path = require('path');
            var fileToUpload = 'test_data/doc/quarto.doc',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //Add-doc-Attachment-docx
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(3000)
            var path = require('path');
            var fileToUpload = 'test_data/doc/quarto.docx',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(4000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //Add-doc-Attachment-pdf
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(3000)
            var path = require('path');
            var fileToUpload = 'test_data/doc/quarto.pdf',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(4000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //Add-doc-Attachment-ppt
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(3000)
            var path = require('path');
            var fileToUpload = 'test_data/doc/quarto.ppt',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(4000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //Add-doc-Attachment-xls
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(3000)
            var path = require('path');
            var fileToUpload = 'test_data/doc/quarto.xls',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(4000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //Add-doc-Attachment-pptx
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(3000)
            var path = require('path');
            var fileToUpload = 'test_data/doc/quarto.pptx',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(4000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //Add-doc-Attachment-xlsx
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(3000)
            var path = require('path');
            var fileToUpload = 'test_data/doc/quarto.xlsx',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(4000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)


            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });


    };

    this.searchfilefromallcategoriesPublish = function () {


        it('Simple Document> Search file from all categories> Publish', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(1000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Sample Document")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Sample Documents Body")
            browser.sleep(1000)

            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)

            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();

            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)

            //DevOps
            element(by.xpath('//li[4]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(1000)

            //Filter

            //single
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(1000)
            element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //multiple
            element(by.xpath("//i[@class='icon icon-close']")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(1000)
            element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
            browser.sleep(1000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            //element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[15]/div/div/label/span")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-close']")).click();
            browser.sleep(1000)

            //Search file from all categories
            //img
            element(by.xpath("//input[@placeholder='Search file from all categories']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).sendKeys("jpg")
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).clear();
            browser.sleep(1000)

            element(by.xpath("//input[@placeholder='Search file from all categories']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).sendKeys("png")
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).clear();
            browser.sleep(1000)

            element(by.xpath("//input[@placeholder='Search file from all categories']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).sendKeys("gif")
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).clear();
            browser.sleep(1000)

            element(by.xpath("//input[@placeholder='Search file from all categories']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).sendKeys("bmp")
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).clear();
            browser.sleep(1000)

            element(by.xpath("//input[@placeholder='Search file from all categories']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).sendKeys("tif")
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).clear();
            browser.sleep(1000)

            //doc
            element(by.xpath("//input[@placeholder='Search file from all categories']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).sendKeys("doc")
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).clear();
            browser.sleep(1000)

            element(by.xpath("//input[@placeholder='Search file from all categories']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).sendKeys("docx")
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).clear();
            browser.sleep(1000)

            element(by.xpath("//input[@placeholder='Search file from all categories']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).sendKeys("pdf")
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).clear();
            browser.sleep(1000)

            element(by.xpath("//input[@placeholder='Search file from all categories']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).sendKeys("ppt")
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).clear();
            browser.sleep(1000)

            element(by.xpath("//input[@placeholder='Search file from all categories']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).sendKeys("pptx")
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).clear();
            browser.sleep(1000)

            element(by.xpath("//input[@placeholder='Search file from all categories']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).sendKeys("xls")
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).clear();
            browser.sleep(1000)

            element(by.xpath("//input[@placeholder='Search file from all categories']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).sendKeys("xlsx")
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Search file from all categories']")).clear();
            browser.sleep(1000)


            //publish
            element(by.xpath("//button[@class='btn btn-secondary mb-2 ml-3 ng-star-inserted']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(1000)

        });

    };

    this.simpleDocumentPreview = function () {
        it('Simple Document > Preview', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(1000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Sample Document")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Sample Documents Body")
            browser.sleep(1000)

            //click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)

            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();

            //click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)

            //DevOps
            element(by.xpath('//li[4]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();


            //Filter

            //single
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(1000)
            element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //multiple
            element(by.xpath("//i[@class='icon icon-close']")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(1000)
            element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
            browser.sleep(1000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            //element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[15]/div/div/label/span")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-close']")).click();

            //Add-img-Attachment
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(1000)
            var path = require('path');
            var fileToUpload = 'test_data/img/quarto.jpg',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();

            //preview
            element(by.xpath("//button[contains(text(),'Preview')]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='close']//i[@class='icon-close']")).click();
            browser.sleep(1000)

        });

    };

    this.simpleDocumentDraft = function () {
        it('Simple Document > Draft', function () {

            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(1000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Sample Document")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Sample Documents Body")
            browser.sleep(1000)

            //click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)

            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();

            //click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)

            //DevOps
            element(by.xpath('//li[4]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();


            //Filter

            //single
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(1000)
            element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //multiple
            element(by.xpath("//i[@class='icon icon-close']")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(1000)
            element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
            browser.sleep(1000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            //element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[15]/div/div/label/span")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-close']")).click();

            //Add-img-Attachment
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(1000)
            var path = require('path');
            var fileToUpload = 'test_data/img/quarto.jpg',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();



            //Save as draft
            element(by.xpath("//button[contains(text(),'Draft')]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(1000)




        });

    };

    this.simpleDocumentReset = function () {


        it('Simple Document > Reset', function () {

            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(1000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Sample Document")
            browser.sleep(3000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click().sendKeys("Sample Documents Body")
            browser.sleep(1000)

            //click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)

            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();

            //click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)

            //DevOps
            element(by.xpath('//li[4]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();


            //Filter

            //single
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(1000)
            element(by.xpath("//li[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)

            //multiple
            element(by.xpath("//i[@class='icon icon-close']")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-filter']")).click();
            browser.sleep(1000)
            element(by.xpath("//li[8]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[2]/div/div/label/span")).click();
            browser.sleep(1000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[5]/div/div/label/span")).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            //element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div[1]/div/categorylist/ul/li[15]/div/div/label/span")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-close']")).click();

            //Add-img-Attachment
            element(by.xpath("//i[@class='icon icon-add']")).click();
            browser.sleep(1000)
            var path = require('path');
            var fileToUpload = 'test_data/img/quarto.jpg',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[2]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[3]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/file-upload-component[1]/div[2]/div[1]/div[2]/categorylist[1]/ul[1]/li[8]/div[1]/div[1]/label[1]/span[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();

            //Reset
            element(by.xpath("//button[contains(text(),'Reset')]")).click();
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(1000)




        });

    };

    this.addQuiz = function () {
        //1
        it('Simple-Doc>Add-Quiz>1', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(3000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(6000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple_Doc_With_Quiz-1")
            browser.sleep(9000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Add quiz Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(2000)
            //ADD-QUIZ
            element(By.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/form[1]/div[1]/div[2]/div[1]/div[1]/button[1]")).click();
            browser.sleep(3000)
            //Question-1
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(1000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(1000)
            //Question-2
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--2")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(1000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/div[1]/button[1]")).click();
            browser.sleep(1000)
            //Question-3
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--3")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/ngb-accordion[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/input[1]")).click().sendKeys("Ans--3")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(1000)
            //Question-4
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--4")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(1000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(1000)
            //Question-5
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--5")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(1000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(1000)
            //Question-6
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--6")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(1000)
            //Question-7
            element(By.xpath("//input[@placeholder='Enter question here']")).click();
            element(By.xpath("//input[@placeholder='Enter question here']")).sendKeys("Question--7")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(1000)
            //Question-8
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--8")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(1000)
            //Question-9
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--9")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //Save-Quiz
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple-Doc>Answer-Quiz>1', function () {
            //Need-Approval
            element(by.xpath("//i[@class='icon icon-dashboard']")).click();
            browser.sleep(3000)
            element(by.xpath("//i[@class='icon-refresh icon-mid']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Need Approval')]")).click();
            browser.sleep(6000)
            element(by.xpath("/html/body/root/dashboard-layout/div/perfect-scrollbar/div/div[1]/div/div/div/app-dashbaord/div[1]/div[3]/div[2]/document-details/div[1]/div/button[2]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            //all-content
            element(by.xpath("//a[contains(text(),'All Contents')]")).click();
            browser.sleep(9000)
            element(by.xpath("//div[@class='card card-flush card-selected ng-star-inserted']//span[@class='check']")).click();
            browser.sleep(3000)
            //assign
            element(by.xpath("//i[@class='icon icon-user-add']")).click();
            browser.sleep(3000)
            element(by.xpath("//input[@id='user']")).click().sendKeys("shahid")
            browser.sleep(3000)
            element(by.xpath("//i[contains(text(),'(sqa9512@gmail.com)')]")).click();
            browser.sleep(3000)
            element(by.xpath("//textarea[@id='comment']")).click().sendKeys("Answer the following Quiz")
            //include-quiz
            element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
            browser.sleep(1000)
            element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
            browser.sleep(1000)
            //DONE
            element(by.xpath("//button[@class='btn btn-secondary mr-2']")).click();
            browser.sleep(3000)
            //log-out
            element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid ng-star-inserted']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Log Out')]")).click();
            browser.sleep(3000)
            browser.navigate().refresh();
            browser.sleep(3000)
            //Log-in
            //Monday
            element(by.xpath("//input[@id='email']")).click().sendKeys('sqa9512@gmail.com')
            browser.sleep(1000)
            element(by.xpath("//a[@class='btn btn-secondary w-100']")).click();
            browser.sleep(9000)
            element(by.xpath("//input[@id='password']")).clear().sendKeys('admin123')
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary w-100 font-weight-medium']")).click();
            browser.sleep(15000)
            setTimeout(function () {
                //done();
            }, 25000);
            expect(element(by.xpath("//h1[contains(text(),'Explore Categories')]")).getText()).toEqual('Explore Categories');
            //assign to me
            element(by.xpath("//i[@class='icon icon-dashboard']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Assigned to Me (View)')]")).click();
            browser.sleep(3000)
            //thumbs-up/down
            element(by.xpath("//i[@class='icon-thumbs-up']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-thumbs-down']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-thumbs-up']")).click();
            browser.sleep(2000)
            //Start-quiz
            element(by.xpath("//button[@class='btn btn-sm btn-success d-inline-block font-12px']")).click();
            browser.sleep(3000)
            //1
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(1) div.card-header button.btn.btn-link.collapsed.ng-star-inserted > i.pe-7s-angle-down.pe-standard.mr-2.ng-star-inserted")).click();
            browser.sleep(3000)
            element(by.xpath("//div[contains(text(),'Answer--2')]")).click();
            browser.sleep(3000)
            //2
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
            browser.sleep(3000)
            //3
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
            browser.sleep(3000)
            //4
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
            browser.sleep(3000)
            //5
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(3)")).click();
            browser.sleep(3000)
            //6
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
            browser.sleep(3000)
            //7
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
            browser.sleep(3000)
            //8
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
            browser.sleep(3000)
            //9
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(9) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(9) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
            browser.sleep(3000)

            //SUBMIT
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(6000)

            //Confirm-complete-All
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)

            // QUIZ RESULT
            element(by.xpath("//button[@class='btn btn-light']")).click();
            browser.sleep(3000)

            // //Confirm-without-complete-All
            // element(by.xpath("//button[contains(text(),'YES')]")).click();
            // browser.sleep(3000)

        });
        //2-Without-Complete-All
        it('Simple-Doc>Add-Quiz>2', function () {
            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(3000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Create Document')]")).click();
            browser.sleep(6000)
            element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple_Doc_With_Quiz-2")
            browser.sleep(9000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Add quiz Body")
            browser.sleep(1000)
            //Category-click
            element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
            browser.sleep(1000)
            //Accounting
            element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,750);');
            element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
            browser.sleep(2000)
            //ADD-QUIZ
            element(By.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/form[1]/div[1]/div[2]/div[1]/div[1]/button[1]")).click();
            browser.sleep(3000)
            //Question-1
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(1000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(1000)
            //Question-2
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--2")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(1000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/div[1]/button[1]")).click();
            browser.sleep(1000)
            //Question-3
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--3")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(1000)
            element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/ngb-accordion[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/input[1]")).click().sendKeys("Ans--3")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(1000)
            //Question-4
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--4")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(1000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(1000)
            //Question-5
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--5")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
            browser.sleep(1000)
            element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(1000)
            //Question-6
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--6")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(1000)
            //Question-7
            element(By.xpath("//input[@placeholder='Enter question here']")).click();
            element(By.xpath("//input[@placeholder='Enter question here']")).sendKeys("Question--7")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(1000)
            //Question-8
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--8")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //ADD NEW QUESTION
            element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
            browser.sleep(1000)
            //Question-9
            element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--9")
            browser.sleep(1000)
            element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
            browser.sleep(1000)
            element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
            browser.sleep(1000)
            //check
            element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            //Save-Quiz
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            //publish
            element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-link']")).click();
            browser.sleep(3000)

        });
        it('Simple-Doc>Answer-Quiz>2', function () {
            //Need-Approval
            element(by.xpath("//i[@class='icon icon-dashboard']")).click();
            browser.sleep(3000)
            element(by.xpath("//i[@class='icon-refresh icon-mid']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Need Approval')]")).click();
            browser.sleep(15000)
            element(by.xpath("/html/body/root/dashboard-layout/div/perfect-scrollbar/div/div[1]/div/div/div/app-dashbaord/div[1]/div[3]/div[2]/document-details/div[1]/div/button[2]")).click();
            browser.sleep(3000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)
            //all-content
            element(by.xpath("//a[contains(text(),'All Contents')]")).click();
            browser.sleep(6000)
            element(by.xpath("//div[@class='card card-flush card-selected ng-star-inserted']//span[@class='check']")).click();
            browser.sleep(3000)
            //assign
            element(by.xpath("//i[@class='icon icon-user-add']")).click();
            browser.sleep(3000)
            element(by.xpath("//input[@id='user']")).click().sendKeys("Test")
            browser.sleep(2000)
            element(by.xpath("//i[contains(text(),'(rlmobile20@gmail.com)')]")).click();
            browser.sleep(3000)
            element(by.xpath("//textarea[@id='comment']")).click().sendKeys("Answer the following Quiz")
            //include-quiz
            element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
            browser.sleep(1000)
            element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
            browser.sleep(1000)
            //DONE
            element(by.xpath("//button[@class='btn btn-secondary mr-2']")).click();
            browser.sleep(3000)
            //log-out
            element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid ng-star-inserted']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Log Out')]")).click();
            browser.sleep(3000)
            browser.navigate().refresh();
            browser.sleep(3000)
            //Log-in
            //Monday
            element(by.xpath("//input[@id='email']")).click().sendKeys('rlmobile20@gmail.com')
            browser.sleep(1000)
            element(by.xpath("//a[@class='btn btn-secondary w-100']")).click();
            browser.sleep(9000)
            element(by.xpath("//input[@id='password']")).clear().sendKeys('admin123')
            browser.sleep(1000)
            element(by.xpath("//button[@class='btn btn-secondary w-100 font-weight-medium']")).click();
            browser.sleep(9000)
            setTimeout(function () {
                //done();
            }, 13000);
            expect(element(by.xpath("//h1[contains(text(),'Explore Categories')]")).getText()).toEqual('Explore Categories');
            //assign to me
            element(by.xpath("//i[@class='icon icon-dashboard']")).click();
            browser.sleep(3000)
            element(by.xpath("//a[contains(text(),'Assigned to Me (View)')]")).click();
            browser.sleep(3000)
            //thumbs-up/down
            element(by.xpath("//i[@class='icon-thumbs-up']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-thumbs-down']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon-thumbs-up']")).click();
            browser.sleep(2000)
            //Start-quiz
            element(by.xpath("//button[@class='btn btn-sm btn-success d-inline-block font-12px']")).click();
            browser.sleep(3000)
            //1
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(1) div.card-header button.btn.btn-link.collapsed.ng-star-inserted > i.pe-7s-angle-down.pe-standard.mr-2.ng-star-inserted")).click();
            browser.sleep(3000)
            element(by.xpath("//div[contains(text(),'Answer--2')]")).click();
            browser.sleep(3000)
            //2
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
            browser.sleep(3000)
            //3
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
            browser.sleep(3000)
            //4
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
            browser.sleep(3000)
            //5
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(3)")).click();
            browser.sleep(3000)
            //6
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
            browser.sleep(3000)
            //7
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
            browser.sleep(3000)
            //8
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
            browser.sleep(3000)
            element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
            browser.sleep(3000)

            //SUBMIT
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(6000)

            //Confirm-without-complete-All
            element(by.xpath("//button[contains(text(),'YES')]")).click();
            browser.sleep(3000)

        });
        it('Assign to Me_View > Delete', function () {
            element(by.xpath("//a[contains(text(),'Assigned to Me (View)')]")).click();
            browser.sleep(3000)
            element(by.xpath("//div[@class='card card-flush card-selected ng-star-inserted']//span[@class='check']")).click();
            browser.sleep(2000)
            element(by.xpath("//i[@class='icon icon-delete']")).click();
            browser.sleep(2000)
            element(by.xpath("//button[@class='btn btn-secondary']")).click();
            browser.sleep(3000)

        });


        // //3
        // it('Simple-Doc>Add-Quiz>3', function () {
        //     browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
        //     browser.sleep(3000)
        //     element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//a[contains(text(),'Create Document')]")).click();
        //     browser.sleep(6000)
        //     element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple_Doc_With_Quiz-2")
        //     browser.sleep(9000)
        //     element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Add quiz Body")
        //     browser.sleep(1000)
        //     //Category-click
        //     element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
        //     browser.sleep(1000)
        //     //Accounting
        //     element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
        //     browser.sleep(1000)
        //     browser.executeScript('window.scrollTo(0,750);');
        //     element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
        //     browser.sleep(2000)
        //     //ADD-QUIZ
        //     element(By.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/form[1]/div[1]/div[2]/div[1]/div[1]/button[1]")).click();
        //     browser.sleep(3000)
        //     //Question-1
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(1000)
        //     //Question-2
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--2")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/div[1]/button[1]")).click();
        //     browser.sleep(1000)
        //     //Question-3
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--3")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/ngb-accordion[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(1000)
        //     //Question-4
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--4")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(1000)
        //     //Question-5
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--5")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(1000)
        //     //Question-6
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--6")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(1000)
        //     //Question-7
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click();
        //     element(By.xpath("//input[@placeholder='Enter question here']")).sendKeys("Question--7")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(1000)
        //     //Question-8
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--8")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(1000)
        //     //Question-9
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--9")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //Save-Quiz
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(3000)
        //     //publish
        //     element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//button[@class='btn btn-link']")).click();
        //     browser.sleep(3000)

        // });
        // it('Simple-Doc>Answer-Quiz>3', function () {
        //     //Need-Approval
        //     element(by.xpath("//i[@class='icon icon-dashboard']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//i[@class='icon-refresh icon-mid']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//a[contains(text(),'Need Approval')]")).click();
        //     browser.sleep(6000)
        //     element(by.xpath("/html/body/root/dashboard-layout/div/perfect-scrollbar/div/div[1]/div/div/div/app-dashbaord/div[1]/div[3]/div[2]/document-details/div[1]/div/button[2]")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(3000)
        //     //all-content
        //     element(by.xpath("//a[contains(text(),'All Contents')]")).click();
        //     browser.sleep(6000)
        //     element(by.xpath("//div[@class='card card-flush card-selected ng-star-inserted']//span[@class='check']")).click();
        //     browser.sleep(3000)
        //     //assign
        //     element(by.xpath("//i[@class='icon icon-user-add']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//input[@id='user']")).click().sendKeys("shahid")
        //     browser.sleep(3000)
        //     element(by.xpath("//i[contains(text(),'(sqa9512@gmail.com)')]")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//textarea[@id='comment']")).click().sendKeys("Answer the following Quiz")
        //     //include-quiz
        //     element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
        //     browser.sleep(1000)
        //     //DONE
        //     element(by.xpath("//button[@class='btn btn-secondary mr-2']")).click();
        //     browser.sleep(3000)
        //     //log-out
        //     element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid ng-star-inserted']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//a[contains(text(),'Log Out')]")).click();
        //     browser.sleep(3000)
        //     browser.navigate().refresh();
        //     browser.sleep(3000)
        //     //Log-in
        //     //Monday
        //     element(by.xpath("//input[@id='email']")).click().sendKeys('sqa9512@gmail.com')
        //     browser.sleep(1000)
        //     element(by.xpath("//a[@class='btn btn-secondary w-100']")).click();
        //     browser.sleep(9000)
        //     element(by.xpath("//input[@id='password']")).clear().sendKeys('admin123')
        //     browser.sleep(1000)
        //     element(by.xpath("//button[@class='btn btn-secondary w-100 font-weight-medium']")).click();
        //     browser.sleep(9000)
        //     setTimeout(function () {
        //         //done();
        //     }, 13000);
        //     expect(element(by.xpath("//h1[contains(text(),'Explore Categories')]")).getText()).toEqual('Explore Categories');
        //     //assign to me
        //     element(by.xpath("//i[@class='icon icon-dashboard']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//a[contains(text(),'Assigned to Me (View)')]")).click();
        //     browser.sleep(3000)
        //     //thumbs-up/down
        //     element(by.xpath("//i[@class='icon-thumbs-up']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon-thumbs-down']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon-thumbs-up']")).click();
        //     browser.sleep(2000)
        //     //Start-quiz
        //     element(by.xpath("//button[@class='btn btn-sm btn-success d-inline-block font-12px']")).click();
        //     browser.sleep(3000)
        //     //1
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(1) div.card-header button.btn.btn-link.collapsed.ng-star-inserted > i.pe-7s-angle-down.pe-standard.mr-2.ng-star-inserted")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//div[contains(text(),'Answer--2')]")).click();
        //     browser.sleep(3000)
        //     //2
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
        //     browser.sleep(3000)
        //     //3
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
        //     browser.sleep(3000)
        //     //4
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(3000)
        //     //5
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(3)")).click();
        //     browser.sleep(3000)
        //     //6
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(3000)
        //     //7
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(3000)
        //     //8
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(3000)
        //     //9
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(9) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(9) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(3000)

        //     //SUBMIT
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(6000)

        //     //Confirm-complete-All
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(3000)

        //     // QUIZ RESULT
        //     element(by.xpath("//button[@class='btn btn-light']")).click();
        //     browser.sleep(3000)

        //     // //Confirm-without-complete-All
        //     // element(by.xpath("//button[contains(text(),'YES')]")).click();
        //     // browser.sleep(3000)

        // });
        // //4-without-complete-All
        // it('Simple-Doc>Add-Quiz>4', function () {
        //     browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
        //     browser.sleep(3000)
        //     element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//a[contains(text(),'Create Document')]")).click();
        //     browser.sleep(6000)
        //     element(by.xpath("//div[@class='container-fluid']//div[1]//label[1]//img[1]")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//button[@class='btn btn-md btn-secondary']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//input[@placeholder='Enter Title']")).click().sendKeys("Simple_Doc_With_Quiz-2")
        //     browser.sleep(9000)
        //     element(by.xpath("//div[@class='fr-element fr-view']//p")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[@class='fr-element fr-view']//p")).sendKeys("Add quiz Body")
        //     browser.sleep(1000)
        //     //Category-click
        //     element(by.xpath("//a[@class='btn btn-light btn-with-icon w-100 cursor-pointer']")).click();
        //     browser.sleep(1000)
        //     //Accounting
        //     element(by.xpath('//li[1]//div[1]//div[1]//label[1]//span[1]')).click();
        //     browser.sleep(1000)
        //     browser.executeScript('window.scrollTo(0,750);');
        //     element(by.xpath('/html/body/ngb-modal-window/div/div/div[2]/div[3]/button[1]')).click();
        //     browser.sleep(2000)
        //     //ADD-QUIZ
        //     element(By.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/form[1]/div[1]/div[2]/div[1]/div[1]/button[1]")).click();
        //     browser.sleep(3000)
        //     //Question-1
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(1000)
        //     //Question-2
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--2")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/div[1]/button[1]")).click();
        //     browser.sleep(1000)
        //     //Question-3
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--3")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/quiz-create[1]/div[2]/div[1]/div[1]/form[1]/ngb-accordion[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(1000)
        //     //Question-4
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--4")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(1000)
        //     //Question-5
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--5")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     element(by.xpath("//button[@class='btn btn-light py-0 btn-with-icon ml-38']")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//div[3]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--3")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[3]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(1000)
        //     //Question-6
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--6")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(1000)
        //     //Question-7
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click();
        //     element(By.xpath("//input[@placeholder='Enter question here']")).sendKeys("Question--7")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(1000)
        //     //Question-8
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--8")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //ADD NEW QUESTION
        //     element(By.xpath("/html/body/ngb-modal-window/div/div/quiz-create/div[2]/div/div/form/div[1]/button")).click();
        //     browser.sleep(1000)
        //     //Question-9
        //     element(By.xpath("//input[@placeholder='Enter question here']")).click().sendKeys("Question--9")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='form-group']//div[1]//div[1]//div[2]//input[1]")).click().sendKeys("Ans--1")
        //     browser.sleep(1000)
        //     element(By.xpath("//div[@class='d-flex align-items-start mb-2 ng-untouched ng-pristine ng-invalid']//input[@placeholder='Type your answer']")).click().sendKeys("Answer--2")
        //     browser.sleep(1000)
        //     //check
        //     element(by.xpath("//div[@class='ng-star-inserted ng-dirty ng-touched ng-valid']//div[2]//div[1]//div[1]//label[1]//span[1]")).click();
        //     browser.sleep(1000)
        //     //Save-Quiz
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(3000)
        //     //publish
        //     element(by.xpath("/html[1]/body[1]/root[1]/dashboard-layout[1]/div[1]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-create-fresh[1]/section[1]/div[1]/div[1]/button[4]")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//button[@class='btn btn-link']")).click();
        //     browser.sleep(3000)

        // });
        // it('Simple-Doc>Answer-Quiz>4', function () {
        //     //Need-Approval
        //     element(by.xpath("//i[@class='icon icon-dashboard']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//i[@class='icon-refresh icon-mid']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//a[contains(text(),'Need Approval')]")).click();
        //     browser.sleep(15000)
        //     element(by.xpath("/html/body/root/dashboard-layout/div/perfect-scrollbar/div/div[1]/div/div/div/app-dashbaord/div[1]/div[3]/div[2]/document-details/div[1]/div/button[2]")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(3000)
        //     //all-content
        //     element(by.xpath("//a[contains(text(),'All Contents')]")).click();
        //     browser.sleep(6000)
        //     element(by.xpath("//div[@class='card card-flush card-selected ng-star-inserted']//span[@class='check']")).click();
        //     browser.sleep(3000)
        //     //assign
        //     element(by.xpath("//i[@class='icon icon-user-add']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//input[@id='user']")).click().sendKeys("Test")
        //     browser.sleep(2000)
        //     element(by.xpath("//i[contains(text(),'(rlmobile20@gmail.com)')]")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//textarea[@id='comment']")).click().sendKeys("Answer the following Quiz")
        //     //include-quiz
        //     element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
        //     browser.sleep(1000)
        //     element(by.xpath("//label[contains(text(),'Include Quiz')]")).click();
        //     browser.sleep(1000)
        //     //DONE
        //     element(by.xpath("//button[@class='btn btn-secondary mr-2']")).click();
        //     browser.sleep(3000)
        //     //log-out
        //     element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid ng-star-inserted']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//a[contains(text(),'Log Out')]")).click();
        //     browser.sleep(3000)
        //     browser.navigate().refresh();
        //     browser.sleep(3000)
        //     //Log-in
        //     //Monday
        //     element(by.xpath("//input[@id='email']")).click().sendKeys('rlmobile20@gmail.com')
        //     browser.sleep(1000)
        //     element(by.xpath("//a[@class='btn btn-secondary w-100']")).click();
        //     browser.sleep(9000)
        //     element(by.xpath("//input[@id='password']")).clear().sendKeys('admin123')
        //     browser.sleep(1000)
        //     element(by.xpath("//button[@class='btn btn-secondary w-100 font-weight-medium']")).click();
        //     browser.sleep(9000)
        //     setTimeout(function () {
        //         //done();
        //     }, 13000);
        //     expect(element(by.xpath("//h1[contains(text(),'Explore Categories')]")).getText()).toEqual('Explore Categories');
        //     //assign to me
        //     element(by.xpath("//i[@class='icon icon-dashboard']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//a[contains(text(),'Assigned to Me (View)')]")).click();
        //     browser.sleep(3000)
        //     //thumbs-up/down
        //     element(by.xpath("//i[@class='icon-thumbs-up']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon-thumbs-down']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon-thumbs-up']")).click();
        //     browser.sleep(2000)
        //     //Start-quiz
        //     element(by.xpath("//button[@class='btn btn-sm btn-success d-inline-block font-12px']")).click();
        //     browser.sleep(3000)
        //     //1
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(1) div.card-header button.btn.btn-link.collapsed.ng-star-inserted > i.pe-7s-angle-down.pe-standard.mr-2.ng-star-inserted")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//div[contains(text(),'Answer--2')]")).click();
        //     browser.sleep(3000)
        //     //2
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(2) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
        //     browser.sleep(3000)
        //     //3
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(3) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(5)")).click();
        //     browser.sleep(3000)
        //     //4
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(4) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(3000)
        //     //5
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.card-header > button.btn.btn-link.ng-star-inserted.collapsed")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(5) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(3)")).click();
        //     browser.sleep(3000)
        //     //6
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(6) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(3000)
        //     //7
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(7) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(3000)
        //     //8
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.card-header > button.btn.btn-link.collapsed.ng-star-inserted")).click();
        //     browser.sleep(3000)
        //     element(by.css("body.modal-open:nth-child(2) ngb-modal-window.modal.fade.show.d-block.modal-xl:nth-child(11) div.modal-dialog.modal-lg.modal-dialog-centered div.modal-content div.modal-body div.row div.col-12.px-0.mb-3 ngb-accordion.faqAccordion.quizAnswers.accordion div.card.ng-star-inserted:nth-child(8) div.collapse.show.ng-star-inserted div.card-body > div.badge.border.border-lochmara.rounded-pill.cursor-pointer.mr-2.mb-2.px-3.ng-star-inserted:nth-child(4)")).click();
        //     browser.sleep(3000)

        //     //SUBMIT
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(6000)

        //     //Confirm-without-complete-All
        //     element(by.xpath("//button[contains(text(),'YES')]")).click();
        //     browser.sleep(3000)

        // });
        // it('Assign to Me_View > Delete', function () {

        //     element(by.xpath("//a[@class='d-flex justify-content-between ng-star-inserted active']")).click();
        //     browser.sleep(3000)
        //     element(by.xpath("//div[@class='form-check without-label mr-4 mt-1']//span[@class='check']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//i[@class='icon icon-delete']")).click();
        //     browser.sleep(2000)
        //     element(by.xpath("//button[@class='btn btn-secondary']")).click();
        //     browser.sleep(3000)

        // });









    };

};

module.exports = new simpleDoc();