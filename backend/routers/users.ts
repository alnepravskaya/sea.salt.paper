import express from 'express';
import { changeRoomName, createRoom, getAllRooms, joinRoom, setRoomPassword } from "../manager/rooms.js";
import { changeUserName, createUser } from '../manager/users.js';

export const router = express.Router();

router.post('/createUser', async (req: express.Request, res: express.Response) => {
    const response = createUser();


    if(response) {
        res.json({ status: 200, body: response });
    } else {
        res.json({ status: 404, message: 'You can not create new user' });
    }
});

router.post('/changeUserName/:userId', async (req: express.Request, res: express.Response) => {
    const response = changeUserName(req.params.userId, req.body.newName);

    if(response) {
        res.json({ status: 200, body: response });
    } else {
        res.json({ status: 404, message: 'You can not change user\'s name' });
    }
});



