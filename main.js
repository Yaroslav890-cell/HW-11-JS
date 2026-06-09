const bankAccount = {
  ownerName: "Ivan",
  accountNumber: "123456",
  balance: 1000,

  deposit() {
    if (confirm("Поповнити рахунок?")) {
      let amount = Number(prompt("Сума поповнення:"));
      this.balance += amount;
      alert("Баланс: " + this.balance);
    }
  },
  withdraw() {
    if (confirm("Зняти гроші?")) {
      let amount = Number(prompt("Сума зняття:"));

      if (amount > this.balance) {
        alert("Недостатньо коштів!");
      } else {
        this.balance -= amount;
        alert("Баланс: " + this.balance);
      }
    }
  }
};
bankAccount.deposit();
bankAccount.withdraw();


const weather = {
      temperature: 0,
  humidity: 60,
  windSpeed: 10,
isBElowZero(){
    this.temperature=Number(prompt("Введідіть температуру:"));
    return this.temperature <0;
}
}; 
if (weather.isBElowZero()){
      console.log("температура нижче 0 градусів Цельсія");
} else {
  console.log("температура вище або рівна 0 градусів Цельсія");
};
const user = {
  name: "Yaroslav",
  email: "test@gmail.com",
  password: "1234",

  login() {
    let inputEmail = prompt("Email:");
    let inputPassword = prompt("Password:");

    if (inputEmail === this.email && inputPassword === this.password) {
      alert("Вхід успішний");
    } else {
      alert("Невірний email або пароль");
    }
  }
};

user.login();

const movie = {
  title: "Inception",
  director: "Nolan",
  year: 2010,
  rating: 8.8,

  isGood() {
    return this.rating > 8;
  }
};

console.log(movie.title);
console.log(movie.director);
console.log(movie.year);
console.log(movie.rating);

if (movie.isGood()) {
  console.log("true");
} else {
  console.log("false");
}