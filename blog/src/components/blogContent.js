export const blogContent = (content) => {
  const div = document.createElement("div");
  div.classList.add("blog-content");
  const p = document.createElement("p");
  p.innerHTML = content;
  div.appendChild(p);
  return div;
};
