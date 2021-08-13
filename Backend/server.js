const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // mongodb connection
    const con = await mongoose.connect(
      "mongodb+srv://admin:admin123@cluster0.h4wzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );

    console.log(`MongoDB connected: ` + con.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
