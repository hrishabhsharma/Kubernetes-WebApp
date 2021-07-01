#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

data = cgi.FieldStorage()
k8s_describe_resource_name = data.getvalue("describe_resource_name")
k8s_pod = data.getvalue("pod")
k8s_deployment = data.getvalue("deployment")
k8s_service = data.getvalue("service")

if (k8s_describe_resource_name != "" and k8s_pod != ""):
    output = subprocess.getoutput("sudo kubectl describe pod {}".format(k8s_describe_resource_name))
elif (k8s_describe_resource_name != "" and k8s_deployment != ""):
    output = subprocess.getoutput("sudo kubectl describe deployment {}".format(k8s_describe_resource_name))
elif (k8s_describe_resource_name != "" and k8s_service != ""):
    output = subprocess.getoutput("sudo kubectl describe service {}".format(k8s_describe_resource_name))
else:
    output = "Invalid Command!"

print(output)
