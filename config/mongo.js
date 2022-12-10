const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },(err, res) => {
        if(!err){
            console.log('*** DB Connected ***');
        }else{
            console.log(err)
            console.log('*** DB Error connected ***');
        }
    });
}

/* Delete notification
(node:21820) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
*/

mongoose.set('strictQuery', true);

module.exports = dbConnect;