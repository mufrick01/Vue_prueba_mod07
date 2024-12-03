import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';
import ContadorView from '@/modules/spa/views/ContadorView.vue';
import PadreHijoView from '@/modules/spa/views/PadreHijoView.vue';
import TestVista from '@/modules/spa/views/TestVista.vue';

describe('Router', () => {
  let store;
  beforeEach(() => {
    store = setActivePinia(createPinia());
  });

  const wrapper = mount(App, { global: { plugins: [router] } });

  test('el componente ContadorView debe mostrarse al navegar "contador"', async () => {
    // Action

    await router.push({ name: 'contador' });

    await router.isReady();

    // Assertion
    expect(wrapper.findComponent(ContadorView).exists()).toBe(true);
    expect(router.currentRoute.value.path).toBe('/contador');
  });

  test('el componente ContadorView debe mostrarse al navegar a padre', async () => {
    //action
    await router.push({ name: 'padre' });

    await router.isReady();
    //assertion
    expect(wrapper.findComponent(PadreHijoView).exists()).toBe(true);
    expect(router.currentRoute.value.path).toBe('/padrehijo');
  });

  test('el componente TestVista debe mostrarse al navegar a home ', async () => {
    //action
    await router.push({ name: 'home' });

    await router.isReady();
    //assertion
    expect(wrapper.findComponent(TestVista).exists()).toBe(true);
    expect(router.currentRoute.value.path).toBe('/');
  });
});
