import authApi from '@/api/authApi';

export const createUser = async ({ commit }, user) => {
  const { email, password } = user;
  try {
    const { data } = await authApi.post('/signUp', {
      email,
      password,
      returnSecureToken: true,
    });
    console.log('Data:', data, commit);
    // TODO: Mutation: commit('userLogin');
    return { ok: true };
  } catch (e) {
    return { ok: false, message: e.response?.data?.error?.message };
  }
};
