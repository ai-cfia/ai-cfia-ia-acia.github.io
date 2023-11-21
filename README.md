# ai-cfia-ia-acia.github.io
Docusaurus website serving to showcase the AI Lab's activities.

## URL
https://ai-cfia.github.io/ai-cfia-ia-acia.github.io/

## Developing Locally
After opening the project in the devcontainer, change your current working directory:

`cd ai-cfia-ia-acia`

Then install the npm dependencies:

`npm install`

You can now run the development server:

`npm start -- --port 3001`

## Deployment
The website is automatically deployed to GitHub Pages through a streamlined process that begins with a single trigger:

When a push is made to the `main` branch, it initiates the `Deploy to GitHub Pages` workflow. This singular action sets off a series of automated steps:

- **Build Process**: Static assets are generated during the workflow run.
- **Permissions**: Write permissions to the repository contents are verified to enable updates to GitHub Pages.
- **Execution of Deployment Job**: Utilizing a reusable workflow from the [workflow repository](https://github.com/ai-cfia/github-workflows), the job :
- configures the environment with the specified Node.js version
- sets the working directory
- identifies the directory from which to publish
- designates the `deployment` branch as the publication target.

Upon successful completion of these steps, the updated website will be accessible at the URL provided in the workflow run found under "Actions" tab.
