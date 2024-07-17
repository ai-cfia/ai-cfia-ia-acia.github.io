FROM node:lts

ENV FORCE_COLOR=0

RUN corepack enable

WORKDIR /opt/docusaurus

RUN chown -R 1000:1000 /opt/docusaurus

COPY . /opt/docusaurus/

RUN npm ci

RUN npm run build

RUN chown -R 1000:1000 /opt/docusaurus

EXPOSE 3000

USER 1000

CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--no-open"]
