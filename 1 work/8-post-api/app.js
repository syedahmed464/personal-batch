const apiBaseUrl = `https://jsonplaceholder.typicode.com/posts`;
const tbody = document.querySelector("#todos-listing");
const createPostForm = document.getElementById("create-post-form");
const postTitleInputField = document.querySelector("#post_title");
const postBodyInputField = document.querySelector("#post_body");

createPostForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const createPostFormBtn = document.querySelector("#create-post-form button");
  const postTitleInputValue = postTitleInputField?.value;
  const postBodyValue = postBodyInputField?.value;

  if (!postTitleInputValue || !postBodyValue) {
    alert("please fill the input values");
    return;
  }

  const body = {
    title: postTitleInputValue,
    body: postBodyValue,
  };




  fetch(apiBaseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body), 
  })
  .then(async (data) => {
    // const jsonData = await data.json();
    // console.log(jsonData, "jsonData");
    $("#edit-post").modal("hide");
    await getPosts();
    selectLoader.style.display = "none";
  })
  .catch((error) => {
    console.error(error);
    selectLoader.style.display = "none";
  });
});

//  })




fetch(apiBaseUrl)
.then((response) => response.json())
// .then((response) => console.log(response, "response"));
.then((data) => {
  // console.log(data, "data");
  let output = "";
  data.forEach((singleData) => {
 output += `<tr>
 <td>${singleData?.id}</td>
 <td>${singleData?.userId}</td>
 <td>${singleData?.title}</td>
 <td>
  <a class="btn btn-primary edit-btn"  href="#edit-post" data-post-id="${singleData?.id}">Edit</a>
  </td>
 <td>
 <a href="#" class="btn btn-danger delete-btn" data-post-id="${singleData?.id}">Delete</a>
 </td>
</tr>`;
  })

  // console.log(output, "output");
  tbody.innerHTML = output;
})
.catch((error) => {
  console.log(error);
})
// })