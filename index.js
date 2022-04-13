import elasticlunr from "elasticlunr.js/lib/elasticlunr.js";

// get documents to be indexed.
var doc1 = {
    "id": 1,
    "title": "Oracle released its latest database Oracle 12g",
    "body": "Yestaday Oracle has released its new database Oracle 12g, this would make more money for this company and lead to a nice profit report of annual year."
}
 
var doc2 = {
    "id": 2,
    "title": "Oracle released its profit report of 2015",
    "body": "As expected, Oracle released its profit report of 2015, during the good sales of database and hardware, Oracle's profit of 2015 reached 12.5 Billion."
}

const index = elasticlunr(function() {
  // Set fields to index.
  this.addField('title');
  this.addField('body');
  // Set the field used to identify documents.
  this.setRef('id');
  // Include product data with the index data.
  this.saveDocument(false);
});

index.addDoc(doc1);
index.addDoc(doc2);

// Write the index file.
saveIndex(JSON.stringify(index));