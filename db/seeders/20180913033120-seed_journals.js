'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('journals', 
    [
      {
        "name": "Majalah Ilmiah Teknologi Elektro",
        "description": "Journal of Electrical Technology is peer review journal, published twice a year by the Department of Electrical and Computer Engineering, Faculty of Engineering, Universitas Udayana. This journal discusses the scientific works containing results of resear",
        "image_url": "cover_mite.jpg"
      },
      {
        "name": "Current Trends in Aquatic Science",
        "description": "Current Trends in Aquatic Science is a peer-reviewed, open access journal, published by the Study Program of Aquatic Resources Management, Faculty of Marine and Fisheries, University of Udayana. CTAS publishes original research results and reviews article",
        "image_url": "cover_ctas.jpg"
      },
      {
        "name": "Journal of Marine Research and Technology",
        "description": "The Journal of Marine Research and Technology (JMRT) is an open access, scientific journal that aims to publish the dynamic of the coastal and ocean, its ecosystems and coastal environment, and Observation technology. JMRT is a peer-reviewed journal publi",
        "image_url": "cover_marine.jpg"
      },
      {
        "name": "Lontar Komputer : Jurnal Ilmiah Teknologi Informasi",
        "description": "Lontar Komputer [ISSN Print 2088-1541] [ISSN Online 2541-5832] is a journal focuses on the theory, practice and methodology of all aspects of technology in the field of computer science and engineering as well as productive and innovative ideas related to",
        "image_url": "cover_lontar.jpg"
      },
      {
        "name": "Jurnal IPTA",
        "description": "Jurnal IPTA is peer-reviewed journal and published twice a year on July and December. Jurnal IPTA published by The Department of Tours and Travel Studies, Faculty of Tourism, Udayana University, Denpasar Bali with online ISSN: 2548-7930 and print ISSN: 23",
        "image_url": "cover_ipta.png"
      },
      {
        "name": "Jurnal Veteriner",
        "description": "Jurnal Veteriner is a scientific journal encompassing animal science aspects, published since 2000, and until now is consistently published four times a year in March, June, September, and December by Faculty of Veterinary Medicine, Udayana University",
        "image_url": "cover_veteriner.jpg"
      },
      {
        "name": "Buletin Veteriner Udayana",
        "description": "Buletin Veteriner Udayana is  peer review journal, published by the Faculty of Veterinary Medicine Udayana University as a medium of information and the development of veterinary science. Published twice throughout the year every February and August.  Thi",
        "image_url": "cover_buletin_veteriner.png"
      },
      {
        "name": "MATRIK: Jurnal Manajemen",
        "description": "Strategi Bisnis dan Kewirausahaan (p-ISSN 1978-2853, e-ISSN 2302-8890) aims to serve as a medium of information and exchange of scientific articles between teaching staff, alumni, students, practitioners and observers of science in accounting and business",
        "image_url": "cover_matrix.jpg"
      },
      {
        "name": "Buletin Studi Ekonomi",
        "description": "rint ISSN 1410-4628 and Online ISSN 2580-5312 published by the Faculty of Economics, University of Udayana. Published biannually in February and August. Contain writings lifted from the results of research in economics.",
        "image_url": "cover_buletin_ekonomi.jpg"
      },
      {
        "name": "Jurnal Ilmiah Akuntansi dan Bisnis",
        "description": "Jurnal Ilmiah Akuntansi dan Bisnis (p-ISSN 2302-514X, e-ISSN 2303-1018) aims to serve as a medium of information and exchange of scientific articles between teaching staff, alumni, students, practitioners and observers of science in accounting and busines",
        "image_url": "cover_akuntansi.jpg"
      }
    ]
    );
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
