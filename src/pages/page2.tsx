import { useEffect } from 'react';
import { subscribe, unsubscribe } from '../services/events';

export function Page2() {
  useEffect(() => {
    subscribe('walo', (e: any) => {
      console.log(e.data);
    });
    setTimeout(() => {
      unsubscribe('walo');
    }, 20000);
  }, []);
  return <p>page2</p>;
}
