import express from 'express';
import { changeRoomName, createRoom, getAllRooms, joinRoom, setRoomPassword } from "../helper/rooms.js";
import { changeUserName, createUser } from '../helper/users.js';

export const router = express.Router();

router.post('/createUser', async (req: express.Request, res: express.Response) => {
    const response = createUser();

    res.json(response);
});

router.post('/changeUserName/:userId', async (req: express.Request, res: express.Response) => {
    const response = changeUserName(req.params.userId, req.body.newName);

    res.json(response);
});



