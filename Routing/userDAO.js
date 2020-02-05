let dbConfig = require("./mysqlConfig");

let getUsers = (criteria, callback) => {
    dbConfig.getDB().query(`select * from people where 1`, criteria, callback);
}

let getUserById = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dbConfig.getDB().query(`select * from people where 1 ${conditions}`, callback);
}

let loginUser = (criteria, callback) => {
    let conditions = "";
    criteria.email ? conditions += ` and email = '${criteria.email}'` : true;
    criteria.password ? conditions += ` and password = '${criteria.password}'` : true;
    console.log('select * from people where 1 ${conditions}', criteria, callback);
    dbConfig.getDB().query(`select * from people where 1 ${conditions}`, callback);
}
let createUser = (dataToSet, callback) => {
    console.log("insert into people set ? ", dataToSet, 'pankaj')
    dbConfig.getDB().query("insert into people set ? ", dataToSet, callback);
}

let deleteUser = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    console.log(`delete from people where 1 ${conditions}`);
    dbConfig.getDB().query(`delete from people where 1 ${conditions}`, callback);

}

let updateUser = (criteria, dataToSet, callback) => {
    let conditions = "";
    let setData = "";
    console.log("!!", dataToSet)
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dataToSet.name ? setData += `name = '${dataToSet.name}',` : true;
    dataToSet.email ? setData += ` email = '${dataToSet.email}',` : true;
    dataToSet.password ? setData += ` password = '${dataToSet.password}',` : true;
    dataToSet.mobile ? setData += ` mobile = '${dataToSet.mobile}'` : true;
    console.log("@@", dataToSet)
    console.log(`UPDATE people SET ${setData} where 1 ${conditions}`);
    dbConfig.getDB().query(`UPDATE people SET ${setData} where 1 ${conditions}`, callback);
}

let getUserDetail = () => {}

module.exports = {
    getUsers: getUsers,
    getUserById: getUserById,
    createUser: createUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
    getUserDetail: getUserDetail,
    loginUser: loginUser,
}
