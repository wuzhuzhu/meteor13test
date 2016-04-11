const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import ItemList from '../components/ItemList.jsx';

describe('items.components.itemlist', () => {
   it('事件列表应该显示的文本信息', () => {
       const el = shallow(<ItemList />);
       expect(el.find('a').text()).to.be.match(/新项目/);
   })
});