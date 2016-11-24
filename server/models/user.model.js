var Schema = mongoose.Schema
      userSchema = new Schema( {
          username: '',
          password: ''
      }),
User = mongoose.model('user', userSchema);

module.exports = User;