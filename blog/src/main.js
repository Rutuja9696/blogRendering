import { blogs } from "./data.js";
import { blogImage } from "./components/blogImage.js";

window.onload = () => {
  const blogDiv = document.getElementById("root");
  const blogImageDiv = blogImage(blogs[0].imageUrl);
  console.log(blogImageDiv);
  blogDiv.appendChild(blogImageDiv);
};
