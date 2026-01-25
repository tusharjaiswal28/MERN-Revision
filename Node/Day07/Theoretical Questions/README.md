1. What is Express.js? Why use it over plain Node.js?

ANS-> Express.js is a minimal, unopinionated web framework built on top of Node.js that simplifies building web servers and APIs.
These are some reason to use Express over plain Node.js-:
a. Simplifies routing
b. Middleware support
c. Cleaner request/response handling
d. Faster development
e. Large ecosystem



2. What is middleware in Express? Explain the middleware chain.

ANS-> Middleware in Express is a function that sits between the incoming HTTP request and the final response.
It has access to the request object (req), response object (res), and the next() function, which controls the flow of execution.
A middleware chain is a sequence of middleware functions that run one after another while handling a request.



3. What are the different types of middleware (application-level, router-level, error-handling)?

ANS-> a. Application-Level Middleware : Middleware bound to the entire Express application using app.use() or app.METHOD().
b. Router-Level Middleware : Middleware attached to an Express Router object using router.use().
c. Error-Handling Middleware : Special middleware with 4 parameters (err, req, res, next) used for Centralized error handling or Logging errors.



4. How does error handling work in Express?

ANS-> As we know Error-handling middleware has 4 parameters so errors are passed using next(error) and it must be defined after routes.



5. What is the difference between app.use() and app.all()?

ANS-> The main difference between app.use() and app.all() are app.use() is used for middleware while app.all() used for routes and app.use() can match partial paths while app.all() requires exact path.



6. Explain routing in Express. How do route parameters work?

ANS-> Routing in Express defines how an application responds to a client request for a specific URL path and HTTP method. Route parameters allow us to capture dynamic values from the URL. They are defined using a colon (:).



7. What are route handlers vs middleware?

ANS-> A route handler is the function that handles a specific route and usually ends the request–response cycle whiles Middleware is a function that runs before the route handler (or between handlers) to process or modify the request or response.



8. How do you handle file uploads in Express?

ANS-> To handle file uploads in express we can use libraries like multer.



9. What is morgan? What logging strategies would you implement?

ANS-> Morgan is an HTTP request logger middleware for Express.js. It automatically logs details about incoming HTTP requests and responses.



10. How would you structure a large Express application?

ANS-> I used to follow these structure for a large Express application :-
a. Separate routing, business logic, and data access
b. Keep files small & focused
c. Group code by feature, not just by type
d. Centralize configuration, logging, and error handling