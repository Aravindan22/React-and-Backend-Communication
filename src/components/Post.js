import React, { useState } from "react";
// import Axios from "axios";
// import axios from "axios";
// Axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// Axios.defaults.headers.common["Content-type"] =
//   "application/x-www-form-urlencoded";
function Post() {
  const url = "https://woolly-joyous-pisces.glitch.me/api/test1";
  const [data, setData] = useState({
    name: ""
  });

  async function submit(e) {
    e.preventDefault();
    let res = await fetch(url, {
      method: "post",
      // mode: "no-cors",
      headers: {
        Accept: "*/*",
        "Content-type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        key_test: "kkkkkk"
      })
    });
    console.log(res.body);

    // Axios({
    //   method: "post",
    //   url: url,
    //   data: {
    //     ket: "jkkk"
    //   }
    // })
    //   .then((data) => console.log(data))
    //   .catch((e) => console.log(e));

    // Axios.post(url, {
    //   Name: data.name
    // })
    //   .then((res) => {
    //     console.log(res);
    //     // console.log(res.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    // console.log(JSON.stringify(data));
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
