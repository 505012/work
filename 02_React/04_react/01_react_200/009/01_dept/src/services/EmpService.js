import http from "../utils/http-common";

const getAll = () => {
  return http.get("/customer");
};

const findByDname = (cname) => {
  return http.get(`/customer?cname=${cname}`);
};

const DeptService = {
  getAll,
  findByDname,
};
export default DeptService;
