import { findBy } from "../data.js";
export const renderNewBlog = (blogId) => {
  const blogObject = data.filter((blog) => {
    return blog.id == blogId;
  });
  return blogObject;
};
