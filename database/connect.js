const mongoose = require("mongoose");

async function connect() {
  mongoose.connect("mongodb+srv://uptimer:kgCEDTwmfwCyT4oE@cluster0.yhbj3zf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );

  mongoose.connection.once("open", () => {
    console.log("Connected to Database");
  });
  return;
}

module.exports = connect;
