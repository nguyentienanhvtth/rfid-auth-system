/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity:'User',
  attributes: {
    name:{
      type: 'string',
      defaultsTo: 'Yash Gupta'
    },
    rfid:{
      type:'string',
      defaultsTo: 'abcdef123456789',
      unique:true,
      index:true
    },
    entry:{
      type: 'string',
      index: true
    },
    hostel:{
      type: 'string',
      defaultsTo: 'Zanskar',
      index: true
    },
    image:{
      type: 'string',
      defaultsTo: 'default.png'
    }
  }
};

