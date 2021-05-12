const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const PORT = 3000;

const User = require("./models/user");

mongoose.connect(process.env.DATABASE, 
    { useUnifiedTopology: true, useUnifiedTopology: true }, 
    (err) => {
    if (err) {console.log(err)}
    else {console.log('connected to the database')}
})

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

const dogRoutes = require("./routes/dog");
// app.use("/api", dogRoutes);
app.use(dogRoutes);



const hwOneRoutes = require("./routes/hwOne")
// app.use("/api", hwOneRoutes);
app.use(hwOneRoutes);

const hwTwoRoutes = require("./routes/hwTwo")
// app.use("/api", hwTwoRoutes);
app.use(hwTwoRoutes);

// const hw2Routes = require("./routes/hw2")
// app.use("/api", hw2Routes);

const testRoutes = require("./routes/test")
// app.use("/api", testRoutes)
app.use(testRoutes)

const userRoutes = require("./routes/auth");
// app.use('/api', userRoutes);
app.use(userRoutes);

// app.listen(PORT, (err) => {
//     if (err) {console.log(err)}
//     else {console.log("listening on PORT:", PORT)}
// });

module.exports = {
    path: '/api',
    handler: app
}