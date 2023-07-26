import { shallowMount } from '@vue/test-utils';
import Fab from '@/modules/daybook/components/Fab';

describe('Fab component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Fab);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should show the default icon', () => {
    expect(wrapper.find('i.fa-plus').exists()).toBeTruthy();
  });

  it('should show the icon by argument', () => {
    const testIcon = 'fa-something';
    const wrapper = shallowMount(Fab, {
      props: { icon: testIcon },
    });
    expect(wrapper.find(`i.${testIcon}`).exists()).toBeTruthy();
  });

  it('should emit the on-click event', () => {
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.emitted('on-click').length).toBe(1);
  });
});
