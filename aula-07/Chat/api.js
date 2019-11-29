const getLastMessages = () => {
    return fetch('http://104.248.235.252:3005/api/mensagens/10')
    .then( (response) => response.json())
}

const insertNewMessage = (msg, name) => {
    return fetch('http://104.248.235.252:3005/api/mensagens/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({msg: {msg: msg, name: name}}),
    })
}

const getMessagesSince = (id) => {
    return fetch('http://104.248.235.252:3005/api/mensagens/since/'+id)
    .then( (response) => response.json());
}
export default {getLastMessages: getLastMessages, 
    insertNewMessage: insertNewMessage,
    getMessagesSince: getMessagesSince};