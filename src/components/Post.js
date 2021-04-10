import React, { useState } from "react";
import Axios from "axios";
var qs = require('qs');

function Post() {
  const url = "https://woolly-joyous-pisces.glitch.me/api/test1";
  const [data, setData] = useState({
    name: ""
  });

  async function submit(e) {
    e.preventDefault();
    var body = qs.stringify({
    'Name': data.name 
    });
    var config = {
    method: 'post',
    url: url,
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : body
    };

    Axios(config)
    .then(function (response) {
        let res =JSON.stringify(response.data) 
        console.log(res);
        window.alert(res);
    })
    .catch(function (error) {
    console.log(error);
    });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata);
  }

  return (
    <div className="Post">
      <form onSubmit={(e) => submit(e)}>
        <label>
          Name:
          <input
            onChange={(e) => handle(e)}
            id="name"
            value={data.name}
            placeholder="Name"
            type="text"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Post;
