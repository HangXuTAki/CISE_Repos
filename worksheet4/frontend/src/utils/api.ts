import axios from 'axios';

// 定义 API 基础 URL
const API_BASE_URL = 'http://localhost:3000';

// 获取所有文章
export const fetchArticles = () => {
  return axios.get(`${API_BASE_URL}/articles`);
};

// 创建新文章
export const createArticle = (articleData: any) => {
  return axios.post(`${API_BASE_URL}/articles`, articleData);
};

// 获取特定文章
export const fetchArticleById = (id: string) => {
  return axios.get(`${API_BASE_URL}/articles/${id}`);
};

// 更新文章
export const updateArticle = (id: string, articleData: any) => {
  return axios.put(`${API_BASE_URL}/articles/${id}`, articleData);
};

// 删除文章
export const deleteArticle = (id: string) => {
  return axios.delete(`${API_BASE_URL}/articles/${id}`);
};
