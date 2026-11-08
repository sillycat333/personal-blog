export interface PostFrontmatter {
  title: string;
  author: string;
  description: string;
  pubDate: string;
  tags: string[];
}

export interface Post {
  frontmatter: PostFrontmatter;
  url: string;
}
