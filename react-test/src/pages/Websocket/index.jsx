import React, { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

const SOCKET_URL_ONE = 'wss://echo.websocket.org';
const SOCKET_URL_TWO = 'wss://demos.kaazing.com/echo';
const READY_STATE_OPEN = 1;

//Generates the click handler, which returns a promise that resovles to the provided url.
const generateAsyncUrlGetter =
  (url, timeout = 2000) =>
  () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(url);
      }, timeout);
    });
  };

const Websocket = () => {
  const [currentSocketUrl, setCurrentSocketUrl] = useState(null);
  const [messageHistory, setMessageHistory] = useState([]);
  const [inputtedMessage, setInputtedMessage] = useState('');
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    currentSocketUrl,
    {
      share: true,
      shouldReconnect: () => false,
    }
  );

  useEffect(() => {
    lastMessage && setMessageHistory((prev) => prev.concat(lastMessage.data));
  }, [lastMessage]);

  const readyStateString = {
    0: 'CONNECTING',
    1: 'OPEN',
    2: 'CLOSING',
    3: 'CLOSED',
  }[readyState];

  return (
    <div>
      Whatever you send will be echoed from the Server
      <div>
        <input
          type={'text'}
          value={inputtedMessage}
          onChange={(e) => setInputtedMessage(e.target.value)}
        />
        <button
          onClick={() => sendMessage(inputtedMessage)}
          disabled={readyState !== READY_STATE_OPEN}
        >
          Send
        </button>
      </div>
      Select Socket Server:
      <br />
      <button
        onClick={() =>
          setCurrentSocketUrl(generateAsyncUrlGetter(SOCKET_URL_ONE))
        }
        disabled={currentSocketUrl === SOCKET_URL_ONE}
      >
        {SOCKET_URL_ONE}
      </button>
      <button
        onClick={() =>
          setCurrentSocketUrl(generateAsyncUrlGetter(SOCKET_URL_TWO))
        }
        disabled={currentSocketUrl === SOCKET_URL_TWO}
      >
        {SOCKET_URL_TWO}
      </button>
      <br />
      ReadyState: {readyStateString}
      <br />
      MessageHistory: {messageHistory.join(', ')}
    </div>
  );
};

/* import React, { useState, useCallback, useMemo, useRef } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const Websocket = () => {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState('wss://echo.websocket.org');
  const messageHistory = useRef([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  messageHistory.current = useMemo(
    () => messageHistory.current.concat(lastMessage),
    [lastMessage]
  );

  const handleClickChangeSocketUrl = useCallback(
    () => setSocketUrl('wss://echo.websocket.org'),
    []
  );

  const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <div>
      <h2>Websocket with React</h2>
      <button onClick={handleClickChangeSocketUrl}>
        Click Me to change Socket Url
      </button>
      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Click Me to send Hello
      </button>
      <span>The WebSocket is currently {connectionStatus}</span>
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
      <ul>
        {messageHistory.current.map((message, idx) => (
          <span key={idx}>{message ? message.data : null}</span>
        ))}
      </ul>
    </div>
  );
}; */

export default Websocket;
