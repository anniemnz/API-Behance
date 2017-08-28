$(function(){


	let key = 'Tt1i6BweiDbecwnbp4L1Bx87XJgm0bk4'

	if($('#index').length>0){
		let urlProjects = 'https://api.behance.net/v2/users/neo_innov/projects?client_id='+key;

	$.ajax({
			url: urlProjects,
			dataType: 'jsonp',
			success: function(res){
				let projects = res.projects;
				_(projects).each(function(project){
					$('<li>'+project.name+'<img src="'+project.covers.original+'"><a href="project.html?projectid='+project.id+'">see more</a></li>')
					.appendTo('ul.projects');
				});
			}
			

		});

	}

	
	
});


