const user = {
  email: "eliste00224@noroff.no",
  password: "passord123",
};

async function loginUser() {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "eliste00224@stud.noroff.no",
        password: "passord123",
      }),
    };
    const response = await fetch(
      "https://v2.api.noroff.dev/auth/login",
      postData
    );
    // console.log(response);
    const json = await response.json();
    const accessToken = json.data.accessToken;
    localStorage.setItem("accessToken", accessToken);
    // console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

loginUser();

async function getPosts() {
  try {
    const postData = {
      method: "GET",
    };
    const response = await fetch(
      "https://v2.api.noroff.dev/blog/posts/eliste00",
      postData
    );
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

getPosts();
async function createPost(title, body) {
  try {
    const token = localStorage.getItem("accessToken");
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    };
    const response = await fetch(
      "https://v2.api.noroff.dev/blog/posts/eliste00",
      postData
    );
    // console.log(response);
    const json = await response.json();

    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

// createPost("nordic cyling", "klhdfkjhdk");

//Update post
