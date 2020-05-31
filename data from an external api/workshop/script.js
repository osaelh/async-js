var data = JSON.stringify({
    "token": "hbuXJ03N4niWvbLPdJw3ZA",
    "data": {
      "nameFirst": "nameFirst",
      "personAvatar": "personAvatar",
      "jobTitle": "personTitle",
      "nickName": "personNickname",
      "_repeat": 9
    }
  });

  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.open('POST', 'https://app.fakejson.com/q');
  xhr.setRequestHeader("content-type", "application/json");

  xhr.onload = function() {
    //   let fakeData = JSON.parse(this.responseText)
      if(this.status === 200) {
          console.log(this.responseText);

      }
  }

  xhr.onerror = function() {
      console.log('request error')
  }

  xhr.send(data)
