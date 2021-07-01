#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

data = cgi.FieldStorage()
start_cmd = data.getvalue("start_cmd")
show_cmd = data.getvalue("show_list_cmd")
delete_cmd = data.getvalue("delete_cont_cmd")
if start_cmd != "":
    output = subprocess.getoutput(start_cmd)
    print(output)
elif show_cmd != "":
    output = subprocess.getoutput(show_cmd)
    print(output)
elif delete_cmd != "":
    output = subprocess.getoutput(delete_cmd)
    print(output)
else:
    print("No Data!")

