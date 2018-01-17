const AV = require('../utils/av-weapp.js');
class Course extends AV.Object {
  get courseid() { return this.get('courseid') }
  set courseid(value) { return this.set('courseid', value) }

  get img() { return this.get('img') }
  set img(value) { return this.set('img', value) }

  get coursename() { return this.get('coursename') }
  set coursename(value) { return this.set('coursename', value) }

  get details() { return this.get('details') }
  set details(value) { return this.set('details', value) }

}
AV.Object.register(Course);
module.exports = Course;