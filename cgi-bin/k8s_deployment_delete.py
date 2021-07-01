#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

data = cgi.FieldStorage()
k8s_deployment_name = data.getvalue("deployment_name")
output = subprocess.getoutput("sudo kubectl delete deployment {}".format(k8s_deployment_name))

print(output)