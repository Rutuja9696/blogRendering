import { blogs } from "../data.js";
export const findBlogById = (blogId) => {
  const blogObject = data.filter((blog) => {
    return blog.id == blogId;
  });
  return blogObject;
};
