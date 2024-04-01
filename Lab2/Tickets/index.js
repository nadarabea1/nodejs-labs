const Ticket = require("./Modules/ticket.js")

var ticket = new Ticket();
ticket.updateTicket(1, 123, "2021-12-31", "JFK", "LAX");
ticket.displayTicket();
console.log(ticket.getTicket());