import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = (props) => {
  const message = props.message;
  const date = new Date(message.createdAt)
  const formatedDate = date.toLocaleTimeString()
  const { authUser } = useSelector((store) => store.user);
  const scroll = useRef(null);
  useEffect(() => {
    scroll.current.scrollIntoView();
  }, [message]);
  return (
    <div
      ref={scroll}
      className={`chat ${
        message.senderId === authUser._id ? "chat-end" : "chat-start"
      }`}
    >
      <div className="chat-header">
        <time className="text-xs opacity-50">{formatedDate}</time>
      </div>
      <div className="chat-bubble">{message.message}</div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string.isRequired,
    senderId: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
};

export default Message;
