/* Sprint 
 * a list of the activities for a particular time period
 * can add items and remove items from the list;
 *
 *
 */
 var Sprint = function(startDate, endDate){
 	this.startDate = startDate;
 	this.endDate = endDate;
 	this.itemList = []
 	this.completedItemList = [];
 }

 Sprint.prototype.addItem(item){
 	this.itemList.push(item);
 }

 Sprint.prototype.removeItem(item){
 	this.itemlist[this.itemList.indexOf(item)] = null;
 }

 Sprint.prototype.completeItem(item){
 	//add a new item to the completed item list
 	this.completedItemList.push(this.itemlist[this.itemList.indexOf(item)]);
 	//and remove it from the present itemList
 	this.itemlist[this.itemList.indexOf(item)] = null;
 }