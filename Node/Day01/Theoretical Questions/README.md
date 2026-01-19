1. What is HTTP and how does it work? Explain the request-response cycle.

ANS-> HTTP stands for HyperText Transfer Protocol. It is an application-layer protocol used for communication between a client and a server over the web.

Request–Response Cycle...

Client sends an HTTP request -> Server processes the request -> Server sends an HTTP response -> Client receives and processes the response



2. What are the different HTTP methods (GET, POST, PUT, PATCH, DELETE) and when should each be used?

ANS-> These are some different HTTP methods and there usecase-:

GET : It used for fetch data.
POST: It used for create new data like create user.
PUT: It used for replace entire data like if we edit some user data then it will replace old data with new one.
PATCH: It used for partial update like if we want to edit only user name or email then it will only update that data.
DELETE: It used for removing or deleting the data.



3. Explain HTTP status codes. What's the difference between 2xx, 3xx, 4xx, and 5xx?

ANS-> HTTP status codes are numbers returned by a web server to tell the browser or client what happened with a request. It help us to understand whether a request get succeeded, failed.

2xx -> These mean the request was successful.
3xx -> These tell the client to go somewhere else.
4xx -> These mean something is wrong with the request.
5xx -> These mean the server failed to handle a valid request.



4. What are HTTP headers? Name some important request and response headers.

ANS -> Headers are key-value pairs that provide metadata about the request or response.
JWT or token are some important request headers.



5. What is the difference between stateless and stateful protocols? Is HTTP stateless?

ANS -> A stateless protocol does not store any client session information between requests. Each request is treated as independent and must contain all the information needed. While a stateful protocol remembers the client’s session and previous interactions.
Yes HTTP is stateless.



6. Explain idempotency in REST APIs. Which HTTP methods are idempotent?




7. What is REST? What are the principles of RESTful API design?

ANS -> REST stands for Representational State Transfer. RESTful API design principles define how APIs should be structured.

These are principles of RESTful API design -:

Client–Server Separation
Statelessness
Resource-based URLs
Use Proper HTTP Methods
Use Meaningful HTTP Status Codes
Consistent Naming & Structure
Use JSON for Data Exchange
Error Handling



8. How would you version a REST API? What are the different approaches?