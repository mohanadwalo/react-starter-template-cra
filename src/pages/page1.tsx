import { useEffect } from 'react';
import { subscribe, unsubscribe } from '../services/events';

export function Page1() {
  useEffect(() => {
    subscribe('walo', (e: any) => {
      console.log(e.data);
    });
    //return () => unsubscribe('walo');
  }, []);
  return <p>page1</p>;
}
