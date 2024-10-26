import { BroadcastChannel } from 'broadcast-channel';

const channel = new BroadcastChannel('notify_new_product');

export const notifyNewProduct = () => {
  const product_info = {
    id: Date.now(),
    name: 'Iphone 8 pro ' + (Math.random() + 1).toString(36).substring(7),
    amount: 100,
  };

  console.log(product_info);
  channel.postMessage(product_info);
};

export const listenNewProduct = () => (channel.onmessage = (event) => console.log('listen new product : ', event));
// export const listenNewProduct = () =>
//   window.addEventListener('new-product', (event) => console.log('listen new product : ', event.details));

// export const notifyNewProduct = () => {
//   const product = {
//     id: Date.now(),
//     name: 'Iphone 8 pro ' + (Math.random() + 1).toString(36).substring(7),
//     amount: 100,
//   };

//   const event = new CustomEvent('new-product', {
//     detail: product,
//   });

//   window.dispatchEvent(event);
// };
