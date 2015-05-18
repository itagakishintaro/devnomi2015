/**
 * 回文判定
 * 配点: 2点
 * 入力: 文字列
 * 出力: 回文であればtrue, そうでなければfalse
 */
function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

/**
 * 輪になって並ぶ
 * 先生のいる位置を{ x: 0, y: 0 }として、生徒の数と半径に応じて、生徒を先生を中心に円状に均等に配置する。
 * 配点: 4点
 * 条件: 入力値は2つとも必ず1以上の整数としてよい
 * 入力: 生徒の数、半径
 * 出力: オブジェクトの配列
 *       - 1人目はxの正方向
 *       - 反時計回り
 *       - 小数は整数に四捨五入
 *       例：[ { x: 10, y: 0 }, { x: 0, y: 10 }, { x: -10, y: 0 }, { x: 0, y: -10 } ]
 */
function standCiecle(studentNum, radius) {
  var positions = [];
  for(var i = 0; i < studentNum; i++){
    positions.push({
      x: Math.round( radius * Math.cos( (i / studentNum * 360) / 180 * Math.PI ) ),
      y: Math.round( radius * Math.sin( (i / studentNum * 360) / 180 * Math.PI ) )
    });
  }
  return positions;
}

/**
 * 数値を音階に変換する
 * 配点: 4点
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

/**
 * BMIが最も高い人を探す
 * 配点: 10点
 * 条件: 入力のバリデーションは不要
 * 入力: [ {id: 1, height: 170, weight: 80}, {id: 2, height: 160, weight: 50} ]のようなオブジェクトの配列
 *   - 身長はcm
 *   - 体重はkg
 * 出力: [1]のようなidの配列
 *   - BMIは 体重(kg) / ( 身長(m) * 身長(m) )。身長はcmではなく、mなので注意。
 *   - 最大BMIの人が複数いる場合は複数返す
 */
function searchMaxBMIPersons(persons) {
  var maxBMI = Math.max.apply(null, persons.map(function(v) {
    return bmi(v.height, v.weight);
  }));

  return persons.filter(function(v){
    return bmi(v.height, v.weight) === maxBMI;
  }).map(function(v){
    return v.id;
  });

  function bmi(h, w){
    return w / (h / 100 * h / 100);
  }  
}

 /**
 * ボーリングのスコア計算
 * 配点: 30点
 * 条件: 入力のバリデーションは不要
 * 入力: [ [9, 1], [10], [4, 1], [3] ]のように配列が入力される
 *   - 1フレームごとに[9, 1]のような配列を持つ
 *   - ストライクのときは[10]
 *   - [3]のようなときはまだ2投目を投げていない
 * 出力: [ 10, 15, 5 ]のように配列が出力される
 */
function countBowlingScore(input) {
  var score = []
  input.forEach(function(v, i){
    // フレームが完了しておらず、点数未定の場合
    if( v[0] != 10 && v[1] === undefined ){
      return;
    }
    // ストライクの場合
    else if( v[0] == 10 ){
      // ストライクでまだ点数未定の場合 
      if( ( input[i+1] === undefined ? 0 : input[i+1].length )
           + ( input[i+2] === undefined ? 0 : input[i+2].length ) < 2 ){
        return;
      }
      // ダブルかターキーの場合
      else if( input[i+1][0] === 10 ){
        score.push( 20 + input[i+2][0] );
      } else {
        score.push( 10 + input[i+1][0] + input[i+1][1] );
      }
    }
    // スペアの場合
    else if( v[0] + v[1] == 10 ){
      // スペアでまだ点数未定の場合
      if( input[i+1] === undefined ){
        return;
      } else {
        score.push( 10 + input[i+1][0] );
      }
    }
    // その他の場合
    else {
      score.push( v[0] + v[1] );
    }
  });  
  return score;
}