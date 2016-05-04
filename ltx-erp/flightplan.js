var plan = require("flightplan")

plan.target('staging', {
  host: '120.55.125.236',
  username: 'root',
  password:"vO5TKznhv0fyl4"
})


plan.local(function(local){
  local.exec("npm run deploy")
  local.exec("git add ./")
  local.exec("git commit -m 'neversion'")
  local.exec("git push origin master")
});

plan.remote(function(remote){
    // remote.exec("cd /alidata/server/tomcat-public/webapps/ROOT/ltx-erp &&  git pull origin master")
    // remote.exec("cd /alidata/server/tomcat-public/webapps/ROOT/2/ltx-erp &&  git pull origin master")
      remote.exec("cd /alidata/server/tomcat-public/webapps/ROOT/1/ltx-erp &&  git pull origin master")
})
