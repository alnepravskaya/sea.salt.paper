import express from 'express';
import {
    changeRoomName,
    changeRoomState,
    createRoom,
    getAllRooms, getRoomUsers,
    joinRoom, leaveRoom,
    setRoomPassword
} from "../manager/rooms.js";

export const router = express.Router();

router.get('/getAllRooms', async (req: express.Request, res: express.Response) => {
    const response = getAllRooms();

    if(response) {
        res.json({ status: 200, body: response });
    } else {
        res.json({ status: 404, message: 'Not Found' });
    }
});


router.post('/createRoom', async (req: express.Request, res: express.Response) => {
    const response = createRoom();

    if(response) {
        res.json({ status: 200, body: response });
    } else {
        res.json({ status: 404, message: 'Server can not create room' });
    }
});

router.post('/changeRoomName/:roomId', async (req: express.Request, res: express.Response) => {
    const response = changeRoomName(req.params.roomId, req.body.newName);

    if(response) {
        res.json({ status: 200, body: response });
    } else {
        res.json({ status: 404, message: 'Room is not found' });
    }
});

router.post('/joinRoom/:roomId', async (req: express.Request, res: express.Response) => {
    const response = joinRoom(req.params.roomId, req.body.userId);

    if(response) {
        res.json({ status: 200, body: response });
    } else {
        res.json({ status: 404, message: 'You can not join room' });
    }
});

router.post('/setRoomPassword/:roomId', async (req: express.Request, res: express.Response) => {
    const response = setRoomPassword(req.params.roomId, req.body.password);

    if(response) {
        res.json({ status: 200, body: response });
    } else {
        res.json({ status: 404, message: 'You can not change room password' });
    }
});

router.post('/startGame/:roomId', async (req: express.Request, res: express.Response) => {
    const response = changeRoomState(req.params.roomId);

    if(response) {
        res.json({ status: 200, body: response });
    } else {
        res.json({ status: 404, message: 'You can not start game' });
    }
});

router.post('/roomUsers/:roomId', async (req: express.Request, res: express.Response) => {
    const response = getRoomUsers(req.params.roomId);

    if(response) {
        res.json({ status: 200, body: response });
    } else {
        res.json({ status: 404, message: 'You can not get users of this room' });
    }
});

router.post('/leaveRoom/:roomId', async (req: express.Request, res: express.Response) => {
    const response = leaveRoom(req.params.roomId, req.body.userId);

    if(response) {
        res.json({ status: 200, body: response });
    } else {
        res.json({ status: 404, message: 'You can not leave this room' });
    }
});
