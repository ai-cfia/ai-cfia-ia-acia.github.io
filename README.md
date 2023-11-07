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
This website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment process is managed through GitHub Actions workflows.

### Deployment Workflow
When changes are pushed to the `main` branch, the following actions are taken by the GitHub Actions workflow:

1. **Trigger**: The `Deploy to GitHub Pages` workflow is triggered on every push to the `main` branch. During the workflow run, static assets are built and then moved to the `deployment` branch, from which the website is served.

2. **Permissions**: The workflow requires write permissions to the repository contents in order to update GitHub Pages.

3. **Deployment Job**: A job is executed using a reusable workflow from the reusable [workflow repository](https://github.com/ai-cfia/github-workflows). The workflow specifies the Node.js version to use, working directory, directory to publish from, and the branch to which the site should be published.

After a successful build and deployment, the website will be available at the provided URL.
