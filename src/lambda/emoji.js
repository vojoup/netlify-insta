const emoji = ['⚡', '😆', '🤪', '😎', '🥶'];

function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

exports.handler = function(event, context, callback) {
  console.log('queryStringParameters', event.queryStringParameters);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      emoji: sample(emoji),
    }),
  });
};
