let feature = function () {

    this.featureClick = function () {
        it('Click>Features', function () {
            el = element(by.xpath("//a[contains(text(), 'features')]")).click();
            browser.sleep(2000)
            el.getText().then(function (text) { expect(text).toContain('QUARTO FEATURES') });
        });
    };
};
module.exports = new feature();