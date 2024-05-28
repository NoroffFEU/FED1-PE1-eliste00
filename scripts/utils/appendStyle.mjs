export const appendStyle = (path, preconnect = false) => {
  const link = document.createElement("link");
  link.rel = preconnect ? "preconnect" : "stylesheet";
  link.type = "text/css";
  link.href = path;
  document.head.appendChild(link);
};
