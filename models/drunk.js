const { Schema, model, Types } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const DrunkSchema = new Schema({
  ownerId: {
    type: Types.ObjectId,
    required: true,
    ref: 'User'
  },
  type: {
    type: String,
    required: true,
    enum: [
      'EASY',
      'MEDIUM',
      'HARD'
    ]
  }
}, {
  timestamps: true
});

DrunkSchema.plugin(paginate);

module.exports = model('Drunk', DrunkSchema);