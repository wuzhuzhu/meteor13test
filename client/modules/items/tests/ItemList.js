const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Item from '../components/Item.jsx';

describe('items.components.item', () => {
    it('能正确显示单个事项', () => {
        const item = {name:'测试事项名', description:'测试事项内容'};
        const el = shallow(<Item item={item} />);
        expect(el.find('h2').text()).to.be.match(/测试事项名/);
        expect(el.find('p').text()).to.be.match(/测试事项内容/);
    });
});