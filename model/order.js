const AV = require('../utils/av-weapp.js');
class Order extends AV.Object {
  get name() { return this.get('name') }
  set name(value) { return this.set('name', value) }

  get phone() { return this.get('phone') }
  set phone(value) { return this.set('phone', value) }

  get destination() { return this.get('destination') }
  set destination(value) { return this.set('destination', value) }

  get others() { return this.get('others') }
  set others(value) { return this.set('others', value) }

  get productNumber() { return this.get('productNumber') }
  set productNumber(value) { return this.set('productNumber', value) }

  get date() { return this.get('date') }
  set date(value) { return this.set('date', value) }

  get sum() { return this.get('sum') }
  set sum(value) { return this.set('sum', value) }

  get productName() { return this.get('productName') }
  set productName(value) { return this.set('productName', value) }

  get productID() { return this.get('productID') }
  set productID(value) { return this.set('productID', value) }

  get img() { return this.get('img') }
  set img(value) { return this.set('img', value) }
}
AV.Object.register(Order);
module.exports = Order;