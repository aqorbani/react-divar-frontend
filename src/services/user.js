import api from "configs/api";

const getProfile = () => {
  return api.get("user/whoami").then((res) => res || false);
};

const getMyPosts = () => api.get("post/my");

export { getProfile, getMyPosts };
