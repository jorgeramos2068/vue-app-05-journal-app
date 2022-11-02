import { shallowMount } from '@vue/test-utils';
import AboutView from '@/views/AboutView.vue';

describe('AboutView component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AboutView);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should contain the about page text', () => {
    expect(wrapper.find('h1').exists()).toBeTruthy();
    expect(wrapper.find('h1').text()).toBe('This is an about page');
  });
});
