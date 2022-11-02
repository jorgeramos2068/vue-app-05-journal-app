import { shallowMount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';

describe('HomeView component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HomeView);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should redirect to no-entry when a button is clicked', () => {
    const mockRouter = {
      push: jest.fn(),
    };
    const wrapper = shallowMount(HomeView, {
      global: { mocks: { $router: mockRouter } },
    });
    wrapper.find('button').trigger('click');
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'no-entry' });
  });
});
