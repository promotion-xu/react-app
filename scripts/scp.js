const path = require("path");
const client = require("scp2");
const chalk = require("chalk");
const argv = process.argv;

const ipList = argv.slice(2);

const servers = {
  82: "admin:12345678*a@10.10.01.10:/home/dbooking/db-project/" // 4.0 CI环境
};

function upload(ip) {
  if (servers[ip]) {
    console.info(chalk.yellow(servers[ip]));
    client.scp(path.resolve("../build/"), servers[ip], err => {
      if (err) {
        console.error(chalk.red(err.message));
      } else {
        console.info(chalk.green(ip + " Upload Success."));
      }
    });
  } else {
    console.log(chalk.red(`Not matched server ${ip}.`));
  }
}

if (ipList.length) {
  ipList.forEach(function(item) {
    upload(item);
  });
} else {
  console.log(chalk.red("No ip scpecify."));
}
