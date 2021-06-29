const { browser } = require("protractor");

let blog = function () {

    this.blogClick = function () {
        it('Blog>Read More', function () {
            el = element(by.xpath("//a[contains(text(),'blog')]")).click();
            browser.sleep(2000)
            el.getText().then(function (text) { expect(text).toContain('BLOG') });
            browser.sleep(3000)
            browser.findElement(by.xpath("//a[contains(text(),'Read More')]")).click();
            browser.sleep(3000)
            //Home
            browser.findElement(by.xpath("//header/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[1]/a[1]/span[1]")).click();
            browser.sleep(3000)



            
            
        });
    };
};
module.exports = new blog();