let userAssign = function () {

    this.assignusertoCreate = function () {

        it('ASSIGN TO CREATE', function () {

            browser.actions().mouseMove(element(by.xpath("//i[@class='icon icon-add hvr-icon']"))).perform();
            browser.sleep(1000)
            element(by.xpath("//i[@class='icon icon-add hvr-icon']")).click();
            browser.sleep(2000)
            element(by.xpath("//a[contains(text(),'Assign To Create')]")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@placeholder='Please add a subject']")).click().sendKeys("Subject")
            element(by.xpath("//input[@id='user']")).click().sendKeys("shahid")
            browser.sleep(2000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/document-write/div[2]/div/div/form/div[2]/ul/li")).click();
            browser.sleep(1000)
            element(by.xpath("//textarea[@placeholder='Type your comments']")).click().sendKeys("Test Comments")
            browser.sleep(3000)
            element(by.xpath("//i[@class='icon-due-date icon-large text-success align-middle']")).click();
            browser.sleep(2000)
            element(by.xpath("//ngb-modal-window[@class='modal fade show d-block']//div[3]//div[2]//div[1]")).click();
            browser.sleep(1000)
            element(by.xpath("//div[@class='btn btn-light btn-with-icon']")).click();
            browser.sleep(1000)
            element(by.xpath("//li[1]//div[1]//div[1]//label[1]//span[1]")).click();
            browser.sleep(1000)
            browser.executeScript('window.scrollTo(0,1250);');
            browser.sleep(1000)
            element(by.xpath("//body[@class='modal-open']/ngb-modal-window[@class='modal fade show d-block']/div[@class='modal-dialog modal-dialog-centered']/div[@class='modal-content']/div[@class='modal-body']/div/button[1]")).click();
            browser.sleep(2000)
            element(by.xpath("//button[contains(text(),'Done')]")).click();
            browser.sleep(8000)

        });



    };

};

module.exports = new userAssign();