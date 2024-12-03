import ContadorComponent from '@/modules/spa/components/ContadorComponent.vue';
import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import { nextTick } from 'vue';

describe('<ContadorComponent/>', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('el contador debe inicializar con valor 0 por default', () => {
    const wrapper = mount(ContadorComponent);

    const span = wrapper.find('span');

    expect(span.text()).toContain('Value: 0');
  });

  test('el contador debe recibir props e inicializar con ese valor', async () => {
    const initialValue = 5;
    const wrapper = mount(ContadorComponent, { props: { initialValue } });

    await nextTick();
    const span = wrapper.find('span');
    expect(span.text()).toContain(`Value: ${initialValue}`);
  });

  test('el botón incrementar funciona', async () => {
    const wrapper = mount(ContadorComponent);

    const button = wrapper.find('button');
    await button.trigger('click');

    const span = wrapper.find('span');

    expect(span.text()).toContain('Value: 1');
  });

  test('el botón decrementar funciona', async () => {
    const wrapper = mount(ContadorComponent);

    const buttons = wrapper.findAll('button');
    await buttons[1].trigger('click');

    const span = wrapper.find('span');

    expect(span.text()).toContain('Value: -1');
  });
});
