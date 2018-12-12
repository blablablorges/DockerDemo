FROM node:10

# Create app directory
RUN mkdir -p /myapp
WORKDIR /myapp

# Install app dependencies
COPY importerfiles/package.json /myapp/
RUN npm install

# Bundle app source
COPY importerfiles /myapp

CMD [ "npm", "start" ]
