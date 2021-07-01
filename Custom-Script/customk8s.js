/* UPPER AREA */
   /* k8s pod */
   function k8s_pod() {
    var pod_usecase = document.getElementById("pod_usecase").value;
    if(pod_usecase == "--- Select Your Usecase ---"){
       document.getElementById("output_box_area").classList.add('red');
       document.getElementById("output_box_area").innerHTML = "Please Select Your Usecase!";
    }
    else if(pod_usecase == "Launch"){
       document.getElementById("output_box_area").classList.remove('red');
       /* ajax call */
       var pod_name = document.getElementById("pod_name").value;
       var pod_image_name = document.getElementById("pod_image_name").value;
       var xhr = new XMLHttpRequest();
       xhr.open("GET", `http://54.179.18.254/cgi-bin/k8s_pod.py?pod_name=${pod_name}&pod_image_name=${pod_image_name}`, true);
       xhr.send();
       // output from above url
       xhr.onload = function() {
       var output = xhr.responseText;
       document.getElementById("output_box_area").innerHTML = output;
       }
    }
    else if(pod_usecase == "Delete"){
       document.getElementById("output_box_area").classList.remove('red');
       /* ajax call */
       var pod_name = document.getElementById("pod_name").value;
       var xhr = new XMLHttpRequest();
       xhr.open("GET", "http://54.179.18.254/cgi-bin/k8s_pod_delete.py?pod_name="+ pod_name, true);
       xhr.send();
       // output from above url
       xhr.onload = function() {
       var output = xhr.responseText;
       document.getElementById("output_box_area").innerHTML = output;
       }
    }
    else{}
 }
 /* k8s deployment */
 function k8s_deployment() {
    var deployment_usecase = document.getElementById("deployment_usecase").value;
    if(deployment_usecase == "--- Select Your Usecase ---"){
       document.getElementById("output_box_area").classList.add('red');
       document.getElementById("output_box_area").innerHTML = "Please Select Your Usecase!";
    }
    else if(deployment_usecase == "Launch"){
       document.getElementById("output_box_area").classList.remove('red');
       /* ajax call */
       var deployment_name = document.getElementById("deployment_name").value;
       var deployment_image_name = document.getElementById("deployment_image_name").value;
       var xhr = new XMLHttpRequest();
       xhr.open("GET", `http://54.179.18.254/cgi-bin/k8s_deployment.py?deployment_name=${deployment_name}&deployment_image_name=${deployment_image_name}`, true);
       xhr.send();
       // output from above url
       xhr.onload = function() {
       var output = xhr.responseText;
       document.getElementById("output_box_area").innerHTML = output;
       }
    }
    else if(deployment_usecase == "Scale"){
       document.getElementById("output_box_area").classList.remove('red');
       /* ajax call */
       var deployment_name = document.getElementById("deployment_name").value;
       var deployment_replica_number = document.getElementById("deployment_replica_number").value;
       var xhr = new XMLHttpRequest();
       xhr.open("GET", `http://54.179.18.254/cgi-bin/k8s_deployment_replica.py?deployment_name=${deployment_name}&deployment_replica_number=${deployment_replica_number}`, true);
       xhr.send();
       // output from above url
       xhr.onload = function() {
       var output = xhr.responseText;
       document.getElementById("output_box_area").innerHTML = output;
       }
    }
    else if(deployment_usecase == "Expose"){
       document.getElementById("output_box_area").classList.remove('red');
       /* ajax call */
       var deployment_name = document.getElementById("deployment_name").value;
       var deployment_expose_port_number = document.getElementById("deployment_expose_port_number").value;
       var xhr = new XMLHttpRequest();
       xhr.open("GET", `http://54.179.18.254/cgi-bin/k8s_deployment_expose.py?deployment_name=${deployment_name}&deployment_expose_port_number=${deployment_expose_port_number}`, true);
       xhr.send();
       // output from above url
       xhr.onload = function() {
       var output = xhr.responseText;
       document.getElementById("output_box_area").innerHTML = output;
       }
    }
    else if(deployment_usecase == "Delete"){
       document.getElementById("output_box_area").classList.remove('red');
       /* ajax call */
       var deployment_name = document.getElementById("deployment_name").value;
       var xhr = new XMLHttpRequest();
       xhr.open("GET", "http://54.179.18.254/cgi-bin/k8s_deployment_delete.py?deployment_name="+ deployment_name, true);
       xhr.send();
       // output from above url
       xhr.onload = function() {
       var output = xhr.responseText;
       document.getElementById("output_box_area").innerHTML = output;
       }
    }
    else{}
 }

