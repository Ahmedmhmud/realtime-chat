import { validationResult } from "express-validator";

function login(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: errors.array()[0].msg
        });
    }

    const { email, password } = req.body;
    
}

export {
    login
}