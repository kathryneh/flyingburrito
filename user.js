/* User
* 
* Models users that are working on the current project.
* Includes role in the project and light biographical information.
*
* The methods defined pertain to the manipulation of activity    *objects.
*
*/

var User = function(first, last, role) {
	this.first = first;
	this.last = last;
	this.role = role;

	/*Each user will have a string array of the titles of their activities*/
	this.activityLog = [];
}

User.prototype.getName = function(){
	return this.first + " " + this.last;
}

User.prototype.createActivity() = function(){
	
}

/*Will we need a fn like this to move activities to the different sections?*/
User.prototype.moveActivity() = function(activity, destination){

}


