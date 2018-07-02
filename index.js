const querystring = require('querystring');

exports.handler = (event, context, callback) => {

  console.log("\n\nEVENT\n ", JSON.stringify(event), "\n\n\n")
  console.log("\n\nCONTEXT\n", JSON.stringify(context), "\n\n\n")

  const { token, command, text, user_name } = querystring.parse(event.body)

  console.log("\n\n", {token: token, command: command, user_name: user_name}, "\n\n");

  const body = {
    "text": "I'm sorry Dave, I'm affraid I can't do that.",
  }

  const resp = {
    "isBase64Encoded": true,
    "statusCode": 200,
    "headers": { },
    "body": JSON.stringify(body)
  }

  const error = {
    "isBase64Encoded": true,
    "statusCode": 500,
    "headers": { },
    "body": "something went wrong..."
  }

  if ( true ) {
    callback(null, resp)
  } else {
    callback(error, null)
  }

}
