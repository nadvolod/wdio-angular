const assert = require('assert');

describe('my-first-project page', () => {
    it('should render', () => {
        browser.url('/');
        const title = browser.getTitle();
        assert.equal(title, 'MyFirstProject');
    });
});