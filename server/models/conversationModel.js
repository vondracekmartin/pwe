const mongoose = require("mongoose");

const ConversationSchema = mongoose.Schema(
  {
    conversationName: {
      type: String,
      required: true,
    },
    userIds: Array,
  }
);

module.exports = mongoose.model("Conversations", ConversationSchema);