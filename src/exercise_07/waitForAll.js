export default function waitForAll(...promises) {
  if (promises.some(p => !(p instanceof Promise))) {
    throw new Error('Not all elements are promises.');
  }

  return new Promise((resolve, reject) => {
    let totalPromise = promises.length;
    let failed = false;

    function settle() { if (failed) { reject(); } else { resolve(); } }

    promises.forEach((p) => {
      p.then(() => {
        totalPromise -= 1;
        if (totalPromise === 0) { settle(); }
      }, () => {
        failed = true;
        totalPromise -= 1;
        if (totalPromise === 0) { settle(); }
      });
    });
  });
}
