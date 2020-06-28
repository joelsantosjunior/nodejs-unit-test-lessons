import mongoose from 'mongoose';

export default () => {

    const connect = async () => {

        const db: string = (process.env.MONGO_URI as string);
        
        try {

            await mongoose.connect(db, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });

            return console.info(`Connected to ${db}`);

        } catch (error) {
            console.error('Error connecting to database: ', error);
            return process.exit(1);
        }

    }

    connect();
    
    mongoose.connection.on('disconnected', connect);
}