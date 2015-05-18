QUnit.test("回文判定-true", function(assert) {
    // setup
    var str = "たけやぶやけた";
    // expoect
    assert.ok(isPalindrome(str));
});
QUnit.test("回文判定-false", function(assert) {
    // setup
    var str = "かいぶんなのか";
    // expoect
    assert.notOk(isPalindrome(str));
});

QUnit.test("輪になって並ぶ-1", function(assert) {
    // setup
    var studentNum = 4;
    var radius = 10;
    var expected = [ { x: 10, y: 0 }, { x: 0, y: 10 }, { x: -10, y: 0 }, { x: 0, y: -10 } ];
    // expoect
    assert.deepEqual(standCiecle(studentNum, radius), expected);
});
QUnit.test("輪になって並ぶ-2", function(assert) {
    // setup
    var studentNum = 8;
    var radius = 10;
    var expected = [ { x: 10, y: 0 }, { x: 7, y: 7 }, { x: 0, y: 10 }, { x: -7, y: 7 }, { x: -10, y: 0 }, { x: -7, y: -7 }, { x: 0, y: -10 }, { x: 7, y: -7 } ];
    // expoect
    assert.deepEqual(standCiecle(studentNum, radius), expected);
});

QUnit.test("数値を音階に変換する-1", function(assert) {
    // setup
    var input = [0, 99, 400, 499, 500, 599, 450, 800, 300, 399, 200, 299, 100, 199, 50];
    var expected = ["C3", "C3", "G3", "G3", "H3", "H3", "G3", "", "F3", "F3", "E3", "E3", "D3", "D3", "C3"];
    // expect
    assert.deepEqual(num2octave(input), expected);
});
QUnit.test("数値を音階に変換する-2", function(assert) {
    // setup
    var input = [0.0, 99.9, 400.0, 499.99, 500.0, 599.99, 450.0, 800.0, 300.0, 399.99, 200.0, 299.99, 100.0, 199.99, 50.1234567890];
    var expected = ["C3", "C3", "G3", "G3", "H3", "H3", "G3", "", "F3", "F3", "E3", "E3", "D3", "D3", "C3"];
    // expect
    assert.deepEqual(num2octave(input), expected);
});

QUnit.test("テトリスのブロック崩し-1", function(assert) {
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
QUnit.test("テトリスのブロック崩し-2", function(assert) {
    // setup
    var base = [];
    for(var i = 0; i < 20; i++){
      base.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    var input = base.concat();
    input[2] = [1, 1, 1, 0, 0, 0, 0, 0, 1, 1];
    input[1] = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1];
    input[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    var expected = base.concat();
    expected[1] = [1, 1, 1, 0, 0, 0, 0, 0, 1, 1];
    expected[0] = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1];
    // expect
    assert.deepEqual(tetris(input), expected);
});

QUnit.test("BMIが最も高い人を探す-1", function(assert) {
    // setup
    persons = [ {id: 1, height: 170, weight: 80}
             ,{id: 2, height: 160, weight: 50}
             ,{id: 3, height: 180, weight: 90} ];
    // expect
    assert.deepEqual(searchMaxBMIPersons(persons), [3]);
});
QUnit.test("BMIが最も高い人を探す-2", function(assert) {
    // setup
    persons = [ {id: 1, height: 170, weight: 80}
             ,{id: 2, height: 160, weight: 50}
             ,{id: 3, height: 180, weight: 100}
             ,{id: 4, height: 162, weight: 81} ];
    // expect
    assert.deepEqual(searchMaxBMIPersons(persons), [3, 4]);
});

QUnit.test("ボーリングのスコア計算-点数なし1", function(assert) {
    // setup
    input = [];
    // expect
    assert.deepEqual([], countBowlingScore(input));
});
QUnit.test("ボーリングのスコア計算-点数なし2", function(assert) {
    // setup
    input = [[1]];
    // expect
    assert.deepEqual([], countBowlingScore(input));
});
QUnit.test("ボーリングのスコア計算-点数あり1", function(assert) {
    // setup
    input = [[0, 0]];
    // expect
    assert.deepEqual([0], countBowlingScore(input));
});
QUnit.test("ボーリングのスコア計算-点数あり2", function(assert) {
    // setup
    input = [[3, 6], [9]];
    // expect
    assert.deepEqual([9], countBowlingScore(input));
});
QUnit.test("ボーリングのスコア計算-スペア1", function(assert) {
    // setup
    input = [[9, 1]];
    // expect
    assert.deepEqual([], countBowlingScore(input));
});
QUnit.test("ボーリングのスコア計算-スペア2", function(assert) {
    // setup
    input = [[0, 10], [9]];
    // expect
    assert.deepEqual([19], countBowlingScore(input));
});
QUnit.test("ボーリングのスコア計算-ストライク1", function(assert) {
    // setup
    input = [[10]];
    // expect
    assert.deepEqual([], countBowlingScore(input));
});
QUnit.test("ボーリングのスコア計算-ストライク2", function(assert) {
    // setup
    input = [[10], [9]];
    // expect
    assert.deepEqual([], countBowlingScore(input));
});
QUnit.test("ボーリングのスコア計算-ストライク3", function(assert) {
    // setup
    input = [[10], [9, 1]];
    // expect
    assert.deepEqual([20], countBowlingScore(input));
});
QUnit.test("ボーリングのスコア計算-ダブル1", function(assert) {
    // setup
    input = [[10], [10]];
    // expect
    assert.deepEqual([], countBowlingScore(input));
});
QUnit.test("ボーリングのスコア計算-ダブル2", function(assert) {
    // setup
    input = [[10], [10], [9]];
    // expect
    assert.deepEqual([29], countBowlingScore(input));
});
QUnit.test("ボーリングのスコア計算-ダブル3", function(assert) {
    // setup
    input = [[10], [10], [9, 1]];
    // expect
    assert.deepEqual([29, 20], countBowlingScore(input));
});
QUnit.test("ボーリングのスコア計算-トリプル1", function(assert) {
    // setup
    input = [[10], [10], [10]];
    // expect
    assert.deepEqual([30], countBowlingScore(input));
});
QUnit.test("ボーリングのスコア計算-トリプル2", function(assert) {
    // setup
    input = [[10], [10], [10], [9]];
    // expect
    assert.deepEqual([30, 29], countBowlingScore(input));
});
QUnit.test("ボーリングのスコア計算-トリプル3", function(assert) {
    // setup
    input = [[10], [10], [10], [9, 1]];
    // expect
    assert.deepEqual([30, 29, 20], countBowlingScore(input));
});