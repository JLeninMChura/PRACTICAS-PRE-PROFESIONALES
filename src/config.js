import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://jhobanyticona:practicaspreprofesionales@cluster0.3ald2.mongodb.net/?retryWrites=true&w=majority',
  PORT: process.env.PORT || 4000,
  SECRET: 'practicaspp-space'
};
