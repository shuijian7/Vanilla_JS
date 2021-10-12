import "./styles.css";

class Trie {
  constructor() {
    this.lst = [...Array(256)].fill(null);
    this.wordList = new Set();
  }
}

var buildWord = function (root, word) {
  for (const i of word) {
    if (root.lst[ascii(i)] == null) {
      root.lst[ascii(i)] = new Trie();
    }
    root = root.lst[ascii(i)];
    root.wordList.add(word);
  }
};

function ascii(str) {
  return str.charCodeAt(0);
}

var root = new Trie();
var div = document.getElementById("result");

((search_terms) => {
  for (const each of search_terms) {
    buildWord(root, each);
  }
})([
  "apple",
  "applewatch",
  "applemacbook",
  "applemacbookpro",
  "iphone",
  "alla fdfsd"
]);

function autocompleteMatch(root, input) {
  const arr = [];
  (function dfs(root, input, idx) {
    if (root == null) return;
    if (idx === input.length) {
      arr.push(...root.wordList);
      return;
    }

    var c = ascii(input[idx]);
    if (root.lst[c] == null) return;
    dfs(root.lst[c], input, idx + 1);
  })(root, input, 0);
  return arr;
}

function showResults($e) {
  let list = "";
  let terms = autocompleteMatch(root, $e.target.value);
  for (var i = 0; i < terms.length; i++) {
    list += "<li>" + terms[i] + "</li>";
  }
  div.innerHTML = "<ul>" + list + "</ul>";
  document.querySelectorAll("li").forEach((e) =>
    e.addEventListener("click", ($event) => {
      document.getElementById("q").value = $event.target.innerHTML;
      $event.preventDefault();
    })
  );
}

document.getElementById("q").addEventListener("input", showResults);
document.querySelector("html").addEventListener("click", ($e) => {
  if (typeof $e.target.value === "undefined") {
    div.innerHTML = "";
  }
});
