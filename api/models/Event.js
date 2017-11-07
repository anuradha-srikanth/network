/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    event_id : {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true
    },
    start_time : {
        type : 'datetime'
    },
    end_time : {
        type : 'datetime'
    },
    description : {
        type : 'longtext'
    },
    street : {
        type : 'mediumtext'
    },
    city : {
        type : 'string'
    },
    state : {
        type : 'string'
    },
    zip : {
        type : 'integer'
    },

    // Event has one company
    company: {
        model : 'company'
    },
    
    // One-to-many 
    // Event has many calendar events
    calendar_events: {
        collection : 'calendar-events',
        via : 'event'
    }

  }
};

