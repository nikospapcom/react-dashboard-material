import uuid from "uuid/v1";
import moment from "moment";

export default [
  {
    id: uuid(),
    name: "Assigned himself to the React Material Dashboard project.",
    action: "assing",
    updatedAt: moment().subtract(2, "hours")
  },
  {
    id: uuid(),
    name: "Opened 3 issues in 2 projects.",
    action: "bug",
    updatedAt: moment().subtract(2, "hours")
  },
  {
    id: uuid(),
    name: "Added 3 new tasks.",
    action: "add",
    updatedAt: moment().subtract(3, "hours")
  },
  {
    id: uuid(),
    name: "Marked 3 tasks as completed.",
    action: "complete",
    updatedAt: moment().subtract(5, "hours")
  },
  {
    id: uuid(),
    name: "Opened 3 new issues.",
    action: "bug",
    updatedAt: moment().subtract(9, "hours")
  }
];
