let conusSubmit = function () {

    this.contactSubmit = function () {

        it('Contact US>Submit', function () {
            element(by.xpath("//body/section[1]/section[1]/div[1]/div[1]/div[1]/a[2]")).click();
            browser.sleep(3000)
            element(by.css('#name')).sendKeys('Jihan Emon')
            element(by.css('#email1')).sendKeys('jihan@redlimesolutions.com')
            element(by.css('#companyname')).sendKeys('Redlime Solution')
            element(by.css('#message')).clear().sendKeys('Send Me a Demo Copy')
            element(by.xpath("//span[contains(text(),'submit')]")).click();
            browser.sleep(6000)
            browser.findElement(by.xpath("//body/div[3]/a[1]/span[1]")).click();
            browser.sleep(3000)
        });

    };
};



module.exports = new conusSubmit();