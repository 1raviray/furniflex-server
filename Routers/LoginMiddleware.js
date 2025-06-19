const jwt = require("jsonwebtoken");

const middleware = (req, res, next) => {
    // console.log(req.headers);
    try {
        let token = req.header("x-token");
        if (!token) {
            return res.send("Token not there"); // Return here to stop further execution
        }
        let decode = jwt.verify(token, "furniflex");
        req.user = decode.user;
        next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({
              name: err.name,
              message: err.message,
              expiredAt: err.expiredAt,
            });
          }
        res.send(err);
    }
};

module.exports = middleware;