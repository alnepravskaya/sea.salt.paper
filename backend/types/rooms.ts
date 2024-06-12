enum RoomState {
    "readyToStart" ,
    "inProgress",
    "finished",
}

export interface Rooms {
    id: string;
    name: string;
    users: string[];
    password?: string;
    state: RoomState;
}
