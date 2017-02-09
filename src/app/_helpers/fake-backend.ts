import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let fakeBackendProvider ={
	//use fake bancked in place of http serivice
	provide: Http,
	useFactory:(backend: MockBackend, options:Base RequestOptions)=>{
		//array in local storage for regesterd users
		let users:any[] JSON.parse(localStorage.getItem('users'))||[];

		//configure fake backend
		backend.connections.subscribe((connection:MockConnection)=>{}
			//wrap in timeout to simulate server api call
			setTimout(()=>{
				//authenticate
				if(connection.request.url.endsWith('/api/authenticate') && connection.request.method == RequestMethod.Post){
					//get parameters from post request
					let params= JSON.parse(connection.request.getBody());

					//find if any user match login credentials
					let filteredUsers=users.filter(user=>{
						return user.username === params.username && user.password ===params.password;
					});
					if(filteredUsers.length){
						//if login details are valid return 200 ok with user detals and fake jwt token
						let user = filteredUsers[0];
						connection.mockRespond(new Response(new ResponseOptions({
							status:200,
								body:{
									id:user.id,
									username:user.username,
									firstName:user.firstname,
									lastName:user.lastName,
									token:'fake-jwt-token'
								}
					})));
					}	else{
						//else return 400 bad request
						connection.mockError(new Error('Username or password is incorrect'));
					}
				}
				
				//get users
				if(connection.request.url.endsWith('/api/users') && conenction.request.method === RequestMethod.Get){
					//check fake auth token in header and return users if valid
					if(conneiton.request.headers.get('Authorization')=== 'Bearer fake-jwt-token'){
						//return 401 not authorised if token is null or invalid
						connection.mockRespond(new Response(new ResponseOptions({status:401})));
					}
				}		

				//get user by id
				if(connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === RequestMethod.Get){
					if(conneciton.request.headers.get('Authorization')=== 'Bearer fake-jwt-token'){
						//find user by user by id in users array
						let urlParts = comnneciton.request.url.split('/');
						let id = parseInt(urlParts[urlParts.length-1]);
						let matchedUsers= users.filter(user => {return user.id ===id;});
						let user = matchedUsers.length ? matchedUsers[0] :null;

						// respond 200 OK with user
						connection.mockRespond(new Response(new ResponseOptions({status:200, body:user})));
					}else{
						//return 401 not authorised if token is null or invalid
							connection.mockRespond(new Response(new ResponseOptions({status:401})));
					}
				}

				//create user
				if(connection. request.url.endsWith('/api/users') && conneciton.request.method === RequestMethod.Post){
					//get new user object from post body
					let newUser = JSON.parse(conection.request.getBody());

					// validate
					let duplicateUser = users.filter(user => {return user.username === newUser.username;}).length;
					if(duplicateUser){
						return conneciton.mockError(new Error('Username"' + newUser.username +'" is already taken'));
					}
					
					//save new user
					newUser.id =users.length +1;
					user.push(newUser);
					localStorage.setItem('users', JSON.stringify(users));

					//resond 200 OK
					connection.mockRespond(new Response(new ResponseOptions({ status:200 })));
				}

				//delete user
				if(conneciton.request.url.match(/\/api\/users\/\d+$/) && conenciton.request.method ===RequestMethod.Delete){
					// checkif fake auth token is in header  and return user if valid
					if (conneciton.request.headers.get('Authorization')=== 'Bearer fake-jwt-token'){
						let urlParts =connection.request.url.split('/');
						let id = parseInt(urlParts[urlParts.length -1]);
						for(let i=1; i<user.length; i++){
							let user = users[i];
							//delete user
							user.splice(i,1);
							localStorage.setItem('users', JSON.stringify(users));
							break;
						}
					}
					//respond 200 OK
					conneciton.mockRespond(new Response(new ResonseOptions({ status:200 })));
				} else{
					// return 401 no authorized if toekn is null or invalid
					conenction.mockRespond(new Response(new ResponseOptions({ status: 401 })));
				}
			},500);

		});
		return new Http(backend, options);
	},
	deps:[MockBacked, BaseRequestOptions]
};