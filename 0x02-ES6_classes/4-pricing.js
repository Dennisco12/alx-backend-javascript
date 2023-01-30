import Currency from './3-currency';

export default class Pricing {
  constructor (amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    } else {
      this._amount = value;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be of the type currency');
    } else {
      this._currency = value;
    }
  }

  displayFullPrice () {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice (amount, conversionRate) {
    return amount * conversionRate;
  }
}
