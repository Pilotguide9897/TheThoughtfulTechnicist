const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");

// create an instance of the express app and define the port.
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions. Sessions are a way to store data on the server specific to each user across multiple requests. They are used to maintain state in a stateless protocol like http.
const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess)); //Adds the session middleware to the express app. Uses req.session


// Configure handlebars:
// create an instance of express-handlebars with default configuration and set it as the view engine for the express app.
const hbs = exphbs.create({ helpers }); // creates a new instance of the Handlebars engine using the exphbs.create() method. The empty object passed as an argument can be used to configure options for the Handlebars engine, such as the location of the views directory or the default layout to use.
app.engine('handlebars', hbs.engine) // Registers the Handlebars engine with the app Express.js application. The first argument is the file extension to use for views that are rendered with this engine (in this case, .handlebars). The second argument is the actual engine instance created in the previous line.
app.set('view engine', 'handlebars'); // This sets the default view engine for the app Express.js application to be the Handlebars engine. This means that when you use res.render() to render a view in your application, Express.js will automatically look for a file with the .handlebars extension and use the Handlebars engine to render it.

// Configure middleware:
// A note on middleware: The order of middleware in an Express application is important because it determines the sequence in which they are executed. Middleware functions are executed in the order they are defined (top to bottom) within the application. When a request comes into the application, it will pass through each middleware function in the specified order, until it reaches a middleware function that either ends the request-response cycle or passes control to the next middleware function using next().

app.use(express.json()); // Enables parsing JSON payloads in incoming requests.
app.use(express.urlencoded({ extended: true })); // enables parsing URL-encoded payloads (form data) in incoming requests.
app.use(express.static(path.join(__dirname, "public"))); // serves static files (CSS, JavaScript, images) from the specified folder. In this case, joins the directory name with 'public' to create the path to access the static assets. 
app.use(routes); // Registers and allows express to use the routes imported from the controllers folder. Should be placed after all the middleware functions mentioned above. This is because the request should first pass through the middleware functions responsible for parsing JSON, parsing URL-encoded data, and serving static files before reaching the application routes, which handle dynamic content and business logic.

// Now all that remains is to synchronize the database and launch the express app to listen on the specified port.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
