$(function(){

	let key = 'rNpfVX5Q1X3BQx886ASWQRpDGLK8v3m7';

	// https://www.behance.net/dev/register
	// https://www.behance.net/dev/api/endpoints/2
	
	//+key gets the key from above which has been allocated after registering in link on line 5

	// https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh/related
	// console.log(url);
	// use the above to check that you have successfully added the person in behance. Get the url in console in inspect

	if($('#index').length>0){
		let urlProjects = 'https://api.behance.net/v2/users/boothehamster/projects?client_id='+key; 
	

		//ajax will go behind the scene and ask behance for the data
		//jsonp stands for padded json - a security feature for the backend CORS cross Origin Rgional Sharing
		$.ajax({
			url: urlProjects,
			dataType: 'jsonp',
			success: function(res){
				// console.log(res);
				//success function is a call back done by the system -- res stands for response

				let projects = res.projects;
				_(projects).each(function(project){
					$('<li>'+project.name+'<img src="'+project.covers.original+'"><a href="project.html?projectid='+project.id+'">see more</a></li>')
					.appendTo('ul.projects');
				});
			}
			

		});

	}

	if($('#project').length>0){
//this bit of code grabs the parameters for the "see more" link - the number in console log should match the number in the address bar for the project
		let pageURL = new URL(document.location);
		let params = pageURL.searchParams;
		let projectid = params.get('projectid');

		// console.log(projectid);

		let urlProject = 'http://www.behance.net/v2/projects/'+projectid+'?api_key='+key;

		$.ajax({
			url: urlProject,
			dataType: 'jsonp',
			success: function(res){
				let project = res.project;

				$('<h1>'+project.name+'</h1>').appendTo('.container');
				$('<p>'+project.description+'</p>').appendTo('.container');
				$('<h3>'+moment.unix(project.published_on).fromNow()+'</h3>').appendTo('.container');
				$('<img src="'+project.covers.original+'">').appendTo('.container');
			}
		});



	}
	
});


