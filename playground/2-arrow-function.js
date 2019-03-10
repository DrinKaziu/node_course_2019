// const square = function(x) {
//   return x * x;
// }

// const square = (x) => {
//   return x * x; 
// }

// const square = (x) => x * x; 

// console.log(square(11));

// const event = {
//   name: 'Birthday Party', 
//   printGuestList: function() {
//     console.log('Guest List for: ' + this.name)
//   }
// }

// const event = {
//   name: 'Birthday Party', 
//   printGuestList: () => {
//     console.log('Guest List for: ' + this.name) //this returns undefined because arrow functions don't bind this
//   }
// }

// const event = {
//   name: 'Birthday Party', 
//   printGuestList() {
//     console.log('Guest List for: ' + this.name) //this works becuse we removed the colon from printGuestList
//   }
// }

// const event = {
//   name: 'Birthday Party', 
//   guestList: ['Nacho', 'Cooper', 'Bella'],
//   printGuestList() {
//     console.log('Guest List for: ' + this.name);
//     this.guestList.forEach(function(guest) {
//       console.log(guest + ' is attending ' + this.name) //this doesn't work function now has it's own this binding
//     });
//   }
// }

const event = {
  name: 'Birthday Party', 
  guestList: ['Nacho', 'Cooper', 'Bella'],
  printGuestList() {
    console.log('Guest List for: ' + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name) //this works becuase we changed it to an arrow function, which doesn't bind it's own this
    });
  }
}

event.printGuestList();