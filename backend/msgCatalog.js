
export function errorMsg(code){

  //Note
  // 1XX Informational - Hold on
  // 2XX Success       - Here you go
  // 3XX Redirect      - Go away
  // 4XX Client Error  - You F..k up
  // 500 Server Error  - I F..k up

  switch (code){
    case 500 : return {error: "Fail to connect to database"}  // catch error 
  }
}
