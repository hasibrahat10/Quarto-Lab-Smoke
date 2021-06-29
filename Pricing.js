let pricing = function () {

    this.pricingClick = function () {
        it('Click>Pricing', function () {
            el = element(by.css('header.fixed-header nav.navbar-main ul:nth-child(1) li:nth-child(2) > a:nth-child(1)')).click();
            browser.sleep(1000)
            el.getText().then(function (text) { expect(text).toContain("PRICING") });
        });

    };
};



module.exports = new pricing();