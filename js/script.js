$(function() {
	$('<ul></ul>', {
		id: 'members'
	}).append('Team Members:').appendTo('aside');
	
	addMembers();
});

function addMembers() {
	$('<li></li>', {
		id: 'FritzyP',
		click: populate
	}).append('FritzyP').appendTo('#members');
}

function populate() {
	var clickedID = $(this).attr('id');
	$('section').empty();
	if (clickedID == 'FritzyP') {
		$('<p></p>', {
			id: 'test'
		}).append('It worked!').appendTo('section');
	}
}