// Define your API endpoints here
// Which is used in both UI side and bare (native) side

export const API_PING = 'ping'
export const API_REVERSE = 'reverse'
export const API_CREATE_ROOM = 'create_room'
export const API_JOIN_ROOM = 'join_room'
export const API_SEND_MESSAGE ='send_message'
export const API_RECEIVE_MESSAGE = 'receive_message'
export const API_UPDATE_CONNECTIONS = 'update_connections'

export const createMessage = (msg, local = false) => ({
  timestamp: new Date(),
  message: msg,
  local,
  type: 'text',
  id: generateUniqueId()
})

const generateUniqueId = () => {
  return `${new Date().getTime()}-${Math.floor(Math.random() * 1000000)}`;
};
