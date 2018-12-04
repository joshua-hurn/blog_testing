import { Router } from 'express';
import passport from 'passport';
// import { generateHash } from '../utils/security';

let router = Router();

router.post('/login', (req, res, next) => {
    console.log('hey');
    passport.authenticate('local', (err, token, info) => {
        console.log('fml');
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else if (!token) {
            return res.status(401).json(info);
        } else {
            return res.status(201).json(token);
        }
    })(req, res, next);
});

export default router;