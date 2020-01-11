import { strictEqual } from 'assert'

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
})