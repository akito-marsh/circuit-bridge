/**
 * Circuit Bridge — Google Form 作成スクリプト
 *
 * 使い方:
 *   1. https://script.google.com を開く
 *   2. 「新しいプロジェクト」を作成
 *   3. このコードを貼り付けて「createCircuitBridgeForm」を実行
 *   4. 実行ログに表示されるフォームURLをコピー
 *   5. index.html の "GOOGLE_FORM_URL" をそのURLで置き換える
 */

function createCircuitBridgeForm() {
  var form = FormApp.create('Circuit Bridge — お問い合わせ / Inquiry Form');

  form.setTitle('Circuit Bridge — お問い合わせ / Inquiry Form');
  form.setDescription(
    'Circuit Bridgeへのお問い合わせフォームです。3日以内に日本語または英語でご連絡いたします。\n\n' +
    'This is the inquiry form for Circuit Bridge. We will get back to you within 3 days in Japanese or English.'
  );
  form.setCollectEmail(false);
  form.setConfirmationMessage(
    'お問い合わせありがとうございます！3日以内にご連絡いたします。\n' +
    'Thank you for your inquiry! We will contact you within 3 days.'
  );

  // ── 1. お名前 / Name ──
  form.addTextItem()
    .setTitle('お名前 / Name')
    .setRequired(true);

  // ── 2. メールアドレス / Email ──
  form.addTextItem()
    .setTitle('メールアドレス / Email Address')
    .setRequired(true);

  // ── 3. 学校名 / School Name ──
  form.addTextItem()
    .setTitle('学校名 / School Name')
    .setRequired(true);

  // ── 4. 都道府県 / Prefecture ──
  var prefectures = [
    '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
    '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
    '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県',
    '岐阜県', '静岡県', '愛知県', '三重県',
    '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
    '鳥取県', '島根県', '岡山県', '広島県', '山口県',
    '徳島県', '香川県', '愛媛県', '高知県',
    '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県',
    'Outside Japan / 海外'
  ];
  var prefItem = form.addListItem();
  prefItem.setTitle('都道府県 / Prefecture').setRequired(true);
  prefItem.setChoiceValues(prefectures);

  // ── 5. あなたの立場 / Role ──
  form.addMultipleChoiceItem()
    .setTitle('あなたの立場 / Your Role')
    .setRequired(true)
    .setChoiceValues([
      '生徒 / Student',
      '先生・顧問 / Teacher or Advisor',
      '保護者 / Parent',
      'その他 / Other'
    ]);

  // ── 6. 興味の内容 / Area of Interest ──
  form.addCheckboxItem()
    .setTitle('興味の内容（複数選択可）/ Area of Interest (select all that apply)')
    .setRequired(true)
    .setChoiceValues([
      'FTCチームを立ち上げたい / Start an FTC Team',
      'メンタリングを受けたい / Receive Mentorship',
      'FTCについて詳しく知りたい / Learn More About FTC',
      'カナダのチームと交流したい / Connect with a Canadian Team',
      'その他 / Other'
    ]);

  // ── 7. 参加予定の生徒数 / Number of Interested Students ──
  form.addMultipleChoiceItem()
    .setTitle('参加予定の生徒数 / Number of Interested Students')
    .setRequired(false)
    .setChoiceValues([
      '1〜5人 / 1–5 students',
      '6〜10人 / 6–10 students',
      '11〜15人 / 11–15 students',
      '16人以上 / 16+ students',
      '未定 / Not sure yet'
    ]);

  // ── 8. ロボティクス経験 / Robotics Experience ──
  form.addMultipleChoiceItem()
    .setTitle('ロボティクス・プログラミングの経験 / Robotics or Programming Experience')
    .setRequired(false)
    .setChoiceValues([
      'なし / None',
      '少しあり（授業など）/ Some (school classes, etc.)',
      '経験あり（部活・競技など）/ Experienced (club, competition, etc.)'
    ]);

  // ── 9. 英語レベル / English Level ──
  form.addMultipleChoiceItem()
    .setTitle('英語レベル / English Proficiency Level')
    .setRequired(false)
    .setChoiceValues([
      'ほぼなし / Minimal',
      '基礎レベル / Basic',
      '日常会話レベル / Conversational',
      '流暢 / Fluent'
    ]);

  // ── 10. Circuit Bridgeを知ったきっかけ / How did you find us? ──
  form.addCheckboxItem()
    .setTitle('Circuit Bridgeを知ったきっかけ / How did you find us?')
    .setRequired(false)
    .setChoiceValues([
      'SNS（Instagram, X, etc.）/ Social Media',
      '学校・先生から / School or Teacher',
      '友人・知人から / Friend or Acquaintance',
      '検索（Google等）/ Search Engine',
      'その他 / Other'
    ]);

  // ── 11. ご質問・メッセージ / Message ──
  form.addParagraphTextItem()
    .setTitle('ご質問・メッセージ / Questions or Message')
    .setHelpText('何でもお気軽にどうぞ。/ Feel free to write anything.')
    .setRequired(false);

  // ── 結果を出力 ──
  var url = form.getPublishedUrl();
  var editUrl = form.getEditUrl();

  Logger.log('===========================================');
  Logger.log('✅ フォームが作成されました！');
  Logger.log('');
  Logger.log('📋 フォームURL（公開用）:');
  Logger.log(url);
  Logger.log('');
  Logger.log('✏️  編集URL:');
  Logger.log(editUrl);
  Logger.log('');
  Logger.log('👉 次のステップ:');
  Logger.log('index.html の "GOOGLE_FORM_URL" を上記の公開URLで置き換えてください。');
  Logger.log('===========================================');
}
