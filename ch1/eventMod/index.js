const EventEmitter = require('events');
const event = new EventEmitter();

/* Always register your event before emit and we could make multiple calls */
/* event.on("myNameEvent", () => {

    console.log("first myNameEvent fired");
});
event.on("myNameEvent", () => {

    console.log("second myNameEvent fired");
});
event.on("myNameEvent", () => {

    console.log("third myNameEvent fired");
}); 
event.emit("myNameEvent");*/


event.on("checkPage", (status, msg) => {

    console.log(status, msg);
});

event.emit("checkPage", 200, 'ok');

