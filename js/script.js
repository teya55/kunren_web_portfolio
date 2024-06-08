'use strict';

$(function () {
  // ハンバーガーボタンクリックでボタンのアニメーションとナビ開閉
  //トリガー: .btn クラスが付けられた要素（ハンバーガーメニューボタン）がクリックされると発火します。
  //動作: toggleClass メソッドを使用して、.btn と .main-nav に open または slide クラスをトグル（追加/削除）します。これにより、CSSによって定義されたスタイルが適用され、メニューが表示/非表示されます。
  $('.btn').on('click', function (event) {
    $(event.currentTarget).toggleClass('open');
    $('.main-nav').toggleClass('slide');
  });

  // #で始まるリンクをクリックしたらスムースにスクロール + ナビゲーションを閉じてボタンを元に戻す
  //トリガー: href 属性が # で始まるアンカータグがクリックされると発火します。
  //動作: クリックされたリンクの href 属性を読み取り、対応するIDを持つ要素へスムーススクロールします。スクロール前にハンバーガーメニューが開いている場合は、removeClass メソッドを使って open および slide クラスを削除し、メニューを閉じます。
  // href属性が#で始まる<a>要素をクリックしたとき
  $('a[href^="#"]').on('click', function (event) {
    // href属性の値を取得
    const href = $(event.currentTarget).attr('href');
    // 文字列'html'または変数hrefの値('#...')を取得
    const target = $(href === '#' ? 'html' : href);
    // ページトップから要素targetまでの縦方向の距離を取得（横方向はoffset().left）
    const position = target.offset().top;
    // ハンバーガーボタンとナビゲーションをリセット
    $('.btn').removeClass('open');
    $('.main-nav').removeClass('slide');
    // htmlまたはbody要素をpositionまでスクロール
    $('html, body').animate({ scrollTop: position }, 500, 'swing');
  });

  // ページトップへ500msかけてスムーススクロール
  //トリガー: .page-top クラスが付けられた要素がクリックされると発火します。
  //動作: ページの最上部へ500ミリ秒かけてスムーススクロールします。
  const pagetop = $('.page-top');
  pagetop.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500, 'linear');
  });

  // スクロールイベント
  //トリガー:ブラウザのウィンドウ（$(window)）に対してscrollイベントが発生したとき
  //動作: ページがスクロールされるたびに、addBgColor()関数とslideBtn()関数が呼び出されます
  $(window).on('scroll', function () {
    addBgColor();
    slideBtn();
  });

  // スクロールによるヘッダーの背景色変更
  //トリガー: ページがスクロールされると発火します。
  //動作: addBgColor 関数が呼び出され、ブラウザのスクロール位置がウィンドウの高さを超えると .header に bgcolor クラスが追加され、背景色が変更されます。スクロール位置がウィンドウの高さ以下の場合はこのクラスが削除されます。
  function addBgColor() {
    const header = $('.header');
    const windowHeight = $(window).height(); // ブラウザウィンドウの高さ
    if ($(window).scrollTop() > windowHeight) {
      header.addClass('bgcolor');
    } else {
      header.removeClass('bgcolor');
    }
  }

  // ページトップへ戻るボタンの表示
  //トリガー: ページがスクロールされると発動します。
  //動作: slideBtn 関数が呼び出され、スクロール位置が500ピクセルを超えると .page-top に slidein クラスが追加され、ページトップボタンが表示されます。それ以下の場合はこのクラスが削除されます。
  function slideBtn() {
    if ($(window).scrollTop() > 500) {
      pagetop.addClass('slidein');
    } else {
      pagetop.removeClass('slidein');
    }
  }

  //リサイズイベント
  //トリガー: ブラウザウィンドウがリサイズされると発動します。
  //動作: ウィンドウの幅が600ピクセルを超えると、メニューが開いていた場合は閉じられ、ナビゲーションが表示されます。これにより、デバイスの向きが変わったり、デスクトップ表示に切り替わった際にも適切に表示
  $(window).resize(function() {
    if ($(window).width() > 600) {
      // ナビゲーションをデフォルト状態にリセット
      $('.btn').removeClass('open');
      $('.main-nav').removeClass('slide');
      // 隠れていた場合、メインナビゲーションを表示する
      $('.main-nav').show();
    }
  });
});
