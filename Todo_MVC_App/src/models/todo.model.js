import fs from "fs";

const DB_PATH = "src/db.json";

export const readTodos = () => {
  const data = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(data).todos;
};

export const writeTodos = (todos) => {
  fs.writeFileSync(
    DB_PATH,
    JSON.stringify({ todos }, null, 2)
  );
};
