const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/cucumber-json/',
    reportPath: 'cypress/reports/report.html',
    metadata: {
        browser: {
            name: 'chrome',
            version: '101'
        },
        device: 'Test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'test runner info',
        data: [
            { label: 'Project', value: 'cypress-javascript-pom' },
            { label: 'Release', value: '1.0.0' }
        ]
    }
});