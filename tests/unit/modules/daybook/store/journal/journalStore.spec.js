import { createStore } from 'vuex';
import journal from '@/modules/daybook/store/journal';
import { mockJournalState } from '../../../../__mocks__/mockJournalState';

const createVuexStore = initialState =>
  createStore({
    modules: {
      journal: {
        ...journal,
        state: { ...initialState },
      },
    },
  });

describe('Journal store', () => {
  it('should have the initial state', () => {
    const store = createVuexStore(mockJournalState);
    const { isLoading, entries } = store.state.journal;
    expect(isLoading).toBe(mockJournalState.isLoading);
    expect(entries).toEqual(mockJournalState.entries);
  });

  it('should mutate the state through setEntries', () => {
    const store = createVuexStore({ isLoading: true, entries: [] });
    store.commit('journal/setEntries', mockJournalState.entries);
    expect(store.state.journal.entries.length).toBe(3);
    expect(store.state.journal.isLoading).toBe(false);
  });

  it('should mutate the state through updateEntry', () => {
    const store = createVuexStore(mockJournalState);
    const updatedEntry = {
      ...mockJournalState.entries[0],
      text: 'New text',
    };
    store.commit('journal/updateEntry', updatedEntry);
    expect(store.state.journal.entries.length).toBe(
      mockJournalState.entries.length
    );
    expect(store.state.journal.entries[0]).toEqual(updatedEntry);
  });

  it('should mutate the state through addEntry and deleteEntry', () => {
    const store = createVuexStore(mockJournalState);
    const newEntry = {
      id: 'test-id-04',
      date: 1627077227981,
      text: 'Test text 04',
    };
    store.commit('journal/addEntry', newEntry);
    expect(store.state.journal.entries.length).toBe(
      mockJournalState.entries.length + 1
    );
    expect(store.state.journal.entries[0]).toEqual(newEntry);
    store.commit('journal/deleteEntry', newEntry.id);
    expect(store.state.journal.entries.length).toBe(
      mockJournalState.entries.length
    );
  });
});
