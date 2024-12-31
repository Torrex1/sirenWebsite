// вытаскивает с заговолка токен и смотрит нормис он иль нет
import tokenService from '../utils/jwt.js'

export default (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send({"Unauthorized": false});
        }

        const accessToken = authHeader.split(' ')[1];
        if (!accessToken) {
            return res.status(401).send({"Unauthorized": false});
        }

        const userData = tokenService.validateAccessToken(accessToken);
        if (!userData) {
            return res.status(401).send({"Unauthorized": false});
        }

        req.user = userData;
        next();
    }
    catch (error) {
        return res.status(401).send({"Unauthorized": false});
    }
}