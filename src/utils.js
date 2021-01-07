const TOKEN_NAME = "token";

// 把 token 存到 localstorage
export const setAuthToken = (token) => {
  return localStorage.setItem(TOKEN_NAME, token);
};

// 把 token 從 localstorage 拿出來
export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

// 計算所有文章頁數
export const getPages = (allPages) => {
  let pages = [];
  for (let i = 0; i <= allPages; i++) {
    pages.push(i);
  }
  return pages;
};
