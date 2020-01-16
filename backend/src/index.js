const
    express = require('express'),
    mongoose = require('mongoose'),
    dotenv = require('dotenv'),
    cors = require('cors'),
    routes = require('./routes');

const app = express();

dotenv.config();

const
    port = process.env.APP_PORT,
    mongo_connection = process.env.MONGO_CONNECTION_STRING;

mongoose.connect(mongo_connection, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app
    .use(express.json())
    .use(routes)
    .use(cors());

app.listen(port, console.log(`Backend running on port ${port}`));