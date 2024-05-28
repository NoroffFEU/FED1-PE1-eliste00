export const createPostPage = () => {
  const container = document.createElement("div");
  container.innerHTML = ` <div>
      <div class="title">
        <h1>Post</h1>
       
    </div>`;
  document.body.appendChild(container);
};
