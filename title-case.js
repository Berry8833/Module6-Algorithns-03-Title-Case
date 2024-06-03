var titleCase = function(str) {
    var result = [];
  
    var words = str.split(' ');
  
    for (var u = 0; u < words.length; u++) {
      var word = words[u].split('');
  
      word[0] = word[0].toUpperCase();
  
      result.push(word.join(''));
    }
  
    return result.join(' ');
  };
  