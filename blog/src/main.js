import { blogs } from "./data.js";

import { blogImage } from "./components/blogImage.js";
import { blogTitle } from "./components/blogTitle.js";
import { blogContent } from "./components/blogContent.js";
import { relatedLinks } from "./components/relatedLinks.js";
window.onload = () => {
  const blogDiv = document.getElementById("root");
  //pointing blog image
  const blogImageDiv = blogImage(blogs[0].imageUrl);
  console.log(blogImageDiv);
  blogDiv.appendChild(blogImageDiv);
  //pointing blog title
  const blogTitleDiv = blogTitle(blogs[0].title);
  console.log(blogTitleDiv);
  blogDiv.appendChild(blogTitleDiv);
  //pointing blog content
  const blogContentDiv = blogContent(blogs[0].content);
  console.log(blogContentDiv);
  blogDiv.appendChild(blogContentDiv);
  //pointing related links
  const asideDiv = document.getElementById("related-links");
  const blogLinksDiv = relatedLinks(blogs[0].links);
  console.log(blogLinksDiv);
  asideDiv.appendChild(blogLinksDiv);
};
