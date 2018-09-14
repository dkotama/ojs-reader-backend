'use strict';

var chance = require('chance').Chance();

module.exports = {
  up: (queryInterface, Sequelize) => {
    var maxIssue = 50;
    var randPage= ['1-10','11-20', '21-30',
                     '31-40', '41-50', '51-60', '61-70',
                     '71-80', '81-90', '91-100'];
    var id = 1;
    var promise;

    for (var j = 1; j <= maxIssue; j++) { 
      var tempData = [];

      for (var i = 1; i <= randPage.length; i++) { 

        var paper = {};
        paper.id = id;
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
        paper.page = randPage[i-1];
        paper.url = "sample_pdf.pdf";
        id++;
        tempData.push(paper);
      }
      
      promise = queryInterface.bulkInsert('papers', tempData);
    }

    return promise;
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('papers', null, {});
  }
};
