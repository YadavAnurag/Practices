import socket               # Import socket module

s = socket.socket()         # Create a socket object
host = '127.0.0.1'
port = 8889                # Reserve a port for your service.
s.bind((host, port))        # Bind to the port
print(host, str(port))
s.listen(5)                 # Now wait for client connection.
while True:
   c, addr = s.accept()     # Establish connection with client.
   print ('Got connection from', addr)
   c.send('Thank you for connecting'.encode('ascii'))
   c.close()
s.close()
