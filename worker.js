import { publish } from './src/services/events';

self.setInterval(() => {
  console.log('called');
  const date = new Date();
  publish(
    'walo',
    'test message from worker' + date.getHours() + ':' + date.getSeconds()
  );
}, 10000);
