import socket

UDP_IP_ADDRESS = '127.0.0.1'
UDP_PORT_NUMBER = 8888

clientSocket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

message = "Kushwaha loves Shilpa"

clientSocket.sendto(message.encode(), (UDP_IP_ADDRESS, UDP_PORT_NUMBER))
