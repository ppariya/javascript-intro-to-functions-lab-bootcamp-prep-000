function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log("spy was never called with `string.toUpperCase`")
}
function logWhisper(string) {
  console.log(string.toLowerCase)
}
