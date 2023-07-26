import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import Swal from 'sweetalert2';
import EntryView from '@/modules/daybook/views/EntryView.vue';
import journal from '@/modules/daybook/store/journal';
import { mockJournalState } from '../../../__mocks__/mockJournalState';

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
  showLoading: jest.fn(),
  close: jest.fn(),
}));

describe('EntryView component', () => {
  let wrapper;

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
  store.dispatch = jest.fn();

  const mockRouter = {
    push: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallowMount(EntryView, {
      global: { mocks: { $router: mockRouter }, plugins: [store] },
      props: { id: 'test-id-01' },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should redirect the user if the id does not exist', () => {
    const wrapper = shallowMount(EntryView, {
      global: { mocks: { $router: mockRouter }, plugins: [store] },
      props: { id: 'not-valid' },
    });
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'no-entry' });
  });

  it('should show the entry if it exist', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(mockRouter.push).not.toHaveBeenCalled();
  });

  it('should delete the entry and go out', async () => {
    Swal.fire.mockReturnValueOnce(Promise.resolve({ isConfirmed: true }));
    await wrapper.find('.btn-danger').trigger('click');
    expect(Swal.fire).toHaveBeenCalledWith({
      title: 'Are you sure',
      text: 'This action cannot be undone',
      showDenyButton: true,
      confirmButtonText: 'Yes, I am sure',
    });
    expect(store.dispatch).toHaveBeenCalledWith(
      'journal/deleteEntry',
      'test-id-01'
    );
    expect(mockRouter.push).toHaveBeenCalled();
  });
});
