module.exports = function () {
    // Here we find an appropriate database to connect to, defaulting to
    // localhost if we don't find one.
    var uristring = 'mongodb://app:kesifpe4@ds137267.mlab.com:37267/shop';

    // Makes connection asynchronously.  Mongoose will queue up database
    // operations and release them when the connection is complete.
    mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
    });
}
