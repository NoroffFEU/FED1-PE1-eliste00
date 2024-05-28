import {
  create404Page,
  createHomePage,
  createLoginPage,
  createPostEditPage,
  createPostPage,
  createRegisterPage,
} from "./pages/index.mjs";

export const router = async () => {
  const url = new URL(window.location.href);
  const path = url.pathname;
  const query = Object.fromEntries(url.searchParams.entries());

  switch (path) {
    case "/":
    case "/index.html":
      await createHomePage();
      break;
    case "/post":
    case "/post/index.html":
      // createPostPage(query.id);
      await createPostPage();
      break;
    case "/post/edit":
    case "/post/edit.html":
      await createPostEditPage(query.id);
      break;
    case "/account/login":
    case "/account/login.html":
      await createLoginPage();
      break;
    case "/account/register/":
    case "/account/register.html":
      await createRegisterPage();
      break;
    default:
      await create404Page();
  }
};
