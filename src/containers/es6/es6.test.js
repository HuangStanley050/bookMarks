import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ES6 from "./es6";
/*global expect*/

configure({ adapter: new Adapter() });

describe("ES6 Component testing", () => {
    let wrapper =

        beforeEach(() => {
            wrapper = shallow(<ES6/>);
        });
    it("should render one ES6 component", () => {

        expect(wrapper.find(ES6)).toHaveLength(1);
    });

});
