import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://thakurmanan19012003:manan2003@ac-wqect4e-shard-00-00.syyltar.mongodb.net:27017,ac-wqect4e-shard-00-01.syyltar.mongodb.net:27017,ac-wqect4e-shard-00-02.syyltar.mongodb.net:27017/?ssl=true&replicaSet=atlas-zp3gel-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;