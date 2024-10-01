const host = process.env.BASE_URL;
const authBase = "/api/auth";

export const endpoints = {
  verify: host + authBase + "/verify/",
  profile: host + authBase + "/profile/",
  login: host + authBase + "/login/",
  register: host + authBase + "/register/",
  refresh: host + authBase + "/refresh/",
};