/* Show Area */
 /* k8s show pod */
 function k8s_pod_show(){
       document.getElementById("output_box_area").classList.remove('red');
       /* ajax call */
       var xhr = new XMLHttpRequest();
       xhr.open("GET", "http://54.179.18.254/cgi-bin/k8s_pod_show.py", true);
       xhr.send();
       // output from above url
       xhr.onload = function() {
       var output = xhr.responseText;
       document.getElementById("output_box_area").innerHTML = output;
       }
 }
 /* k8s show deployment */
 function k8s_deployment_show(){
       document.getElementById("output_box_area").classList.remove('red');
       /* ajax call */
       var xhr = new XMLHttpRequest();
       xhr.open("GET", "http://54.179.18.254/cgi-bin/k8s_deployment_show.py", true);
       xhr.send();
       // output from above url
       xhr.onload = function() {
       var output = xhr.responseText;
       document.getElementById("output_box_area").innerHTML = output;
       }
 }
 /* k8s show service */
 function k8s_service_show(){
       document.getElementById("output_box_area").classList.remove('red');
       /* ajax call */
       var xhr = new XMLHttpRequest();
       xhr.open("GET", "http://54.179.18.254/cgi-bin/k8s_service_show.py", true);
       xhr.send();
       // output from above url
       xhr.onload = function() {
       var output = xhr.responseText;
       document.getElementById("output_box_area").innerHTML = output;
       }
 }
 /* k8s describe resource */
 function k8s_describe(){
       var describe_usecase = document.getElementById("describe_usecase").value;

       if(describe_usecase == "Pod"){
            document.getElementById("output_box_area").classList.remove('red');
            /* ajax call */
            var describe_resource_name = document.getElementById("describe_resource_name").value
            var xhr = new XMLHttpRequest();
            xhr.open("GET", `http://54.179.18.254/cgi-bin/k8s_describe.py?describe_resource_name=${describe_resource_name}&pod=pod`, true);
            xhr.send();
            // output from above url
            xhr.onload = function() {
            var output = xhr.responseText;
            document.getElementById("output_box_area").innerHTML = output;
            }
        }
        else if(describe_usecase == "Deployment"){
            document.getElementById("output_box_area").classList.remove('red');
            /* ajax call */
            var describe_resource_name = document.getElementById("describe_resource_name").value
            var xhr = new XMLHttpRequest();
            xhr.open("GET", `http://54.179.18.254/cgi-bin/k8s_describe.py?describe_resource_name=${describe_resource_name}&deployment=deployment`, true);
            xhr.send();
            // output from above url
            xhr.onload = function() {
            var output = xhr.responseText;
            document.getElementById("output_box_area").innerHTML = output;
            }
        }
        else if(describe_usecase == "Service"){
            document.getElementById("output_box_area").classList.remove('red');
            /* ajax call */
            var describe_resource_name = document.getElementById("describe_resource_name").value
            var xhr = new XMLHttpRequest();
            xhr.open("GET", `http://54.179.18.254/cgi-bin/k8s_describe.py?describe_resource_name=${describe_resource_name}&service=service`, true);
            xhr.send();
            // output from above url
            xhr.onload = function() {
            var output = xhr.responseText;
            document.getElementById("output_box_area").innerHTML = output;
            }
        }
        else{
            document.getElementById("output_box_area").classList.add('red');
            document.getElementById("output_box_area").innerHTML = "Please Select Resource First!";
        }
 }

/* DELETE ALL RESOURCE CLEAN ENVIRONMENT */
 function k8s_delete(){
    var output_val = confirm("Are you Sure You Want to Clean Your Kubernetes Environment?");
    
    if(output_val == true){
        document.getElementById("output_box_area").classList.remove('red');
        /* ajax call */
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://54.179.18.254/cgi-bin/k8s_delete.py", true);
        xhr.send();
        // output from above url
        xhr.onload = function() {
        var output = xhr.responseText;
        document.getElementById("output_box_area").innerHTML = output;
        }
    }
    else{}
 }

