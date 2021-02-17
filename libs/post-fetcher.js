import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const slugFile = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${slugFile}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  const items = {};
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slugFile;
    } else if (field === "content") {
      items[field] = content;
    } else if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));
  return posts;
}

export function MDtoHTML(markdown) {
  const result = remark().use(html).processSync(markdown);
  return result.toString();
}
