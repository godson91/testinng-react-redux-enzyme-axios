import React from 'react';
import {shallow} from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
     wrapped = shallow(<App/>);
})

it('shows a comment box', () => {

//find all the instances of CommentBox that were created
expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment List', () => {

//find all the instances of CommentList that were created
expect(wrapped.find(CommentList).length).toEqual(1);
});
