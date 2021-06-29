let analytics = function () {
    this.analytics = function () {

        it('Analytics', function () {

            element(by.xpath("//i[contains(@class,'icon pe-7s-graph3')]")).click();
            browser.sleep(4000)
        });



    };
};
module.exports = new analytics();
