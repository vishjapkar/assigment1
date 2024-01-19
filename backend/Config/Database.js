const mongoose = require("mongoose");

const ConnectDatabase = () => {
  try {
    mongoose.connect(process.env.MongoUrl, {
      
       
      })
      .then(() => console.log("Database is connected To Server"));
  } catch (error) {
    console.log("database is not Connected To Server");
  }
};

module.exports = ConnectDatabase;
