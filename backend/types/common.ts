import { Rooms } from './rooms.ts';
import { User } from './user.js';

export interface BD {
  rooms: Rooms[],
  users: User[]
}
