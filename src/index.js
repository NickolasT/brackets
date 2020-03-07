module.exports = function check(str, bracketsConfig) {
    
  for ( let i = 0; i < bracketsConfig.length; ) {
    let arr = bracketsConfig [ i ].join ('');
    if ( str.includes ( arr ) ) {
      str = str.replace ( arr,'');
      i = 0;
    } else {
      i++
    }
  }
  if ( str.length === 0 ) {
    return true
  } else {
    return false
  }
}