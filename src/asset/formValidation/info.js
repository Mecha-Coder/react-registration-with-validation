 
const userValidInfo = [
  "Length: 5-12 characters",
  "Must begin with uppercase letter",
  "No spaces allowed between characters",
  "Only letters, numbers, underscores & hyphens are allowed"
 ]

const emailValidInfo = [
  "Invalid email address"
 ]

 const pswValidInfo = [
  "Length: 8-24 characters",
  "No spaces allowed between characters",
  "Contain at least one uppercase letter",
  "Contain at least one digit",
  `Contain at least one special character @ $ ! % * # ? &
  `
 ]

const conPswValidInfo = [
  "Password does not match with above"
 ]

 export {userValidInfo, emailValidInfo, pswValidInfo, conPswValidInfo}