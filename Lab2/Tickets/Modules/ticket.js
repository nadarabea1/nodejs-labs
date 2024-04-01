class Ticket{
    seatNum;
    fightNum;
    travelDate;
    departureAirport;
    arrivalAirport;

    updateTicket(seatNum, fightNum, travelDate, departureAirport, arrivalAirport){
        this.seatNum = seatNum;
        this.fightNum = fightNum;
        this.travelDate = travelDate;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
    }
    getTicket(){
        return this;
    }
    displayTicket(){
        console.log(`Ticket Information: \nSeat Number: ${this.seatNum}\nFight Number: ${this.fightNum}\nTravel Date: ${this.travelDate}\nDeparture Airport: ${this.departureAirport}\nArrival Airport: ${this.arrivalAirport}`);
    }
}
module.exports = Ticket;