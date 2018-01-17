const AV = require('../utils/av-weapp.js');
class Course extends AV.Object {
  get title() { return this.get('title') }
  set title(value) { return this.set('title', value) }

  get content() { return this.get('content') }
  set content(value) { return this.set('content', value) }

}
AV.Object.register(Post);
module.exports = Post;