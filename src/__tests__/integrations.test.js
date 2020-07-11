import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'FEtched #2'}]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    //Attemp to render the  *entire* App
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );

    //find the 'fetchComments' button and click it 
        wrapped.find('.fetch-comments').simulate('click');

    //put a pause right to give maxios time to catch the requests
    moxios.wait(() => {

        //gives us the latest version of all our components
        wrapped.update();
        
        //find the mock data we created length
        expect(wrapped.find('li').length).toEqual(2);

        //Tells Jest to wait 100ms later to run the code inside of setTimeout or better to use Moxios Wait funtion
        done();

        //clean up
        wrapped.unmount();
    });
});