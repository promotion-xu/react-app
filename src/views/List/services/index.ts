import service from "../../../api/request";

export const getList = () => {
  return service.get("/api/list");
};
