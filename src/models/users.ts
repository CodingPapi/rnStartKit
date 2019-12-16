import {asType} from 'src/utils';
import {Model} from 'src/utils/dva';
import {Draft} from 'immer';

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
    updateUser(draft: Draft<UserState>, {payload}) {
      draft.userName = payload.userName;
    },
  },
});
