import mongoose from "mongoose";

mongoose
  .connect('mongodb+srv://jhobanyticona:practicaspreprofesionales@cluster0.3ald2.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
  })
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.log(err));
