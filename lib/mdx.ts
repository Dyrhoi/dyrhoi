import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { JSXElementConstructor, ReactElement } from "react";
import { ZodError, z } from "zod";
import React from "react";

const rootDirectory = path.join(process.cwd(), "content");

export interface Post {
  meta: {
    slug: string;
    title: string;
    tags: string[];
    date: string;
    author: string;
    image?: string;
    frontmatter: Record<string, unknown>;
    description: string;
  };
  content: ReactElement<any, string | JSXElementConstructor<any>>;
}

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter: _frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  const validateFrontmatter = z.object({
    title: z.string(),
    tags: z.string(),
    date: z.string(),
    author: z.string(),
    image: z.string().optional(),
  });

  const parsedFrontMatter = validateFrontmatter.parse(_frontmatter);

  const description = fileContent
    .slice(fileContent.lastIndexOf("---") + 3)
    .split("\n")
    .slice(1, 5)
    .join(" ")
    .replace(/([#*_~`])/g, "");

  return {
    meta: {
      ...parsedFrontMatter,
      tags: parsedFrontMatter.tags.split(","),
      frontmatter: { ..._frontmatter },
      slug: realSlug,
      description,
    },
    content,
  };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  return (
    await Promise.all(
      files.map(async (file) => {
        try {
          const { meta } = await getPostBySlug(file);
          return meta;
        } catch (_ignored) {
          return undefined;
        }
      })
    )
  ).filter(Boolean) as Post["meta"][];
};

export const getBlogImage = ({ name, post }: { name?: string; post?: string }) => {
  const blogPath = "/assets/images/blog/";
  if (!name) return `${blogPath}default.png`;
  return `${blogPath}${post ? `${post}/` : ""}${name}`;
};
