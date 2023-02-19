const channels = new Map();
export const subscribe = function (type, cb) {
  let channel = channels.get(type);
  if (!channel) {
    channel = new BroadcastChannel(type);
    channels.set(type, channel);
  }
  channel.onmessage = cb;
};
export const unsubscribe = function (type) {
  const channel = channels.get(type);
  channel.close();
};
export function publish(type, message) {
  let channel = channels.get(type);
  if (!channel) {
    channel = new BroadcastChannel(type);
    channels.set(type, channel);
  }
  channel.postMessage(message);
}

console.log('mohanad' + Date.now());
