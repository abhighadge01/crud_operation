export declare class CommonResponse {
    message: string;
    status: number;
}
export declare class UsersDataList {
    userName: string;
    age: number;
    hobbies: string[];
}
export declare class UsersList extends CommonResponse {
    data: UsersDataList[];
}
export declare class UsersSpecificList extends CommonResponse {
    data: UsersDataList;
}
