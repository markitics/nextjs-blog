from http.server import BaseHTTPRequestHandler
from datetime import datetime

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    mystring = "The time is: "
    mystring += str(datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
    mystring = mystring.encode() # to bytes
    self.wfile.write(mystring)
    return