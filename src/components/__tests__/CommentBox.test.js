import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import { cleanup } from '@testing-library/react';
import Root from 'Root';

let wrapped;
beforeEach(() => {

    //mount Full DOM REnder
    wrapped = mount(<Root><CommentBox/></Root>)
});

// afterEach(cleanup); Same as unmount
afterEach(() => {
    wrapped.unmount();
});

describe('CommentBox Component functioality testing', () => {

    it('has a text area and and a button', () => {

        // console.log(wrapped.find('textarea').length);
        // console.log(wrapped.find('button').length);
//find the number of instances 
        expect(wrapped.find('textarea').length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(2);

    });
});
describe('the textarea', () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    });
    it('has a text area that users can type in', () => {

        //simulate the name of the event itsetlf => Ex: onClick, onChange to simulate => click, change
        //  wrapped.find('textarea').simulate('change', {
        //      target: { value: 'new comment' }
        //  });
 
        //force component to update because setState is async 
        //=> setState queues up a request for an update inside of React and gets updated eventually
        //  wrapped.update();
 
         //we need to reference texarea again and check the property we are testing 'value'
        expect( wrapped.find('textarea').prop('value')).toEqual('new comment');
     });
     it('has text disappear in the text area when user clicks submit', () => {
 
         //simulate the name of the event itsetlf => Ex: onClick, onChange to simulate => click, change
        //   wrapped.find('textarea').simulate('change', {
        //       target: { value: 'new comment' }
        //   });
 
         //force component to update because setState is async 
         //=> setState queues up a request for an update inside of React and gets updated eventually
        //   wrapped.update();
          wrapped.find('form').simulate('submit');
          wrapped.update();
  
          //we need to reference texarea again and check the property we are testing 'value'
         expect( wrapped.find('textarea').prop('value')).toEqual('');
      });
});
   
