  //Note
  // 1XX Informational - Hold on
  // 2XX Success       - Here you go
  // 3XX Redirect      - Go away
  // 4XX Client Error  - You F..k up
  // 500 Server Error  - I F..k up

export function errorMsg(code){
  switch (code){
    case 500 : return {error: "Fail to connect to database"}  
    case 400 : return {error: "Incomplete data received"}  

    // Registration
    case 401 : return {error: "This email already has an account. Please login"}
    case 402 : return {error: "Sorry. This username is taken. Please try another username"}
    case 407 : return {error: "Something went wrong. Can't save your data. Please contact admin"}

    //Login
    case 403 : return {error: "Your email does not exist yet. Please register to create an account"}
    case 405 : return {error: "There is an issue with the data stored with this email address. Please contact our admin"}
    case 406 : return {error: "Invalid password"}
    case 408 : return {error: "Sorry, we can't anthenticate you this moment. Please try again later"}

    default  : return {error: "Unknown error"}
  }
}