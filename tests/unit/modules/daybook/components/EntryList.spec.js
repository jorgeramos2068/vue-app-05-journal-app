import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import journal from '@/modules/daybook/store/journal';
import EntryList from '@/modules/daybook/components/EntryList';
import { mockJournalState } from '../../../__mocks__/mockJournalState';

describe('EntryList component', () => {
  let wrapper;
  /*const mockJournalModule = {
    namespaced: true,
    getters: {
      getEntriesByTerm,
    },
    state: () => ({
      isLoading: false,
      entries: mockJournalState.entries,
    }),
  };

  const store = createStore({
    modules: {
      journal: { ...mockJournalModule },
    },
  });*/

  const createVuexStore = initialState =>
    createStore({
      modules: {
        journal: {
          ...journal,
          state: { ...initialState },
        },
      },
    });

  const store = createVuexStore(mockJournalState);

  const mockRouter = {
    push: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallowMount(EntryList, {
      global: { mocks: { $router: mockRouter }, plugins: [store] },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call getEntriesByTerm and show some entries', () => {
    expect(wrapper.findAll('entry-stub').length).toBe(
      mockJournalState.entries.length
    );
  });

  it('should call getEntriesByTerm and filter entries', async () => {
    const input = wrapper.find('input');
    await input.setValue('text 02');
    expect(wrapper.findAll('entry-stub').length).toBe(1);
  });

  it('should redirect to new', () => {
    wrapper.find('button').trigger('click');
    expect(mockRouter.push).toHaveBeenCalledWith({
      name: 'entry',
      params: { id: 'new' },
    });
  });
});
