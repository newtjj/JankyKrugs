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

	$('<li></li>', {
		id: 'StoicAetos',
		click: populate
	}).append('StoicAetos').appendTo('#members');

	$('<li></li>', {
		id: 'Thrompy',
		click: populate
	}).append('Thrompy').appendTo('#members');
}

function populate() {
	var clickedID = $(this).attr('id');
	$('section').empty();
	if (clickedID == 'FritzyP') {
		$('<p></p>', {
			id: 'contentHeader'
		}).append('FritzyP').appendTo('section');

	$('<iframe></iframe>', {
			id: 'montageVid',
			width:'560', 
			height:'315', 
			src:'https://www.youtube.com/embed/5LiZesUDIfE', 
			frameborder:'0'
		}).appendTo('section');
	}

	if (clickedID == 'StoicAetos') {
		$('<p></p>', {
			id: 'contentHeader'
		}).append('StoicAetos').appendTo('section');

		$('<iframe></iframe>', {
			id: 'montageVid',
			width:'560', 
			height:'315', 
			src:'https://www.youtube.com/embed/dJ_OoZu2pyI', 
			frameborder:'0'
		}).appendTo('section');
	}

	if (clickedID == 'Thrompy') {
		$('<p></p>', {
			id: 'contentHeader'
		}).append('Thrompy').appendTo('section');

	$('<iframe></iframe>', {
			id: 'montageVid',
			width:'560', 
			height:'315', 
			src:'https://www.youtube.com/embed/64kAeHVxiM8', 
			frameborder:'0'
		}).appendTo('section');	
	}
}