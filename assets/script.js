$(function(){


	let key = 'Tt1i6BweiDbecwnbp4L1Bx87XJgm0bk4'

	if($('#index').length>0){

		//user
		let urlUser = 'https://api.behance.net/v2/users/neo_innov?client_id='+key;
		$.ajax({
			url: urlUser,
			dataType: 'jsonp',
			success: function(res){
				let user = res.user;
				
				console.log();
				$('<h1>'+user.display_name+'</h1>').appendTo('.header-img');
				$('<h3>'+user.location+'</h3>').appendTo('.header-img');
				$('<h4>'+user.occupation+'</h4>').appendTo('.header-img');
				// $('<h3>'+user.username+'</h3>').appendTo('.header-img');

			}
			
		});

		//projects
		let urlProjects = 'https://api.behance.net/v2/users/neo_innov/projects?client_id='+key;
		$.ajax({
			url: urlProjects,
			dataType: 'jsonp',
			success: function(res){
				let projects = res.projects;
				_(projects).each(function(project){
					$('<li><img src="'+project.covers.original+'"><p>'+project.name+'</p><a href="project.html?projectid='+project.id+'">see more</a><i class="fa fa-thumbs-up" aria-hidden="true"></i><p>'+project.stats.views+'</p></li>')
					.appendTo('ul.projects');
				});
			}
			
		});


	}
		if($('#project').length>0){

		let pageURL = new URL(document.location);
		let params = pageURL.searchParams;
		let projectid = params.get('projectid');

		let urlProject = 'http://www.behance.net/v2/projects/'+projectid+'?api_key='+key;

		$.ajax({
			url: urlProject,
			dataType: 'jsonp',
			success: function(res){
				let project = res.project;

				$('<img src="'+project.covers.original+'">').appendTo('.container');
				$('<h1>'+project.name+'</h1>').appendTo('.container');
				$('<p>'+project.description+'</p>').appendTo('.container');
				$('<h3>'+moment.unix(project.published_on).fromNow()+'</h3>').appendTo('.container');
				
			}
		});

	}
	
	
});


