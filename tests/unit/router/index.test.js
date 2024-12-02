const { mount } = require('@vue/test-utils');
import { createPinia, setActivePinia } from 'pinia';
import App from '@/App.vue';
import TestVista from '@/modules/spa/views/TestVista.vue';
import router from '@/router';

describe('describe test group', () => {
  let store;
  beforeEach(() => {
    store = setActivePinia(createPinia());
  });

  const wrapper = mount(App, { global: { plugins: [router] } });

  test('test should be work', async () => {
    // Arrange
    // Action
    // Assertion

    router.replace('/contador');

    await router.isReady();

    console.log(wrapper.html());

    expect(wrapper.findComponent(TestVista).exists()).toBe(true);
  });
});
