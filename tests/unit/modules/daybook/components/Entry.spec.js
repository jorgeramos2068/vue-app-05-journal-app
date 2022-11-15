import { shallowMount } from '@vue/test-utils';
import Entry from '@/modules/daybook/components/Entry';
import { mockJournalState } from '../../../__mocks__/mockJournalState';

describe('Entry component', () => {
  let wrapper;
  const mockRouter = {
    push: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallowMount(Entry, {
      props: { entry: mockJournalState.entries[0] },
      global: { mocks: { $router: mockRouter } },
    });
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should redirect when clicking on entry-container', () => {
    wrapper.find('.entry-container').trigger('click');
    expect(mockRouter.push).toHaveBeenCalledWith({
      name: 'entry',
      params: { id: mockJournalState.entries[0].id },
    });
  });

  it('should test computed properties', () => {
    expect(wrapper.vm.day).toBe(23);
    expect(wrapper.vm.month).toBe('July');
    expect(wrapper.vm.year).toBe(2021);
  });
});
