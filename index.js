import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const git = simpleGit();

const markCommit = () => {
  return moment()
    .subtract(1, "year")
    .add(1, "day")
    .add(42, "weeks")
    .add(4, "days")
    .format();
};

const path = "./data.json";
const date = markCommit();

const data = {
  date: date,
};

jsonfile.writeFile(path, data, async () => {
  try {
    await git.add([path]);
    await git.commit(date, { "--date": date });
    await git.push();
    console.log("Commit pushed with date:", date);
  } catch (err) {
    console.error(err);
  }
});
