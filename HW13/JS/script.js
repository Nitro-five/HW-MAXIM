const TYPES = {
  small: {
    price: 50,
    cal: 20,
  },
  medium: {
    price: 75,
    cal: 30,
  },
  big: {
    price: 100,
    cal: 40,
  },
};

const TOPPING = {
  chesse: {
    price: 10,
    cal: 20,
  },
  potato: {
    price: 20,
    cal: 5,
  },
  seasoning: {
    price: 15,
    cal: 0,
  },
  mayo: {
    price: 20,
    cal: 5,
  },
};
function Hamburger(type) {
  this.type = type;
  this.topping = [];

  this.addTopping = function (topping) {
    this.topping.push(topping);
  };

  this.getPrice = function () {
    return (
      this.type.price +
      this.topping.reduce((acc, e) => {
        return acc + e.price;
      }, 0)
    );
  };

  this.getCal = function () {
    return (
      this.type.cal +
      this.topping.reduce((acc, e) => {
        return acc + e.cal;
      }, 0)
    );
  };
}

const macHamburger = new Hamburger(TYPES.small);
const cooperHamburger = new Hamburger(TYPES.medium);
const tomHamburger = new Hamburger(TYPES.big);

macHamburger.addTopping(TOPPING.chesse);
macHamburger.addTopping(TOPPING.potato);
cooperHamburger.addTopping(TOPPING.mayo);
cooperHamburger.addTopping(TOPPING.seasoning);
tomHamburger.addTopping(TOPPING.seasoning);
tomHamburger.addTopping(TOPPING.chesse);
tomHamburger.addTopping(TOPPING.potato);
tomHamburger.addTopping(TOPPING.mayo);

console.log(
  `macHamburger price:${macHamburger.getPrice()}, cal:${macHamburger.getCal()}`
);
console.log(
  `cooperHamburger price:${cooperHamburger.getPrice()}, cal:${cooperHamburger.getCal()}`
);
console.log(
  `tomHamburger price:${tomHamburger.getPrice()}, cal:${tomHamburger.getCal()}`
);
