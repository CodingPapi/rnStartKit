import {asType} from 'src/utils';
import {Model} from 'src/utils/dva';

type LoginType = 'loggedIN' | 'loggedOUT';
export const defaultState = {
  loginState: 'loggedOUT' as LoginType,
  lastLoggedUser: '',
};

export type LoginState = Readonly<typeof defaultState>;

export default asType<Model>({
  namespace: 'login',
  state: defaultState,
  effects: {
    *login(action, {/* call, */ put}) {
      try {
        // const remoteData = yield call(loginFunction, {
        //   name: 'user',
        //   data: {},
        // });
        // const {userName} = remoteData.result;
        const userName = 'hello';
        yield put({
          type: 'updateUser',
          payload: {
            userName: userName || '',
          },
        });
      } catch (err) {}
    },
  },
  reducers: {
    updateUser(state, {payload}) {
      return {
        ...state,
        userName: payload.userName,
      };
    },
  },
});
