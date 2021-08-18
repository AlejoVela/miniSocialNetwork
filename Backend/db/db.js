const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        console.log("Connection with DB is OK");
    } catch (e) {
        console.log(`Failed to connect with DB: Error ${e}`);
        throw new Error(`Failed to connect with DB: Error ${e}`);
    }
};

module.exports = { dbConnection };