export type PostsListItem = {
  content: string;
  slug: string;
  data: {
    [key: string]: any;
  };
};

export type PostsList = {
  posts: PostsListItem[];
};

export type TinaSPost = {
  author: string;
  body?: any;
  date: string;
  excerption: string;
  keyword?: string | null;
  hero: string;
  id: string;
  title: string;
  _sys: {
    basename: string;
    breadcrumbs: string[];
    extension: string;
    filename: string;
    path: string;
    relativePath: string;
  };
};
