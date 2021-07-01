#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

data = cgi.FieldStorage()
k8s_pod_name = data.getvalue("pod_name")
output = subprocess.getoutput("sudo kubectl delete pods {}".format(k8s_pod_name))

print(output)