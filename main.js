// main.js running on the user's browser

fetch('data/index.json').then(response => {
    return response.json();
  }).then(json => {
    index = elasticlunr.Index.load(json);
  });

function search() {
    const matches = index.search('foo');
    for (match in matches) {
        alert(match);
    }
       
}