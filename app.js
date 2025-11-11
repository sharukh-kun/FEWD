const EventEmitter = require('events');
const event = new EventEmitter;

event.on('greet',(name1)=>{
    console.log(`Hello, ${name1}!`);
});

event.on('farewell',(name1)=>{
    console.log(`Goodbye, ${name1}`);
});

const userAction = (action , name1)=>{
    event.emit(action,name1);
};

const stimulateAction = ()=>{
    userAction('greet','Alice');
    userAction('farewell','Michael');
}

module.exports = stimulateAction