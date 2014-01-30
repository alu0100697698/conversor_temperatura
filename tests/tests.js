var assert = chai.assert;

suite('temperatura', function () {
	
	test('32F = 0C', function () {
		original.value = "32F";
		calcular();
		assert.deepEqual(converted.innerHTML, "0.0 Celsius");
	} );

	test('45C = 113.0F', function () {
		original.value = "45C";
		calcular();
		assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
	});

	test('5X = ERROR', function () {
		original.value = "5X";
		calcular();
		assert.match(converted.innerHTML, /ERROR/);
	});
	
});