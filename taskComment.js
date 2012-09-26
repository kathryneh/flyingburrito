/* TaskComment
*
*  Details comment objects that will be associated with task IDs
*
*
*/

var taskComment = function (comment, taskID) {
	this.comment = comment;
	this .taskID = taskID;
}

taskComment.prototype.getComment = function(){
	return this.comment;

}
