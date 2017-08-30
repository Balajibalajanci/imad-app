console.log('Loaded!');
var button =document.getElementById("counter");
var counter=0;
button.onclick=function() {
    var request =new XMLHttprequest();
    request.onreadystatechange=function()
    { 
        if(request.readystate=== XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
                  var span=document.getElementById("count");
    span.innerHTML=counter.toString();
            }
        }
    };
    request.open("http://blgsathiyan.imad.hasura-app.io/counter");
    request.send(null);
    
    
    
   
  
};
