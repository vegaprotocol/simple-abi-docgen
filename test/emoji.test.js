const test = require('tape')

test('Emoji set', t => {
  const emoji = require('../templates/emoji')
  t.plan(6)
  t.ok(emoji.emojiPure, 'Pure emoji exists')
  t.ok(emoji.emojiView, 'View emoji exists')
  t.ok(emoji.emojiConstant, 'Constant emoji exists')
  t.ok(emoji.emojiIndexed, 'Indexed emoji exists')
  t.ok(emoji.emojiUnindexed, 'Unindexed emoji exists')
  t.ok(emoji.emojiNonpayable, 'Nonpayable emoji exists')
})
