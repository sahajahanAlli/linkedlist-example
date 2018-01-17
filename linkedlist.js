
/*
* LinkedList is a group of node put together to create a sequence. It maintains the order in which data are inserted. 
*We can add or remove at the start or any position of the list. This way it differs from Queue and stack.
*Let's take an example of browsing history of the browser. Each searches are connected,when you click on the previous button 
*It opens previous page you have viewed.
*
*
*/




function LinkedList(){

var head =null;	//This is the pointer for head of the linkedlist
var count=0;   // keeps the count of number of elements in the linkedlist



//returns the no of items in the linkedlist
this.getCount=function(){
	return count;
}

//this method will add new node to start of the linkedlist

this.addAtStart=function(item){

	var node ={
		data : item,
		next: head
	}
	
	// pointing head to newly added node in the linkedlist
	head=node;

	//increase the counter 
	count++;
}


//This method is used to add element in any valid postion in the linkedlist. This method requires two arguments . They are position on 
// which the node is added and the node value . 

this.Add=function(index,item){

//if linkedlist is null. Add the element to start.otherwise sreach the position add it. 
	if(count==0){
		this.addAtStart(item);
	}else if(index > -1 && index < count){

		var node={
			data: item,
			next:null
		}

		var currItem=head;
		var prevItem=null;
		var i=0;

		while(i<index){
			prevItem=currItem;
			currItem=currItem.next;
			i++;
		}
		//addition of new element to linkedlist
		prevItem.next=node;
		node.next=currItem;
		// increase the counter by one
		count++;

	}else {
        console.log("Invalid index entered.");
    }

}

// It method is used to view all the elements in the linkedlist

this.displayAll=function(){
	var ar=[];
	var currItem=head;

	if(count===0){
		return null;
	}else{
		for (var i = 0; i < count; i++) {

			ar.push(currItem.data);
			currItem=currItem.next;
	}
}

return ar;

}

// This method is for viewing the element at specific position element in the linkedlist
this.displayAt=function(index){

	if(index>-1 && index<count){
		var currItem=head;
		var i=0;

		while(i< index){
			currItem=currItem.next;
			i++
		}
		return currItem.data;
	}else{
		return null;
	}
}

//This method is for removing element for the start of the linkedlist

this.removeAtStart=function(){

	if(head ==null){
		return null;
	}else{
		var remvItem=head;
		head=head.next;

	}
	count--;
	return remvItem.data;
}

//This method is used for remove element from the specific position of the linkedlist.
this.removeAt=function(index){

	if(index==0){
		this.removeAtStart();
	}else if(index > -1 && index < count){

		var prevItem=null;
		var currItem=head;
		var i=0;
		while(i<index){
			prevItem=currItem;
			currItem=currItem.next;
			i++;
		}

		prevItem.next=currItem.next;
		count--;
	}else{
		console.log('Invalid index passed')
	}

	return currItem.data;

}

}


module.exports.LinkedList=LinkedList;