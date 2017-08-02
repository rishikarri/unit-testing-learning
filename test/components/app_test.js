// purpose of this file is to test the component app

// we always need to ask ourselves, what is the behavior that we want to test? 

// teh only thing is that i really care about is making sure that my component shows the text - react simple starter

import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// purpose of the keywords

// Use describe to group together similar tests - all of the tests in teh app section passed or failed etc. 
// in practice, give it the name of the component we are testing
describe('App', () => {

	it('shows the correct text', () => {
		// use expect to make an assertion about a target
		expect(component).to.contain('React simple starter');
	})
})

// this is a core part about how mocha runs test. the tests are not immediately run, if this function throws an error, don't worry about it, i am a testing suite
// the purpose of writing it like this is so that mocha can safely execute our code without worrying about some error being thrown 


// use "it" to test a single attribute of a target - we use it to group one single test - i am testing something very specific
//here is exactly what I'm testing about app
// the string is used only for the report - solely direction to us, the developers on what the block is used for s



// use 'expect' to make an assertion about a target 
// going to use this these through all of our tests
// from testing framework to testing framework, they all carry describe, it and expect - we are learning mocha but they all use the same topics - knowledge carries over to the other testing frameworks as well
// used to test a very particular attribute about our target, our app component

