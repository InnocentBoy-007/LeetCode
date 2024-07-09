/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
   return Promise.all([promise1,promise2]).then(([num1,num2])=> num1 + num2);
};
const promise1 = Promise.resolve();
const promise2 = Promise.resolve();
addTwoPromises(promise1,promise2).then((result)=> {
    console.log(result);
});



/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */