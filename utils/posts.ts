import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 定义 PostMetadata 类型
export interface PostMetadata {
  id: string;
  title?: string;
  date?: string;
  description?: string;
  keywords?: string[];
  tags?: string[];
  ogImage?: string;
}

// 获取博客文件夹路径
const postsDirectory = path.join(process.cwd(), 'app/blog');

// 递归函数来获取所有文件的路径
function getAllFilePaths(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // 如果是目录，递归读取子目录
      results = results.concat(getAllFilePaths(fullPath));
    } else if (stat.isFile() && fullPath.endsWith('.mdx')) {
      // 如果是文件且是 .mdx 文件，添加到结果中
      results.push(fullPath);
    }
  });

  return results;
}

export function getPostsMetadata(): PostMetadata[] {
  // 获取所有文件路径
  const filePaths = getAllFilePaths(postsDirectory);

  const allPostsData: PostMetadata[] = filePaths.map(filePath => {
    // 使用 gray-matter 解析 metadata 和内容
    const matterResult = matter.read(filePath, {delimiters: ['{/*', '*/}']});

    // 获取文件相对路径作为 id
    const relativePath = path.relative(postsDirectory, filePath);
    const id = relativePath.replace(/\.mdx$/, '').replace(/\\/g, '/'); // 处理 Windows 路径分隔符
    // 返回 metadata 和 id
    return {
      id: `/blog/${id.replace(/\/page$/, '')}`,
      ...matterResult.data,
    } as PostMetadata;
  });

  return allPostsData;
}
