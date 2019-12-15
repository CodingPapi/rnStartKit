import {asType} from 'src/utils';
import {Model} from 'src/utils/dva';

export const defaultState = {
  userName: '',
  authed: false,
};

export type UserState = Readonly<typeof defaultState>;

export default asType<Model>({
  namespace: 'user',
  state: defaultState,
  effects: {
    *register(action, {/* call, */ put}) {
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
