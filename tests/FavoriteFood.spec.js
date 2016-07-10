describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		favoriteFood = $filter('favoriteFood');
	}));
	
	it('should filter a list of people who share a favorite food', function(){
		var people = [
			{
				name: 'George', 
				favoriteFood: 'pizza'
			},
			{
				name: 'Allan',
				favoriteFood: 'burritos'
			},
			{
				name: 'Cindy', 
				favoriteFood: 'pizza'
			},
			{
				name: 'Shaniqua',
				favoriteFood: 'Sushi'
			}
		];
		
		var pizzaLovers = [
			{
				name: 'George', 
				favoriteFood: 'pizza'
			},
			{
				name: 'Cindy', 
				favoriteFood: 'pizza'
			}
		];
		
		expect(favoriteFood(people, 'pizza')).toEqual(pizzaLovers);
		expect(favoriteFood(people, 'indian food')).toEqual([]);
	});

	
});
