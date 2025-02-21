import X from '../LibraryX.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const libInstance = X();
  document.getElementById('initMethod').addEventListener('click', async () => {
    await libInstance.init(root, (e) => {
      if(e.importError) {
        console.error(e.importError);
      } else {
        console.log('All widgets loaded successfully.');
      }
    }, 'static');
    //calling init second time on the same root to showcase that init can be called only one time and it throws error
    await libInstance.init(root, (e) => {
      if(e.importError) {
        console.error(e.importError);
      } else {
        console.log('All widgets loaded successfully.');
      }
    }, 'static');
  })

  document.getElementById('destroyMethod').addEventListener('click', () => {
    libInstance.destroy(root);
    //calling destroy second time on the same root to showcase that destroy can be called only one time and it throws error
    libInstance.destroy(root);
  })
})

