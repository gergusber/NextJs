import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { locale, locales } from "moment";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = [], locales = []) {
  let slugFile = "";

  let activeLocale = "";
  if (locales.length > 0) {
    locale.forEach((locale) => {
      const splitterSlug = slug.split(`.${locale}.md`);
      activeLocale = splitterSlug.length > 1 ? locale : activeLocale;
      slugFile = splitterSlug[0];
    });
  } else {
    slugFile = slug.replace(/\.md$/, "");
  }

  const fullPath = join(
    postsDirectory,
    activeLocale ? `${slugFile}.${activeLocale}.md` : `${slugFile}.md`
  );
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

export function getAllPosts(fields = [], locale = []) {
  const slugs = getPostSlugs();
  if (locale.length > 0) {
    slugs = slugs.filter((slug) =>
      locales.find((locale) => slug.indexOf(`.${locale}.`) > -1)
    );
  }

  const posts = slugs.map((slug) => getPostBySlug(slug, fields));
  return posts;
}

export function MDtoHTML(markdown) {
  const result = remark().use(html).processSync(markdown);
  return result.toString();
}
