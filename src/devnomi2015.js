/**
 * 数値を音階に変換する
 * 配点: 5点
 * 条件: 入力は必ず要素を1つ以上持ち、値は必ず0以上の数値としてよい
 * 入力: 数値の配列(数は不定)
 * 出力: 数値を次のとおり変換した配列
 *   0以上100未満: "C3"
 * 100以上200未満: "D3"
 * 200以上300未満: "E3"
 * 300以上400未満: "F3"
 * 400以上500未満: "G3"
 * 500以上600未満: "H3"
 * 600以上700未満: "I3"
 * 700以上800未満: "C4"
 * 800以上      : ""
 */
function num2octave(input) {
  var CONV = { 0: "C3", 100: "D3", 200: "E3", 300: "F3", 400: "G3", 500: "H3", 600: "I3", 700: "C4"}
  return input.map( function(num){
    if(num >= 800) {
      return "";
    } else {
      return CONV[ Math.floor( num / 100 ) * 100 ];
    }
  } );
};

/**
 * テトリスのブロック崩し
 * 配点: 10点
 * 条件: 入力のバリデーションは不要
 * 入力: 20行10列の配列で値は1か0(1はブロックあり、0はブロックなし)。0行が一番下、0列が一番左。
 * 出力: 全ての列にブロックがある行は削除し、上の行が下にずれる
 *
 * □□□     □□
 * □□□□□□□□□□ => □□□     □□
 * □□□□□ □□□□    □□□□□ □□□□
 */
function tetris(blocks) {
  var newBlocks = [];
  blocks.forEach(function(row, i){
    if(row.some( function(v){ return v === 0 } )){
      newBlocks.push(row);
    }
  });
  for(var i = newBlocks.length; i < 20; i++){
    newBlocks.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }
  return newBlocks
 }