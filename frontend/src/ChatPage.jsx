import {
    MultiChatWindow,
    MultiChatSocket,
    useMultiChatLogic,
} from 'react-chat-engine-advanced';

const ChatPage = (props) => {
    const chatProps = useMultiChatLogic(
        'replace-project-id-from-chatengine.io',
        props.user.username,
        props.user.secret
      );
      return (
        <>
          <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
          <MultiChatSocket {...chatProps} />
        </>
      );
}

export default ChatPage
