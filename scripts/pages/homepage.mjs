export const createHomePage = () => {
  console.log("home");
  const container = document.createElement("div");
  container.innerHTML = ` <div>
        <h1>Homepage</h1>
    </div>`;
  document.body.appendChild(container);
};
