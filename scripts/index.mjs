import { createFooter } from "./footer.mjs";
import { createHeader } from "./header.mjs";
import { router } from "./router.mjs";
import { appendStyle } from "./utils/appendStyle.mjs";

const app = async () => {
  appendStyle("/styles/theme.css");
  createHeader();
  await router();
  createFooter();
};
app();
