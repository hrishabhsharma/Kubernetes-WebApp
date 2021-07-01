#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

data = cgi.FieldStorage()
output = subprocess.getoutput("sudo kubectl get deployments")
print(output)
