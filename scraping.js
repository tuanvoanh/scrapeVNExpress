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
            date1: '.date',
            date2: '.time',
            author: 'p strong:last'
        })
        .data(item => {
          result.push({
            url: item.url,
            title: item.title,
            date: item.date1 ? item.date1 : item.date2,
            author: item.author
          })
        })       
        .done( () => resolve(result))
    })
  }
