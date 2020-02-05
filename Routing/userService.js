let async = require('async'),
    parseString = require('xml2js').parseString;
let userDAO = require('./userDAO');

/***API to get the article list */
let getUsers = (data, callback) => {
    async.auto({
        user: (cb) => {
            userDAO.getUsers({}, (err, data) => {
                if (err) {
                    console.log(data, 'data testing----');
                    cb(null, { "errorCode": 401, "statusMessage": "Servers are busy" });
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.user);
    })
}

/***API to get the article detail by id */
let getUserById = (data, callback) => {
    async.auto({
        user: (cb) => {
            let criteria = {
                "id": data.id
            }
            userDAO.getUserById(criteria, (err, data) => {
                if (err) {
                    console.log(err, 'error----');
                    cb(null, { "errorCode": 402, "statusMessage": "Servers are busy" });
                    return;
                }
                cb(null, data[0]);
                return;
            });
        }
    }, (err, response) => {
        callback(response.user);
    })
}


/***API to login */
let loginUser = (data, callback) => {
    console.log("muskii", data)
    async.auto({
        user: (cb) => {
            let criteria = {
                "email": data.email,
                "password": data.password,

            }
            console.log("Criteria", criteria);
            userDAO.loginUser(criteria, (err, data) => {
                if (err) {
                    console.log(err, 'error----');
                    cb(null, { "errorCode": 402, "statusMessage": "Servers are busy" });
                    return;
                }
                cb(null, data[0]);
                return;
            });
        }
    }, (err, response) => {
        callback(response.user);
    })
}

/**API to create the user */
let createUser = (data, callback) => {
    async.auto({
        user: (cb) => {
                var dataToSet = {
                    "id": data.id,
                    "name": data.name ? data.name : '',
                    "email": data.email,
                    "password": data.password,
                    "mobile": data.mobile,
                }
                console.log(dataToSet);
                userDAO.createUser(dataToSet, (err, dbData) => {
                    if (err) {
                        cb(null, { "statusCode": 405, "statusMessage": "servers are busy" });
                        return;
                    }

                    cb(null, { "statusCode": 202, "statusMessage": "Yes", "result": dataToSet });
                });
            }
            //]
    }, (err, response) => {
        callback(response.user);
    });
}

/**API to delete the user */
let deleteUser = (data, callback) => {
    console.log(data, 'data to set')
    async.auto({
        removeUser: (cb) => {
            if (!data.id) {
                cb(null, { "statusCode": 407, "statusMessage": "Params are missing" })
                return;
            }
            var criteria = {
                id: data.id,
            }
            userDAO.deleteUser(criteria, (err, dbData) => {
                if (err) {
                    console.log(err);
                    cb(null, { "statusCode": 408, "statusMessage": "Servers are busy" });
                    return;
                }
                cb(null, { "statusCode": 205, "statusMessage": "Deleted" });
            });
        }
    }, (err, response) => {
        callback(response.removeUser);
    });
}

/**API to update the article */
let updateUser = (data, callback) => {
    async.auto({
        userUpdate: (cb) => {
            if (!data.id) {
                cb(null, { "statusCode": 601, "statusMessage": "Params are missing" })
                return;
            }
            console.log('phase 1');
            var criteria = {
                id: data.id,
            }
            var dataToSet = {
                "name": data.name,
                "email": data.email,
                "password": data.password,
                "mobile": data.mobile,
            }
            console.log(criteria, 'test', dataToSet);
            userDAO.updateUser(criteria, dataToSet, (err, dbData) => {
                if (err) {
                    cb(null, { "statusCode": 602, "statusMessage": "SERVER_BUSY" });
                    return;
                } else {
                    cb(null, { "statusCode": 202, "statusMessage": "Data updated", "result": dataToSet });
                }
            });
        }
    }, (err, response) => {
        callback(response.userUpdate);
    });
}

module.exports = {
    getUsers: getUsers,
    getUserById: getUserById,
    createUser: createUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
    loginUser: loginUser,

};
