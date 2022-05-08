import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export function connectToDatabase() {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB conectado');
    })
    .catch((err) => {
      return console.log(`Erro na conexão com o banco: ${err}`);
    });
}
