openssl req -config cert.conf -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
openssl x509 -outform der -in cert.pem -out server.crt