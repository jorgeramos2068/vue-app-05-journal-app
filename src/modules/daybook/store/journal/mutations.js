export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = (state, updatedEntry) => {
  const index = state.entries.find(entry => entry.id === updateEntry.id);
  if (index >= 0) {
    state.entries[index] = updatedEntry;
  }
};

export const addEntry = (/*state*/) => {};
