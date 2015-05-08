QUnit.test("問題1:数値を音階に変換する", function(assert) {
    // setup
    var input = [0, 99.9, 400, 499.99, 500, 599, 450, 800, 300, 399, 200, 299, 100, 199, 50.123];
    var expected = ["C3", "C3", "G3", "G3", "H3", "H3", "G3", "", "F3", "F3", "E3", "E3", "D3", "D3", "C3"];
    // expect
    assert.deepEqual(num2octave(input), expected);
});

QUnit.test("問題2:テトリスのブロック崩し", function(assert) {
    // setup
    var base = [];
    for(var i = 0; i < 20; i++){
      base.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    var input = base.concat();
    input[2] = [1, 1, 1, 0, 0, 0, 0, 0, 1, 1];
    input[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    input[0] = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1];
    var expected = base.concat();
    expected[1] = [1, 1, 1, 0, 0, 0, 0, 0, 1, 1];
    expected[0] = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1];
    // expect
    assert.deepEqual(tetris(input), expected);
});