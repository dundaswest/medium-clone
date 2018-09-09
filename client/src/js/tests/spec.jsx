import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from '../components/Sidebar';
import Text from '../components/Text';

configure({ adapter: new Adapter() });

test('Side bar renders correctly', () => {
  const component = shallow(<Text />);
  // let tree = component.toJSON();
  expect(component).toMatchSnapshot();
});
