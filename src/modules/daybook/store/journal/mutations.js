export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = (state, updatedEntry) => {
  const index = state.entries.findIndex(entry => entry.id === updatedEntry.id);
  if (index >= 0) {
    state.entries[index] = updatedEntry;
  }
};

export const addEntry = (state, newEntry) => {
  state.entries = [newEntry, ...state.entries];
};

export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter(entry => entry.id !== id);
};
