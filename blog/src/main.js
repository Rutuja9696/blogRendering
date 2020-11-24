import { blogs } from "./data.js";

import { blogImage } from "./components/blogImage.js";
import { blogTitle } from "./components/blogTitle.js";
import { blogContent } from "./components/blogContent.js";

window.onload = () => {
  const blogDiv = document.getElementById("root");

  const blogImageDiv = blogImage(blogs[0].imageUrl);
  console.log(blogImageDiv);
  blogDiv.appendChild(blogImageDiv);

  const blogTitleDiv = blogTitle(blogs[0].title);
  console.log(blogTitleDiv);
  blogDiv.appendChild(blogTitleDiv);

  // const blogDiv = document.getElementById("root");
  const blogContentDiv = blogContent(blogs[0].content);
  console.log(blogContentDiv);
  blogDiv.appendChild(blogContentDiv);
};
