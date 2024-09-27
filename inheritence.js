class vehicle{
  constructor(name, price){
    this.name = name ; 
    this.price = price;
  }

  move(){
    console.log('Gari chole na gari chole na re.......')
  }
}

class Bus extends vehicle{
  constructor(name, price, seat, ticketPrice){
    super(name,price) // upporer propety super boss ke call korbe  name set korbo 
    this.seat = seat ; 
    this.ticketPrice = ticketPrice ;
  }

}

class Truck extends vehicle{
  constructor(name,price,load){
    super(name,price);
    this.load = load ;
  }
}

// object oriented programming 
