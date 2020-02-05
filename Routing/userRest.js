let express = require('express'),
    router = express.Router(),
    userService = require('./userService');

/**Api to get the list of user */
router.get('/get-all-user', (req, res) => {
    userService.getUsers(req.query, (data) => {
        res.send(data);
    });
});

/**API to get the user by id... */
router.get('/get-user-by-id', (req, res) => {
    console.log('in be', req.body);
    userService.getUserById(req.query, (data) => {
        res.send(data);
    });
});
/** API to login  */
router.get('/login-user', (req, res) => {
    console.log('in be', JSON.stringify(req.body));

    userService.loginUser(req.query, (data) => {
        res.send(data);
    });
});

/**Api to create user */
router.post('/create-user', (req, res) => {
    userService.createUser(req.body, (data) => {
        res.send(data);
    });
});

/**Api to delete the article */
router.delete('/delete-user', (req, res) => {
    userService.deleteUser(req.query, (data) => {
        res.send(data);
    });
});
/**Api to update article */
router.put('/update-user', (req, res) => {
    userService.updateUser(req.body, (data) => {
        res.send(data);
    });
});


module.exports = router;
