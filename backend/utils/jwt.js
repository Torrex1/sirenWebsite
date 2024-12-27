import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class TokenService {

    generateToken(payload) {
        const access_token = jwt.sign(payload, process.env.JWT_ACCESS, { expiresIn: '15m' });
        const refresh_token = jwt.sign(payload, process.env.JWT_REFRESH, { expiresIn: '30d' });

        return { access_token, refresh_token };
    }

    validateAccessToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS);
        }
        catch (error) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH);
        }
        catch (error) {
            return null;
        }
    }
}

export default new TokenService();