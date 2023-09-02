
function isAuthenticated(req, res, next) {
    const user = firebase.auth().currentUser;
    if (user) {
        req.user = user;
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
}
module.exports = isAuthenticated;