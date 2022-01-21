// function as constructor
/*
function Book(name, author, year) {
	this.name = name;
	this.author = author;
	this.year = year;
	this.getInfo = () => {
		console.log(`${this.name} ${this.author}`);
	};
	this.getBookAge = () => {
		const date = new Date();
		const age = date.getFullYear() - this.year;
		console.log(age);
	};
}

const harryPotterBook = new Book("Haris Poteris", "J.K. Rowling", 1999);

harryPotterBook.getInfo();
harryPotterBook.getBookAge();
*/
// -------------------------------------

// class as constructor

class Book {
	constructor(name, author, year) {
		this.name = name;
		this.author = author;
		this.year = year;
	}
	getInfo() {
		console.log(`${this.name} ${this.author}`);
	}
	getBookAge() {
		const date = new Date();
		const age = date.getFullYear() - this.year;
		console.log(age);
	}
}

const harryPotterBook = new Book("Haris Poteris", "J.K. Rowling", 1999);

harryPotterBook.getInfo();
harryPotterBook.getBookAge();

//----------------------------------------

class Movie {
	constructor(name, year, director, budget, income) {
		// getteris
		this.name = name;
		this.year = year;
		this.director = director;
		this.budget = budget;
		this.income = income;
	}
	getIntroduction() {
		console.log(`${this.name} ${this.year} ${this.director}`);
	}
	getProfit(postfix) {
		const profit = this.income - this.budget;
		console.log(`${profit} ${postfix}`);
	}
	setName(value) {
		// setteris
		this.name = value;
	}
}
const matrica = new Movie(
	"Matrix: Reload",
	2003,
	"Lana and Lilly Wachowskie's",
	150e6,
	750e6
);
//console.log(matrica.getIntroduction());
matrica.getProfit("millions");
matrica.setName("Matrix: Resurrection");

// ------------------------------------------
// extendet classes
class Animal {
	constructor(color) {
		this.color = color;
	}
	getSpeed() {
		console.log("147 km/h");
	}
}

class Rabbit extends Animal {
	constructor(name, color) {
		super(color);

		this.name = name;
		this.created = Date.now();
	}
}
let rabbit = new Rabbit("White Rabbit", "Grey");
rabbit.getSpeed();
