#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

data = cgi.FieldStorage()
k8s_pod_name = data.getvalue("pod_name")
k8s_pod_image_name = data.getvalue("pod_image_name")

output = subprocess.getoutput("sudo kubectl run {} --image={}".format(k8s_pod_name,k8s_pod_image_name))

print(output)



