let EC = require('elliptic').ec;
function gen_keys(prvkey) {
   let ec = new EC('secp256k1');
   let key = ec.keyFromPrivate(prvkey, "hex");
   let pubkey = key.getPublic(true, 'hex');
   return {
       prvkey : prvkey,
       pubkey : pubkey
   };
}
let prvkey = '75587f836880d72c7b8bf5b7e514bd4b83dcb9503ed89b0032e519e9a3eaa5f9';
console.log(gen_keys(prvkey));