'use strict';  // 厳格モードを有効にし、エラーの検出を強化する

// DOMContentLoadedイベントをリッスンし、ページの完全な読み込みを待つ
document.addEventListener("DOMContentLoaded", function() {
  // カスタムカーソルの要素を取得
  const cursor = document.getElementById("cursor");

  // マウスの動きを検知し、カーソルを追従させる
  document.addEventListener("mousemove", function(e) {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  // ハンバーガーメニューのボタンとナビゲーションメニューを取得
  const btn = document.querySelector('.btn');
  const nav = document.querySelector('.main-nav');

  // ハンバーガーメニューのボタンがクリックされたときの処理
  btn.addEventListener('click', function() {
    // ボタンにクラスを追加/削除してスタイルを変更
    btn.classList.toggle('open');
    // ナビゲーションメニューにクラスを追加/削除して表示/非表示を切り替え
    nav.classList.toggle('slide');
  });

  // ハッシュリンク（#で始まるリンク）にクリックイベントを追加
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      // デフォルトのリンク動作をキャンセル
      event.preventDefault();
      // href属性の値を取得
      const href = this.getAttribute('href');
      // 空のhrefまたは#のみのhrefを無視
      if (href && href !== '#') {
        // 対象の要素を取得
        const target = document.querySelector(href);
        // 対象が存在する場合、スムーズスクロールを実行
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // メニューを閉じる
          btn.classList.remove('open');
          nav.classList.remove('slide');
        }
      }
    });
  });
});

/* 
詳細な解説
'use strict';

document.addEventListener("DOMContentLoaded", function() { ... });

説明: DOMContentLoadedイベントは、HTML文書が完全に読み込まれ、解析されたときに発生します。このイベントをリッスンして、ページの完全な読み込みを待ってから内部のコードを実行します。
const cursor = document.getElementById("cursor");

説明: カスタムカーソル要素を取得して、cursorという変数に格納します。
document.addEventListener("mousemove", function(e) { ... });

説明: マウスの動きを検知して、カーソルの位置を更新します。
e.clientX と e.clientY: マウスカーソルの現在のX座標とY座標を取得します。
cursor.style.transform: CSSのtransformプロパティを使って、カーソル要素の位置を更新します。
const btn = document.querySelector('.btn');

説明: ハンバーガーメニューボタンを取得して、btnという変数に格納します。
const nav = document.querySelector('.main-nav');

説明: ナビゲーションメニュー要素を取得して、navという変数に格納します。
btn.addEventListener('click', function() { ... });

説明: ハンバーガーメニューボタンがクリックされたときの処理を定義します。
btn.classList.toggle('open'); と nav.classList.toggle('slide');: クリックされるたびに、ボタンとナビゲーションメニューのクラスを切り替えて、表示/非表示を制御します。
document.querySelectorAll('a[href^="#"]').forEach(anchor => { ... });

説明: ページ内のハッシュリンク（href属性が#で始まるリンク）をすべて取得し、各リンクに対してクリックイベントを設定します。
anchor.addEventListener('click', function(event) { ... });

説明: ハッシュリンクがクリックされたときの処理を定義します。
event.preventDefault();: リンクのデフォルト動作（ページの移動）をキャンセルします。
const href = this.getAttribute('href');: クリックされたリンクのhref属性の値を取得します。
if (href && href !== '#') { ... }: hrefが空または#のみでないことを確認します。
const target = document.querySelector(href);: href属性の値を使って、対象の要素を取得します。
if (target) { ... }: 対象要素が存在する場合に、スムーズスクロールを実行します。
target.scrollIntoView({ behavior: 'smooth', block: 'start' });: 対象要素までスムーズスクロールします。
btn.classList.remove('open'); と nav.classList.remove('slide');: メニューを閉じます。
これで、JavaScriptの各部分がどのように機能するかが理解できると思います。
 */