import crypto from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default class Cryptor {
    static encrypt(objectInfo)
    {
        let encrypt = crypto.createCipher('aes-128-cbc', process.env.APP_SECRET_RAW);

        for (let i = 0; i < objectInfo.length; i++) {
            let info = objectInfo[i].toString();

            //Add separator after the first item
            if ( i > 0 ) {
                info = "|"+info;
            }

            encrypt.update(info, 'utf8', 'hex');
        }

        return encrypt.final('hex');
    }

    static decrypt(hash)
    {
        var decrypt = crypto.createDecipher('aes-128-cbc', process.env.APP_SECRET_RAW);
        decrypt.update(hash, 'hex', 'utf8');

        return decrypt.final('utf8').split("|");
    }

    static async generatePassword(passwordSent)
    {
        return new Promise((resolve, reject) => {
            const saltRounds = 10;
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(passwordSent, salt, function(err, hash) {
                    resolve(hash);
                });
            });
        })
    }

    static async comparePassword(passwordSent, hash)
    {
        return await bcrypt.compare(passwordSent, hash);
    }

    /**
     * Generate token on login or register
     * @param familyId
     * @returns string Hash
     */
    static generateFamilyToken(familyId)
    {
        return jwt.sign({
            data: Cryptor.encrypt([familyId])
        }, process.env.APP_SECRET_HASH);
    }

    /**
     * Generate token on login or register
     * @param userId
     * @param familyId
     * @returns string Hash
     */
    static generateUserToken(userId, familyId)
    {
        return jwt.sign({
            data: Cryptor.encrypt([userId, familyId])
        }, process.env.APP_SECRET_HASH);
    }

    static apiTokenValidation(token)
    {
        let res = {
            status: true
        };

        try{
            let decoded = jwt.verify(token, process.env.APP_SECRET_HASH);
            let decodedIDS = Cryptor.decrypt(decoded.data);

            res.userId = decodedIDS[0];
            res.familyId = decodedIDS[1];
        }catch (e) {
            res.error = e;
            res.status = false;
            res.error = 1000;
        }

        return res;
    }
}