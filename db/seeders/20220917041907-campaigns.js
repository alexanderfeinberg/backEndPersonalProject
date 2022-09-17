'use strict';
const { Campaign } = require('../models')
const campaigns = [
  {
    campaignName:'Campaign1',
    totalActions:500,
    totalDays:32,
    proxy:'0:0:0:0',
    userId:1
  },
  {
    campaignName:'Campaign2',
    totalActions:122,
    totalDays:12,
    proxy:'0:0:0:0',
    userId:1
  },
  {
    campaignName:'Campaign3',
    totalActions:500,
    totalDays:25,
    proxy:'0:0:0:0',
    userId:1
  },
  {
    campaignName:'Campaign4',
    totalActions:322,
    totalDays:76,
    proxy:'0:0:0:0',
    userId:2
  },
  {
    campaignName:'Campaign5',
    totalActions:567,
    totalDays:12,
    proxy:'0:0:0:0',
    userId:2
  },

]

module.exports = {
  async up (queryInterface, Sequelize) {
    for(let campaign of campaigns){
      await Campaign.create(campaign)
    }
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Campaigns',{
      where:{
        campaignName:campaigns.map(camp => camp.campaignName)
      }
    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
