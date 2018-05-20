const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,

  subtract: function(num1, num2) {
    return num1 - num2;
  },

  isNull: () => null,

  isUndefined: () => undefined,

  checkValue: (x) => x,

  createUser: () => {
    const user = { firstName: 'Rick' };
    user['lastName'] = 'Morty';

    return user;
  },

  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/posts/1').then(
                     res => res.data,
                   ).catch(
                     err => 'error',
                   ),
};

module.exports = functions;
