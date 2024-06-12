import express from 'express';
import {
    changeRoomName,
    changeRoomState,
    createRoom,
    getAllRooms,
    joinRoom,
    setRoomPassword
} from "../helper/rooms.js";
import { createUser } from '../helper/users.js';

export const router = express.Router();

router.get('/getAllRooms', async (req: express.Request, res: express.Response) => {
    const response = getAllRooms();
    res.json(response);
});


router.post('/createRoom', async (req: express.Request, res: express.Response) => {
    const response = createRoom();
    res.json(response);
});

router.post('/changeRoomName/:roomId', async (req: express.Request, res: express.Response) => {
    const response = changeRoomName(req.params.roomId, req.body.newName);

    res.json(response);
});

router.post('/joinRoom/:roomId', async (req: express.Request, res: express.Response) => {
    const response = joinRoom(req.params.roomId, req.body.userId);

    res.json(response);
});

router.post('/setRoomPassword/:roomId', async (req: express.Request, res: express.Response) => {
    const response = setRoomPassword(req.params.roomId, req.body.password);

    res.json(response);
});

router.post('/startGame/:roomId', async (req: express.Request, res: express.Response) => {
    const response = changeRoomState(req.params.roomId);

    res.json(response);
});

