const { error } = require('console');
const db = require('./dbconnection');
const httpMsg = require('./httpmessages');
const util = require('util');

function registerUser(req, res, reqBody) {
  try {
    if (reqBody) {
      let data = JSON.parse(reqBody);
      if (data) {
        let sql = "INSERT INTO Users(FirstName, LastName, Email, Password, IDNumber) Values (";
        sql += util.format("'%s','%s', '%s','%s','%s'", data.FirstName, data.LastName, data.Email, data.Password, data.IDNumber) + ")";
        console.log(sql);
       
        db.executeSql(sql, function (data, err) {
          if (err) {
            httpMsg.show500Error(req, res, err);
          } else {
            httpMsg.sendJson(req,res,{message: 'you have successfully registered'});
          }
        });
      } else {
        throw new Error("Invalid input");
      }
    }
  } catch (ex) {
    httpMsg.show500Error(req, res, ex);
  }
}
  
module.exports = {  registerUser };
