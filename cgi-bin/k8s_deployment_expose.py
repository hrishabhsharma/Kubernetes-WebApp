#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

data = cgi.FieldStorage()
k8s_deployment_name = data.getvalue("deployment_name")
k8s_deployment_expose_port_number = data.getvalue("deployment_expose_port_number")
output = subprocess.getoutput("sudo kubectl expose deployment {} --port={} --type=NodePort".format(k8s_deployment_name,k8s_deployment_expose_port_number))

print(output)