/* CSS AREA MANIPULATION */
 /* for pods */
 function k8s_onchange_pod(){
    var pod_usecase = document.getElementById("pod_usecase").value;
    if(pod_usecase == "--- Select Your Usecase ---"){
       document.getElementById("pod_name").classList.remove('show');
       document.getElementById("pod_image_name").classList.remove('show');
       document.getElementById("pod_name").classList.add('hide');
       document.getElementById("pod_image_name").classList.add('hide');
    }
    else if(pod_usecase == "Launch")
    {
       document.getElementById("pod_name").classList.remove('hide');
       document.getElementById("pod_image_name").classList.remove('hide');
       document.getElementById("pod_name").classList.add('show');
       document.getElementById("pod_image_name").classList.add('show');
    }
    else if(pod_usecase == "Delete")
    {
       document.getElementById("pod_name").classList.remove('hide');
       document.getElementById("pod_image_name").classList.remove('show');
       document.getElementById("pod_name").classList.add('show');
       document.getElementById("pod_image_name").classList.add('hide');
    }
 }
 /* for deployment */
 function k8s_onchange_deployment(){
    var deployment_usecase = document.getElementById("deployment_usecase").value;
    if(deployment_usecase == "--- Select Your Usecase ---"){
       document.getElementById("deployment_name").classList.remove('show');
       document.getElementById("deployment_image_name").classList.remove('show');
       document.getElementById("deployment_replica_number").classList.remove('show');
       document.getElementById("deployment_expose_port_number").classList.remove('show');
       /* add */
       document.getElementById("deployment_name").classList.add('hide');
       document.getElementById("deployment_image_name").classList.add('hide');
       document.getElementById("deployment_replica_number").classList.add('hide');
       document.getElementById("deployment_expose_port_number").classList.add('hide');
    }
    else if(deployment_usecase == "Launch")
    {
       document.getElementById("deployment_name").classList.remove('hide');
       document.getElementById("deployment_image_name").classList.remove('hide');
       document.getElementById("deployment_expose_port_number").classList.remove('show');
       document.getElementById("deployment_replica_number").classList.remove('show');
       /* add */
       document.getElementById("deployment_name").classList.add('show');
       document.getElementById("deployment_image_name").classList.add('show');
       document.getElementById("deployment_expose_port_number").classList.add('hide');
       document.getElementById("deployment_replica_number").classList.add('hide');
    }
    else if(deployment_usecase == "Scale"){
       document.getElementById("deployment_name").classList.remove('hide');
       document.getElementById("deployment_image_name").classList.remove('show');
       document.getElementById("deployment_expose_port_number").classList.remove('show');
       document.getElementById("deployment_replica_number").classList.remove('hide');
       /* add */
       document.getElementById("deployment_name").classList.add('show');
       document.getElementById("deployment_replica_number").classList.add('show');
       document.getElementById("deployment_image_name").classList.add('hide');
       document.getElementById("deployment_expose_port_number").classList.add('hide');
    }
    else if(deployment_usecase == "Expose"){
       document.getElementById("deployment_name").classList.remove('hide');
       document.getElementById("deployment_image_name").classList.remove('show');
       document.getElementById("deployment_expose_port_number").classList.remove('hide');
       document.getElementById("deployment_replica_number").classList.remove('show');
       /* add */
       document.getElementById("deployment_name").classList.add('show');
       document.getElementById("deployment_replica_number").classList.add('hide');
       document.getElementById("deployment_image_name").classList.add('hide');
       document.getElementById("deployment_expose_port_number").classList.add('show');
    }
    else if(deployment_usecase == "Delete")
    {
       document.getElementById("deployment_name").classList.remove('hide');
       document.getElementById("deployment_image_name").classList.remove('show');
       document.getElementById("deployment_expose_port_number").classList.remove('show');
       document.getElementById("deployment_replica_number").classList.remove('show');
       /* add */
       document.getElementById("deployment_name").classList.add('show');
       document.getElementById("deployment_image_name").classList.add('hide');
       document.getElementById("deployment_expose_port_number").classList.add('hide');
       document.getElementById("deployment_replica_number").classList.add('hide');
    }
 }
 /*  for describe */
 function k8s_onchange_describe(){
    var describe_usecase = document.getElementById("describe_usecase").value;
    if(describe_usecase != "--- Select Your Resource ---"){
        document.getElementById("describe_resource_name").classList.remove('hide');
        /* add */
        document.getElementById("describe_resource_name").classList.add('show');
    }
    else{
        document.getElementById("describe_resource_name").classList.remove('show');
        /* add */
        document.getElementById("describe_resource_name").classList.add('hide');
    }
 }
