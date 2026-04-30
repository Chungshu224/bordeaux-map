#!/usr/bin/env python3
"""Add missing locale keys to all three bordeaux locale files."""

additions = {
    'zh-TW': {
        # label section additions
        'label_add': """      wrongReview: '📖 錯題回顧',
      questionEasy: '辨識：哪一岸 ＋ 大產區？',
      questionMed:  '辨識：哪一岸 ＋ 村莊 AOC？',
      questionHard: '辨識：哪一岸 ＋ AOC ＋ 1855 級數？',""",
        'label_after': "      hardItems: ['每題 4 個組合選項', '28 秒作答', '共 10 題', '最高 1000 分'],",
        # common section additions
        'common_add': """      leftBank:      '左岸',
      rightBank:     '右岸',
      anonymous:     '匿名玩家',
      errNoDb:       '未連接資料庫',
      errNoLogin:    '請先登入以上傳成績',
      errUpload:     '上傳失敗：{msg}',
      round:         '第 {n} / {total} 題',""",
        'common_after': "      lbDate:        '日期',",
    },
    'en': {
        'label_add': """      wrongReview: '📖 Wrong Answer Review',
      questionEasy: 'Identify: Which Bank + Major Region?',
      questionMed:  'Identify: Which Bank + Village AOC?',
      questionHard: 'Identify: Which Bank + AOC + 1855 Classification?',""",
        'label_after': "      hardItems: ['4 combo choices per Q', '28s per question', '10 questions', 'Max 1000 pts'],",
        'common_add': """      leftBank:      'Left Bank',
      rightBank:     'Right Bank',
      anonymous:     'Anonymous',
      errNoDb:       'Database not connected',
      errNoLogin:    'Please log in to upload scores',
      errUpload:     'Upload failed: {msg}',
      round:         'Q {n} / {total}',""",
        'common_after': "      lbDate:        'Date',",
    },
    'ja': {
        'label_add': """      wrongReview: '📖 間違えた問題',
      questionEasy: '識別：左右岸 ＋ 主要産地？',
      questionMed:  '識別：左右岸 ＋ 村AOC？',
      questionHard: '識別：左右岸 ＋ AOC ＋ 1855格付け？',""",
        'label_after': "      hardItems: ['1問4択', '28秒/問', '全10問', '最高1000点'],",
        'common_add': """      leftBank:      '左岸',
      rightBank:     '右岸',
      anonymous:     '匿名プレイヤー',
      errNoDb:       'データベース未接続',
      errNoLogin:    'スコアをアップロードするにはログインしてください',
      errUpload:     'アップロード失敗：{msg}',
      round:         '{n} / {total} 問',""",
        'common_after': "      lbDate:        '日付',",
    },
}

for lang, data in additions.items():
    path = f'src/locales/{lang}/bordeaux.js'
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add label section keys
    label_after = data['label_after']
    if data['label_add'].split('\n')[0].split(':')[0].strip() not in content:
        content = content.replace(
            label_after,
            label_after + '\n' + data['label_add']
        )
        print(f'{lang}: added label keys')
    else:
        print(f'{lang}: label keys already exist')

    # Add common section keys
    common_after = data['common_after']
    if 'leftBank' not in content:
        content = content.replace(
            common_after,
            common_after + '\n' + data['common_add']
        )
        print(f'{lang}: added common keys')
    else:
        print(f'{lang}: common keys already exist')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done')
