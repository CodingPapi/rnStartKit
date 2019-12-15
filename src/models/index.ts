import {Model} from 'src/utils/dva';
import LoginModel, {defaultState as loginState} from 'src/models/login';
import UserModel, {defaultState as userState} from 'src/models/users';

export const models: Array<Model> = [LoginModel, UserModel];

export const initialState = {
  login: loginState,
  user: userState,
};

export type GlobalState = Readonly<typeof initialState>;
