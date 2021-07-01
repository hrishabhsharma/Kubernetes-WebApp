#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

data = cgi.FieldStorage()
k8s_deployment_name = data.getvalue("deployment_name")
k8s_deployment_replica_number = data.getvalue("deployment_replica_number")

output = subprocess.getoutput("sudo kubectl scale deployment {} --replicas={}".format(k8s_deployment_name,k8s_deployment_replica_number))
print(output)