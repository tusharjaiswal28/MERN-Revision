1. What is HTTPS? How does it differ from HTTP?

ANS->  HTTPS (HTTP Secure) is HTTP over an encrypted connection.
The main differences are -: 
i. HTTP is not secure while HTTPS is secure.
ii. Data in HTTPS are Encrypted while in HTTP data are in plain text form.



2. Explain SSL/TLS. What is the SSL handshake process?

ANS-> SSL stands for Secure Sockets Layer and TLS stands for Transport Layer Security. SSL/TLS are cryptographic protocols used to secure communication over a network.



3. What is encryption? Explain symmetric vs asymmetric encryption.

ANS-> Encryption is the process of converting readable data into unreadable form to prevent unauthorized access.

Symmetric Encryption -:

i. Same key used to encrypt and decrypt
ii. Fast
iii. Used after SSL handshake

Asymmetric Encryption -:

i. Uses a public key and private key
ii. Slower
iii. Used during SSL handshake



4. What are certificates? What is a Certificate Authority (CA)?

ANS-> Certificates are digital documents that prove a server’s identity and contain a public key. 
Certificate Authority (CA) is a trusted third party that issues certificates, verifies website identity and signs certificates digitally.



5. What is the difference between authentication and authorization?

ANS-> Authentication verifies who you are (e.g., logging in with a username and password) while Authorization determines what you’re allowed to do after you’re authenticated (e.g., access admin pages).



6. Explain session-based authentication. How do sessions work?

ANS-> Session-based authentication stores user login state on the server.

How It Works..

User logs in -> Server creates a session -> Session ID is sent to client -> Client sends session ID with each request -> Server validates session



7. What are cookies? What are the security attributes of cookies (HttpOnly, Secure, SameSite)?

ANS-> Cookies are small pieces of data stored in the browser and sent with every request.
Cookie security attributes are flags set on cookies to control how and when they’re sent, helping protect against attacks.
HttpOnly -> Prevents JavaScript access
Secure – sends cookie only over HTTPS
SameSite – controls cross-site requests (protects against CSRF)



8. What is token-based authentication? How does it differ from session-based auth?

ANS-> Token-based authentication is a stateless auth method where the server issues a token after login, and the client sends that token with each request to prove identity.
