document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    //creating xhr object
    const xhr = new XMLHttpRequest();
    //open 
    xhr.open('GET' ,'data.txt', true);

    // console.log('READYSTATE', xhr.readyState) = 1

    //optional used for spinners
    xhr.onprogress = function() {
        // console.log('READYSTATE', xhr.readyState) = 3

    }

    xhr.onload = function() {
        // console.log('READYSTATE', xhr.readyState) = 4
        if(this.status === 200) {
            // console.log(this.responseText)
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`

        }
    }

    xhr.onerror = function() {
        console.log('request error') 
    }

    xhr.send();

}






    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"