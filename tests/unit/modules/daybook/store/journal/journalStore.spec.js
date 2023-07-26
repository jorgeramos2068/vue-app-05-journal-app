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
});
