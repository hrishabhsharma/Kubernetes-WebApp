#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

data = cgi.FieldStorage()
k8s_deployment_name = data.getvalue("deployment_name")
k8s_deployment_image_name = data.getvalue("deployment_image_name")

output = subprocess.getoutput("sudo kubectl create deployment {} --image={}".format(k8s_deployment_name,k8s_deployment_image_name))

print(output)
