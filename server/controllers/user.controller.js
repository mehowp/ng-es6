module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/api/signup', function(req, res) {
      // any logic goes here
      res.render('users/signup')
  });

/**
 * About page route
 */
  app.get('/api/login', function(req, res) {
      // any logic goes here
      res.render('users/login')
  });

}