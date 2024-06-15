export enum RoomState {
  readyToStart = 'readyToStart',
  inProgress = 'inProgress',
  finished = 'finished',
}

export interface Rooms {
  id: string;
  name: string;
  users: string[];
  password?: string;
  state: RoomState;
}
