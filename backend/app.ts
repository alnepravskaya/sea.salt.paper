import express from 'express';

const app = express();
const port = 9000;

app.listen(port,  () => {
    console.log(`Express server listening on port ${port}`);
});

import { router as RoomsRoutes } from './routers/rooms.ts';
import { router as UsersRoutes } from './routers/users.ts';
import bodyParser from 'body-parser';

app.use(bodyParser.json());
app.use(RoomsRoutes);
app.use(UsersRoutes);
