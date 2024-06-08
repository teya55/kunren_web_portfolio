'use strict'; // 厳格モードを使用することで、より厳密なエラーチェックを行う

$(function () {
  // ハンバーガーボタンクリックでボタンのアニメーションとナビ開閉
  $('.btn').on('click', function (event) {
    // ボタンのクラスを切り替え（openクラスの追加/削除）
    $(event.currentTarget).toggleClass('open');
    // ナビゲーションのクラスを切り替え（slideクラスの追加/削除）
    $('.main-nav').toggleClass('slide');
  });

  // #で始まるリンクをクリックしたらスムースにスクロール + ナビゲーションを閉じてボタンを元に戻す
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault(); // デフォルトのリンク動作を無効化
    const href = $(this).attr('href'); // クリックされたリンクのhref属性を取得
    const target = $(href === '#' ? 'html' : href); // ターゲット要素を取得（#の場合はページトップ）
    const position = target.offset().top; // ターゲット要素の位置を取得

    // ハンバーガーボタンとナビゲーションのクラスをリセット
    $('.btn').removeClass('open');
    $('.main-nav').removeClass('slide');

    // ページをスムースにスクロール
    $('html, body').animate({ scrollTop: position }, 500, 'swing');
  });

  // ページトップへ500msかけてスムーススクロール
  const pagetop = $('.page-top');
  pagetop.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500, 'linear'); // ページトップへスムーススクロール
  });

  // スクロールイベント
  $(window).on('scroll', function () {
    handleHeaderBackground(); // ヘッダーの背景色変更関数を呼び出し
    handlePageTopButton(); // ページトップボタンの表示/非表示関数を呼び出し
  });

  // スクロールによるヘッダーの背景色変更
  function handleHeaderBackground() {
    const header = $('.header');
    const windowHeight = $(window).height();
    if ($(window).scrollTop() > windowHeight) {
      header.addClass('bgcolor'); // スクロール位置がウィンドウ高さを超えたら背景色を変更
    } else {
      header.removeClass('bgcolor'); // スクロール位置がウィンドウ高さ以内なら背景色をリセット
    }
  }

  // ページトップへ戻るボタンの表示
  function handlePageTopButton() {
    if ($(window).scrollTop() > 500) {
      pagetop.addClass('slidein'); // スクロール位置が500pxを超えたらボタンを表示
    } else {
      pagetop.removeClass('slidein'); // スクロール位置が500px以内ならボタンを非表示
    }
  }

  // ウィンドウのサイズ変更イベント
  $(window).resize(function() {
    if ($(window).width() > 600) {
      // ウィンドウ幅が600pxを超えたらナビゲーションとボタンのクラスをリセット
      $('.btn').removeClass('open');
      $('.main-nav').removeClass('slide');
      $('.main-nav').hide();
    }
  });
});
