/* Status
 * Models status updates added by users to recount their daily tasks. 
 * Provides information about the date it was made, the person who made
 * the update, as well as the text of the actual update.
 */

var Status = function(date, author, text){
	//go ahead and assign it to the current date. 
	this.date = new Date();
	this.author = author;
	this.text = text;
	//generate a sprint ID +1 of the previous one; 
	//guaranteed unique for each new created sprint
	this.sprintID = sprintID++;
}

/* get the date of the status */
Status.prototype.getDate = function(){
	if (this.date.getDate() == new Date().getDate()){
		//if the date was from today, just return the HH:mm:am/pm
		return this.date.toLocaleTimeString();
	} 
	else{
		//return the actual date in
		return this.date.toLocaleDateString();
	}
}

/* Editing a user's status*/
Status.prototype.setStatus = function(text){
	//update the text to new text
	this.text = text;
	//update the date to a new time
	this.date = new Date();
}

Status.prototype.getAuthor = function(){
	return this.author;
}

Status.prototype.getText = function(){
	return this.text;
}
