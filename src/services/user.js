import api from "configs/api";

const getProfile = () => {
  return api.get("user/whoami").then((res) => res || false);
};

const getMyPosts = () => api.get("post/my");

const getAllPosts = () => api.get("");

export { getProfile, getMyPosts, getAllPosts };
