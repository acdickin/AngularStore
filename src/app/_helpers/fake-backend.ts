import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let fakeBackendProvider ={
	//use fake bancked in place of http serivice
	provide: Http,
	useFactory:(backend: MockBackend, options:Base RequestOptions)=>{
		//array in local storage for regesterd users
		let users:any[] JSON.parse(localStorage.getItem('users'))||[];

		//configure fake backend
		backedn.connections.subscribe((connection:MockConnection)=>{}
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
				

					}
				}
			}
				)	)
	}
}