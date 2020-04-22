const {scrapeData} = require('./scraping')
const {exportFileCSV} = require('./exportCSV')
scrapeData().then( async (result) => {
    await exportFileCSV(result);
})