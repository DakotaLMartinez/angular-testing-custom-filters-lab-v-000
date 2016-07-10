describe('removeAllVowels Filter', function () {
	var $controller, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		removeAllVowels = $filter('removeAllVowels');
	}));
	
	it('should remove all the vowels from a string', function(){
		expect(removeAllVowels('No more vowels')).toEqual('N mr vwls');
	});

});
