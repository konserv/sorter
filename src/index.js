class Sorter {
  constructor() {
    this.elements=[]; //массив элементов
    this.sumAdded=0; //количество добавленных элементов
    this.setterAgeComparator=0;
    this.setterReverseComparator=0;
  	function REVERSE_COMPARATOR() {
		this.setterReverseComparator=1;
	}
	function AGE_COMPARATOR() {
		this.setterAgeComparator=1;
  	}
  }

  add(element) {
    this.elements.push(element); //добавление элемента в конец массива
    this.sumAdded++; // увеличение суммы добавленных элементов
    // your implementation
  }

  at(index) {
    return(this.elements[index]); //возвращение элемента по индексу
    // your implementation
  }

  get length() {
    return(this.sumAdded); //возвращает количество добавленных элементов
    // your implementation
  }

  toArray() {
    return(this.elements); //возвращает массив всех добавленных элементов
    // your implementation
  }
  					
 sort(indices) { 
 
    if (this.sumAdded<=1 || indices.length<=1) {
        return;
    } //если добавленный элемент 1, то сортировать не нужно

    var sortedIndices=[];
    sortedIndices.push(indices[0]);
	for (var i=1; i<indices.length; i++) {
        var j=0;
        while (indices[i]>sortedIndices[j]) {j++}
        sortedIndices.splice(j, 0, indices[i]);
    }
    indices=sortedIndices;

    var elementsForSorting = [];
    for (i = 0; i < indices.length; i++) {
        if (indices[i]<this.sumAdded) {elementsForSorting.push(this.elements[indices[i]])}
    } //записываем элементы, которые нужно отсортировать в новый несортированный массив

    var sortedElements = [];//объявление пустого сортированного массива
    sortedElements.push(elementsForSorting[0]);
    for (i=1; i<elementsForSorting.length; i++) {
        var k=0;
        while (elementsForSorting[i]>sortedElements[k] && k<sortedElements.length) {k++}
        sortedElements.splice(k, 0, elementsForSorting[i]);
    }

   	if (this.setterReverseComparator==1) {indices.reverse()}

    var n=0;
  	for(i=0; i<indices.length;i++) {
      	if (indices[i]<this.elements.length) {
          this.elements[indices[i]]=sortedElements[n];
          n++;
      	}
 	}


  }

  setComparator(compareFunction) {
	
  	compareFunction();
  }
 


}
module.exports = Sorter;