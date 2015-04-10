/**
* Roll.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity:'Roll',
  attributes: {
    user:{
      model:'User',
      index:true
    },
    device:{
      model:'Device',
      index:true
    },
    hostel:{
      type:'string',
      index:true
    },
    success: 'bool',
    time:{
      type: 'integer',
      defaultsTo: Math.floor(Date.now()/1000)
    }
  }
};

