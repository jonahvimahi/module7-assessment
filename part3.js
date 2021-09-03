function pangram(s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let regex = /\s/g;
  let lowercase = s.toLowerCase().replace(regex, "");

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
      console.log('not a pangram');
    }
  }
  console.log("pangram");
}
// pangram("The quick brown fox jumps over the lazy dog")

// pangram("I like cats but not mice")

// This function is O(n), linear