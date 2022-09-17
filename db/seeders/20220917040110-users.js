'use strict';
const { User } = require('../models')

const users = [
  {
    username:'Alex1',
    password:'Alexander1010',
    name:"Alex Feinberg",
    email:"feinberg.alexa11der@gmail.com"
  },
  {
    username:'Alex2',
    password:'Alexander200',
    name:"Alex Feinberg",
    email:"feinberg.alex@gmail.com"
  },
  {
    username:'Alex3333',
    password:'Alexander3300',
    name:"Alex Cole",
    email:"feinberg.cole@gmail.com"
  }
]
module.exports = {
  async up (queryInterface, Sequelize) {
    for(let user of users){
      await User.create(user)
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
    await queryInterface.bulkDelete('Users',{
      where:{username: users.map(user => user.username)}
    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
