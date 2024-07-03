const { faker } = require('@faker-js/faker');
//const faker = require("faker");
const articles = [];

for(let i = 0; i < 20; i++){
    articles.push({
        title:faker.lorem.sentence(),
        subTitle:faker.lorem.sentence(),
        data:faker.date.past().tostring,
        content:faker.lorem.paragraphs(),
        publish:[true, false][
            Math.floor(Math.random()*[true, false].length)
        ],
        url:`/articles/${i}`
    });
}

module.exports = articles;