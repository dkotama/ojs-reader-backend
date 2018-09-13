'use strict';

var chance = require('chance').Chance();

module.exports = {
  up: (queryInterface, Sequelize) => {
    var insertData = [];
    var minimumPaper = 5;
    var maxIssue = 50;
    var randPage= ['1-10','11-20', '21-30',
                     '31-40', '41-50', '51-60', '61-70',
                     '71-80', '81-90', '91-100'];

    for (var j = 1; j <= maxIssue; j++) { 
      for (var i = 0; i < randPage.length; i++) { 
        var paper = {};
        paper.title = chance.sentence();
        var authors = "";

        for (var a = 0; a < 3; a++) {  // random authors
          authors += chance.name()

          if (a < 2) {
            authors += ", "
          }
        }
        paper.authors  = authors;
        paper.issue_id = j;
        paper.abstract = chance.sentence({words: 30});
        paper.page = randPage[i];
        paper.url = "sample_pdf.pdf";

        insertData.push(paper);
      }
    }
    return queryInterface.bulkInsert('papers', insertData);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
