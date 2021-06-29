let feature = function () {

    this.featureClick = function () {
        it('Click>Features', function () {
            el = element(by.css('header:nth-child(1) nav.navbar-main ul:nth-child(1) li:nth-child(1) > a:nth-child(1)')).click();
            browser.sleep(2000)
            el.getText().then(function (text) { expect(text).toContain('FEATURES') });
        });
    };
};
module.exports = new feature();