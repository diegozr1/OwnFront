# ![OwnFront](https://github.com/zdr00/OwnFront/blob/master/development/img/logo.png "Logo") OwnFront

### Speed up the start of a new web app

This is a frontend template to quick start every web project you make, this is an open source template to speed up your development and make a completely free and flexible frontend app.

It includes the best libraries for frontend development of the modern web, a livereload webserver with gulp(you need to install livereload on Chrome, or use the latest version of Firefox), it uses normalize.css, modernizr, angularjs and jquery.

## How to use


-  **1.** Check if you already have installed **npm**, **bower**, and **gulp** 

	Via the command line do

	
	``` npm -v  && bower -v && gulp -v ```

	If you get response with a number for each go to step 2, otherwise do the following
	

	- Go to the official website of [Nodejs](https://www.nodejs.org) to install it on your OS, npm comes with it

	- Install **Bower**

	``` npm install --global bower ```
	
	- Install **Gulp**
	
	``` npm install --global gulp ```
	
	**Note**, if you are getting permissions errors installing these plugins you may have to prepend those commands with sudo!


-  **2.** Download the zip file or clone the repo 


  	``` git clone https://github.com/zdr00/OwnFront.git ```
  	

- **3.** Go the folder *OwnFront* you just downloaded or cloned and 

 	Install the **bower** components

 	``` bower install ```

 	Install the **npm** components

	``` npm install ```

	Run **gulp**

	``` gulp ```
	
	You can make it in one line 

	``` npm install && bower install && gulp ```

	And go to your browser at [http://localhost:8000](http://localhost:8000)


- **4.** Happy coding

	Go to the *development* folder and start working on it


## Tools included

- Bower.io
- Normalize.css
- Modernizr.js
- Jquery
- Gulp.js
- Font Awesome

You can add your own with bower

## Be part of this

Feel free to colaborate and make recommendations to <diego.zr@live.com.mx>

We want to add more features like

- Sass
- Jade
- Npm module

Make it an npm module with options to

- Select the frontend framework (Bootstrap, Foundation)
- The Javascript libraries (Angular.js, Backbone.js, Ember.js)