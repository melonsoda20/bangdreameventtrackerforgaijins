import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Header from './../app-title/Header.vue';

function mountComponentWithProps (Component, propsData) {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({
      propsData
    }).$mount();
  
    return vm.$el;
}

// eslint-disable-next-line no-undef
describe('Header.vue', () => {
    process.env.VUE_CLI_BABEL_TARGET_NODE = true;
    process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;
    const wrapper = mount(Header);
    // eslint-disable-next-line no-undef
    it('Get the default value of the title data property', () => {
        // eslint-disable-next-line no-undef
        expect(wrapper.vm.bandoriTitle).toEqual('Bandori!');
    });

    // eslint-disable-next-line no-undef
    it('Get the default value of the subtitle data property', () => {
        // eslint-disable-next-line no-undef
        expect(wrapper.vm.bandoriSubtitle).toEqual('Event Tracker, Predictions, Calculator and Planner!');
    });

    // eslint-disable-next-line no-undef
    it('Get the displayed title value from the HTML', () => {
        const headerHTMLTitleData = mountComponentWithProps(Header, {bandoriTitle: 'Bandori!', bandoriSubtitle: 'Event Tracker, Predictions, Calculator and Planner!'});
        const titleData = headerHTMLTitleData.textContent;
        // eslint-disable-next-line no-undef
        expect(titleData).toEqual('Bandori! Event Tracker, Predictions, Calculator and Planner!');
    });
})