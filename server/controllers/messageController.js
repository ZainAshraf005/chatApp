import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

const sendMessage = async (req, res, next) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { message } = req.body;

    if (!senderId || !receiverId) {
      return res
        .status(400)
        .json({
          message: "both sender and receiver ids are requried",
          success: false,
        });
    }

    let getConversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!getConversation) {
      getConversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMesssage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMesssage) {
      getConversation.messages.push(newMesssage._id);
    }

    await getConversation.save();
    res
      .status(200)
      .json({
        message: "message sent successfully",
        data: newMesssage,
        success: true,
      });
    // Socket.io part
  } catch (error) {
    next(error);
  }
};

const getMessage = async (req, res, next) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    return res.status(200).json(conversation?.messages);
  } catch (error) {}
};

export default { sendMessage, getMessage };
