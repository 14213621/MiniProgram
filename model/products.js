const AV = require('../utils/av-weapp.js');
class Products extends AV.Object
{
  


  get img() { return this.get('img') }
  set img(value) { return this.set('img', value) }

  get index() { return this.get('index') }
  set index(value) { return this.set('index', value) }

  get url() { return this.get('url') }
  set url(value) { return this.set('url', value) }

  get name() { return this.get('name') }
  set name(value) { return this.set('name', value) }

  get details() { return this.get('details') }
  set details(value) { return this.set('details', value) }

  get price() { return this.get('price') }
  set price(value) { return this.set('price', value) }

  get type() { return this.get('type') }
  set type(value) { return this.set('type', value) }
}
AV.Object.register(Products);
module.exports = Products;