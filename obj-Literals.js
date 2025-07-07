// 1. Object Literal with Arrays javascript

const student = {
  name: "Rahul",
  subjects: ["Math", "Science", "English"]
};

console.log(student.subjects[1]); // Science


// 2. Object Literal with Functions (Methods)

const calculator = {
  add: function(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b; // shorthand method
  }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.multiply(4, 2)); // 8


// 3. Object Literal with Dynamic Keys

const key = "level";
const player = {
  name: "Rahul",
  [key]: 5 // dynamic key
};

console.log(player.level); // 5


//  4. Real-Life: User Profile Object

const userProfile = {
  id: 101,
  name: "Rahul Kumar",
  age: 22,
  address: {
    city: "Siwan",
    state: "Bihar"
  },
  skills: ["HTML", "CSS", "JavaScript"],
  isActive: true,
  greet() {
    return `Hi, I'm ${this.name} from ${this.address.city}`;
  }
};

console.log(userProfile.greet()); // Output: Hi, I'm Rahul Kumar from Siwan


//  5. Real-Life: Cart System Object

const cart = {
  items: [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 }
  ],
  totalAmount() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
};

console.log(cart.totalAmount()); // 52000