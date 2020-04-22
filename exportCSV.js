const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './vnExpress.csv',
    header: [
        {id: 'url', title: 'URL'},
        {id: 'title', title: 'Title'},
        {id: 'author', title: 'Author'},
        {id: 'date', title: 'date'}
    ]
});
 
const records = [
    {name: 'Bob',  lang: 'French, English'},
    {name: 'Mary', lang: 'English'}
]; // example

exports.exportFileCSV = async (data) => {
    await csvWriter.writeRecords(data);
    console.log('done'); 
} 