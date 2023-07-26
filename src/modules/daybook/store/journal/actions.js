import journalApi from '@/api/journalApi';

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get('/entries.json');
  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }
  commit('setEntries', entries);
};

export const updateEntry = async ({ commit }, entry) => {
  try {
    const { data } = await journalApi.put(`/entries/${entry.id}.json`, {
      ...entry,
    });
    commit('updateEntry', data);
  } catch (err) {
    console.error(err);
  }
};

export const createEntry = async ({ commit }, entry) => {
  try {
    const { data } = await journalApi.post('/entries.json', entry);
    commit('addEntry', {
      id: data.name,
      ...entry,
    });
    return data.name;
  } catch (err) {
    console.error(err);
    return '';
  }
};
