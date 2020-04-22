var osmosis = require('osmosis');

exports.scrapeData = () => {
    let result = [];
    return new Promise( (resolve, reject) => {
        osmosis
        .get('https://vnexpress.net/')
        .find('.title-news')
        .set({
            title: 'a@title',
            url: 'a@href'
        })
        .follow('a@href')
        .set({
            author: '.date',
            date: 'p.Normal strong'
        })
        .data(item => result.push(item))
        .done( () => resolve(result))
    })
}


