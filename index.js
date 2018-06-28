function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < rankedLists.length; i++){
    let rankedChildren = rankedLists[i].children;

    for (let i2 = 0; i2 < rankedChildren.length; i2++) {
      rankedChildren[i2].innerHTML = (parseInt(rankedChildren[i2].innerHTML) + n);
    }
  }
}

function deepestChild() {
  let element = document.getElementById("grand-node");

  while (element.children[0]) {
    element = element.children[0]
  }

  return element;
}
