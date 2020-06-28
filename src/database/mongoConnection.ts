import mongoose from 'mongoose';
import { MockMongoose } from 'mock-mongoose';

let mockMongoose: MockMongoose = new MockMongoose(mongoose);

export default () => {

    const connect = async () => {

        const db: string = (process.env.MONGO_URI as string);
        
        try {

            if (process.env.NODE_ENV === 'test') {

                // Executa uma instancia do mongo em memória
                // para que a cada bateria de testes, tenhamos um banco de dados limpo
                // e evita a manipulação indevida dos dados que estão no servidor mongodb
                // o método prepareStorage, executa, além de outras coisas,
                // a criação de todos os schemas previamente definidos.
                mockMongoose.prepareStorage().then(async () => {
                    await mongoose.connect(db, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useCreateIndex: true
                    });
                });

            } else {
                
                await mongoose.connect(db, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                });
            }

            return console.info(`Connected to ${db}`);

        } catch (error) {
            console.error('Error connecting to database: ', error);
            return process.exit(1);
        }

    }

    connect();
    
    mongoose.connection.on('disconnected', connect);
}