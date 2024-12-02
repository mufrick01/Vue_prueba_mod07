const { default: ChildForm } = require('@/modules/spa/components/ChildForm.vue');
const { mount } = require('@vue/test-utils');

describe('<ChildForm/>', () => {
  test('debería emitirse evento y enviar un texto', async () => {
    // Arrange

    const text = 'texto enviado';
    const wrapper = mount(ChildForm);
    const input = wrapper.find('input');
    const form = wrapper.find('form');

    // Action

    await input.setValue(text);
    await form.trigger('submit.prevent');
    // Assertion

    expect(wrapper.emitted('textSended')).toBeTruthy();
    expect(wrapper.emitted('textSended')[0]).toEqual([text]);
  });
});
