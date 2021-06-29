let profileReadingLog = function(){
    this.profileReadingLog=function(){

        
    it('Reading Log', function(){
        element(by.xpath("//a[@class='nav-link user-circle']//img[@class='img-fluid']")).click();
        browser.sleep(2000)
        element(by.xpath("//a[contains(text(),'Reading Log')]")).click();
        browser.sleep(2000)

        });

    };
};
module.exports = new profileReadingLog();