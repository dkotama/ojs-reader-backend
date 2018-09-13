'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('journals', [{
      name: "Majalah Ilmiah Teknologi Elektro",
      description: "Journal of Electrical Technology is peer review journal, published twice a year by the Department of Electrical and Computer Engineering, Faculty of Engineering, Universitas Udayana. This journal discusses the scientific works containing results of research in the field of electrical, include power systems, telecommunications, informatics, and electronics. Authors are expected to include original scientific papers in accordance with the scope of the discussion of this journal including all aspects of the theory and practice are used.",
      image_url: "cover_mite.jpg"
    },{
      name: "Current Trends in Aquatic Science",
      description: "Current Trends in Aquatic Science is a peer-reviewed, open access journal, published by the Study Program of Aquatic Resources Management, Faculty of Marine and Fisheries, University of Udayana. CTAS publishes original research results and reviews articles in the field of marine resource management. The scope of CTAS covers, but is not limited to the following areas: conservation of marine resources, management of coastal and marine areas, pest and disease control of aquatic organisms, marine and fisheries biotechnology, fish breeding and genetics, freshwater aquaculture, brackish water cultivation, aquaculture marine, fish immunology and other aquatic organisms, aquaculture engineering, utilization of remote sensing on marine and coastal management, coastal and marine ecosystem conservation, watershed pollution control, fishery product safety, ocean phenomena modelling, utilization of micro benthos, marine algae, marine protected area, primary productivity, as well as remote sensing and GIS applications in the field.",
      image_url: "cover_ctas.jpg"
    },{
      name: "Journal of Marine Research and Technology",
      description: "The Journal of Marine Research and Technology (JMRT) is an open access, scientific journal that aims to publish the dynamic of the coastal and ocean, its ecosystems and coastal environment, and Observation technology. JMRT is a peer-reviewed journal publishes original articles and critical reviews of current issues in marine science and technology. The range of topics extends from research in Oceanography, marine habitats, living resources, management and conservation issues related to the marine resources. This includes remote sensing, ocean modelling, geographic information System (GIS), coastal engineering, coastal processes, marine instrument, ecology, genetics, marine pollution, fisheries, marine ecotourism, and it's economic and social. JMRT provides a forum for the discussion and sharing all the latest issues in marine research and technology. Editorial manager system is an online manuscript submission, review and tracking system.",
      image_url: "cover_marine.jpg"
    },{
      name: "Lontar Komputer : Jurnal Ilmiah Teknologi Informasi",
      description: "Lontar Komputer [ISSN Print 2088-1541] [ISSN Online 2541-5832] is a journal focuses on the theory, practice and methodology of all aspects of technology in the field of computer science and engineering as well as productive and innovative ideas related to new technology and information systems. This journal covers research orginal of paper that has not been published and have been through a peer-reviewed journal. Lontar Komputer published three times a year by Research institutions and community service, University of Udayana. Lontar Komputer already indexing in Scientific Journal Impact Factor with impact Value ",
      image_url: "cover_lontar.jpg"
    }
  ]);
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
