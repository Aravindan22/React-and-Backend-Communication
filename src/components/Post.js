import React, { useState } from "react";
// import Axios from "axios";

function Post() {
  const url = "https://webhook.site/abfbd4de-3a27-45d4-b08d-47cb888888e6";
  const [data, setData] = useState({
    name: ""
  });

  async function submit(e) {
    e.preventDefault();
    let res = await fetch(url, {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: data.name
      })
    });
    console.log(res);

    // Axios.post(url, {
    //   name: data.name
    // }).then((res) => {
    //   console.log(res.data);
    // });
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
