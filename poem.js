String.prototype.trim == String.prototype.trim || function() {
  return this.replace(/^\s+|\s+$/g, '');
}

// Creates the poem
function createPoem() {
  //  different syabal words
  var oneS = ["true", "dark", "cold", "young", "great"];
  var twoS = ["visions", "distance", "conscience", "process", "chaos"];
  var threeS = ["ravishing", "amazing", "fanciful", "delightful", "delicate"];
  var fourS = ["superstitious", "continuous", "incapable", "contradicting", "overwhelming"];
  var fiveS = ["undeniable", "beautiful", "irreplaceable", "unbelievable", "irrevocable"];

  // choose a random word from each syabal group
  var num1 = (Math.floor(Math.random() * 10) % oneS.length);
  var num2a = (Math.floor(Math.random() * 10) % twoS.length);
  var num2b = (Math.floor(Math.random() * 10) % twoS.length);
  var num3 = (Math.floor(Math.random() * 10) % threeS.length);
  var num4 = (Math.floor(Math.random() * 10) % fourS.length);
  var num5 = (Math.floor(Math.random() * 10) % fiveS.length);

  // put the words together
  var words = threeS[num3].substring(0, 1).toUpperCase() + threeS[num3].substring(1) + " " + twoS[num2a] + "\n" + fourS[num4].substring(0, 1).toUpperCase() + fourS[num4].substring(1) + " " + oneS[num1] + " " + twoS[num2b] + "\n" + fiveS[num5].substring(0, 1).toUpperCase() + fiveS[num5].substring(1);
  return words;
}

module.exports.createPoem = createPoem;
