import {
    MultiChatWindow,
    MultiChatSocket,
    useMultiChatLogic,
} from 'react-chat-engine-advanced';

const ChatPage = (props) => {
    const chatProps = useMultiChatLogic(
        'b275cf05-c20b-4ce3-b47d-faaebe35b5b5',
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

// import { PrettyChatWindow } from 'react-chat-engine-pretty';

// const ChatPage = (props) => {
//     return (
//         <div style={{height: '100vh'}}>
//             <PrettyChatWindow
//                 projectId="b275cf05-c20b-4ce3-b47d-faaebe35b5b5"
//                 username={props.user.username}
//                 secret={props.user.secret}
//                 style={{ height: '100vh' }}
//             />
//         </div>
//     );
// }

export default ChatPage