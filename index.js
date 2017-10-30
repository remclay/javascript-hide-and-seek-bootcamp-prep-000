function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(nested, target) {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const findLis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < findLis.length; i++){
    findLis[i].innerHTML = parseInt(findLis[i].innerHTML)+n;
  }
}

function deepestChild() {
  var grandNodeChild = document.getElementById('grand-node').querySelectorAll('div');
  for (let i = 0; i < grandNodeChild.length; i++) {
    if (grandNodeChild[i].querySelectorAll('div').length  === 0) {
      return grandNodeChild[i];
    } 
  }
}
