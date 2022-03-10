# datacraft blog

Some text to present the datacraft blog.


## Content
- Blog
- Best practices & convictions
- Open source contributions

## Installation

See docusaurus documentation.


## Machinery

### Tools

All of this work actually relies on the **npm** commannd and the **docusaurus** described hereafter:

 - --> npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently. It is extremely configurable to support a wide variety of use cases. Most commonly, it is used to publish, discover, install, and develop node programs. Run npm help to get a list of available commands.

 - --> Docusaurus is a project for easily building, deploying, and maintaining open source project websites. Docusaurus is a tool in the Documentation as a Service & Tools category of a tech stack. It builds the whole content, shape and look of the website, so when there is something complex to implement, you should turn to the docusaurus website: [https://docusaurus.io/](https://docusaurus.io/) (see documentation).

---

### Workflow

To work on this blog project, you must pull it to your local computer (after a possible fork) and make the changes locally.

 - **Development phase:**
 	- **Working with hot reload:** Every modification can then be tested locally via the command `npm run start` which is an alias for `docusaurus start --port 8080 --host 0.0.0.0` serving the blog locally on port 8080. It takes advantage of the hot reload feature that allows to modify the files (configuration and content) and see how it goes without the need to recompile.
 	- **Durty work doesn't run well:** From time to time, when you have done alot of work, removed several files, created new ones and so on, it is needed to clean everything and starts again. This can be done via the command `npm run clear`. THis command is more specifically useful when going to production, because it clears the `build` and `cache` directories.

 - **Going to production:**
	 - **Building the project:** The `npm run build` command builds all the website static files for production which it stores in the `build` directory. For Docusaurus to serve the files, two parameters are mandatory: `url` and `baseUrl`.

	 - **Test before deployment:** The `npm run serve` commands allows to test the website as if it was on the web but before deployment for production. I didn't test but I think it does not have the hot reload feature, it uses the `build` directory and so it is more static.

	 - **Deployment:** 
	 	- Before deploying it is first needed to indicate the `GIT_USER` variable via the following command: `export GIT_USER=DrKapichu`.
	 	- Then, running the `npm run deploy` command will automatically regenerate the static files in the `build` directory and run the git commands to connect to the `deploymentBranch`, add/rmove the files, commit and push.
 		- Alternatively, you can run the following command: `GIT_USER=DrKapichu npm run deploy`.
	 	- The meta-information needed are given in the **docusaurus.config.js** file: `organizationName` (DrKapichu), `projectName` (drkapichu.github.io), `deploymentBranch` (gh-pages), `Remote repo URL` (https://DrKapichu@github.com/DrKapichu/drkapichu.github.io.git).



