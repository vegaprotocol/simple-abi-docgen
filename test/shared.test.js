const test = require('tape')

const { indexed, payable, constant, mutable } = require('../templates/shared')

test('Payable function returns correctly', t => {
  t.plan(4)
  t.notEqual(payable({ payable: true }).length, 0)
  t.equal(payable({ payable: false }).length, 0)
  t.equal(payable({ something: 'else' }).length, 0)
  t.equal(payable().length, 0)
})

test('Constant function returns correctly', t => {
  t.plan(4)
  t.notEqual(constant({ constant: true }).length, 0)
  t.equal(constant({ constant: false }).length, 0)
  t.equal(constant({ something: 'else' }).length, 0)
  t.equal(constant().length, 0)
})

test('Mutable function returns correctly', t => {
  t.plan(6)
  t.notEqual(mutable({ stateMutability: 'pure' }).length, 0)
  t.notEqual(mutable({ stateMutability: 'view' }).length, 0)
  t.notEqual(mutable({ stateMutability: 'nonpayable' }).length, 0)
  t.equal(mutable({ stateMutability: 'invalid-value' }).length, 0)
  t.equal(mutable({ something: 'else' }).length, 0)
  t.equal(mutable().length, 0)
})

test('Indexed function returns correctly', t => {
  const { emojiIndexed, emojiUnindexed } = require('../templates/emoji')
  t.plan(4)
  t.equal(indexed({ indexed: true }), emojiIndexed)
  t.equal(indexed({ indexed: false }), emojiUnindexed)
  t.equal(indexed({ noValue: 'test' }), emojiUnindexed)
  t.equal(indexed(), emojiUnindexed)
})
