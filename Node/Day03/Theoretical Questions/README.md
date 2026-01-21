1. What is JWT (JSON Web Token)? Explain its structure (header, payload, signature).

ANS-> JWT (JSON Web Token) is a compact, self-contained token used to securely transmit information between a client and a server.
A JWT has three parts, separated by dots (.):

i. Header-: Contains token type and signing algorithm
ii. Payload-: Contains user data
iii. Signature-: Created using Header, Payload, Secret key. It ensures token integrity and authenticity



2. How does JWT authentication work? Explain the flow.

ANS-> JWT Authentication Flow-:

a. User logs in with credentials
b. Server validates credentials
c. Server generates JWT and sends it to client
d. Client stores JWT
e. Client sends JWT in Authorization header for each request
f. Server verifies JWT signature and expiration
g. Access is granted to protected resources



3. What are the advantages and disadvantages of JWT over sessions?

ANS-> Advantages...

a. Stateless (no server storage)
b. Highly scalable
c. Works well with APIs and microservices
d. Cross-domain friendly
e. Faster horizontal scaling

Disadvantages...

a. Token revocation is difficult
b. Larger payload size
c. Cannot be invalidated easily
d. Security risk if stored improperly



4. Where should you store JWTs in the client? (localStorage vs cookies vs memory)

ANS-> The best place to store JWTs on the client is in an HttpOnly cookie.



5. What is the difference between access tokens and refresh tokens?

ANS-> Difference between access tokens and refresh tokens are -:

Access Token...
a. Short-lived
b. Used for API access
c. Sent with every request
d. Expires quickly

Refresh Token...
a. Long-lived
b. Used to get new access tokens
c. Stored securely
d. Expires slowly



6. How do you handle JWT expiration and refresh?

ANS-> As we know Access Token expires quickly and Refresh tokens live longer so, When the access token expires, we can use the refresh token to get a new one.



7. What is Role-Based Access Control (RBAC)?

ANS-> RBAC is an authorization mechanism where access is based on user roles.

For Example -:

a. Admin -> Admin have full access.
b. User -> User have limited access.



8. How would you implement authorization in an API?

ANS-> Request → Auth check → Permission check → Controller.

a. Authenticate user (JWT)

b. Attach user info to request

c. Check user role or permissions

d. Allow or deny access
