let shareURL = function () {

    this.shareURL = function () {

        it('ShareURL', function () {

            element(by.xpath("//i[@class='icon icon-share hvr-icon']")).click();
            browser.sleep(1000)
            element(by.xpath("//input[@id='user']")).sendKeys("shahid")
            browser.sleep(2000)

            //sqa
            //element(by.xpath("//i[contains(text(),'(sqa9512@gmail.com)')]")).click();

            //quarto/qarto
            element(by.xpath("//i[contains(text(),'(shahid@redlimesolutions.com)')]")).click();
            browser.sleep(2000)
            element(by.xpath("//textarea[@id='comment']")).click().sendKeys("Test Comments")
            browser.sleep(1000)
            element(by.xpath("/html/body/ngb-modal-window/div/div/div[2]/div/div/form/button[1]")).click();
            browser.sleep(8000)

        });

    };

};
module.exports = new shareURL();