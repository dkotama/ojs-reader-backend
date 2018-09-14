'use strict';

const Promis = require('bluebird');

module.exports = {
  up: (queryInterface, Sequelize) => {
    var insertData = [];
    var minimumIssue = 5;
    var maxJournals = 10;
    var randMonth = ['Januari','Februari', 'Maret',
                     'April', 'Mei', 'Juni', 'Juli',
                     'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    var id = 1;

    for (var j = 1; j <= maxJournals; j++) { 
      for (var i = 1; i <= minimumIssue; i++) { 
        var issue = {};
        issue.id = id;
        issue.volume = i;
        issue.number = i;
        issue.year = 2018;
        issue.start_month = randMonth[i];
        issue.end_month = randMonth[i+1];
        issue.published_date = "2018-07-06";
        issue.journal_id = j;

        insertData.push(issue);
        id++;
      }
    }

    return queryInterface.bulkInsert('issues', insertData);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('issues', null, {});
  }
};
