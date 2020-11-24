export const blogTitle = (title) => {
  const div = document.createElement("div");
  div.classList.add("blog-title");
  const h1 = document.createElement("h1");
  h1.innerHTML = title;
  //   img.alt = "Somealternate descriptn";
  div.appendChild(h1);
  return div;
};
