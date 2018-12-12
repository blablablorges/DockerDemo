FROM node:10

# Create app directory
RUN mkdir -p /myapp
WORKDIR /myapp

# Install app dependencies
COPY apifiles/package.json /myapp/
RUN npm install

# Bundle app source
COPY apifiles /myapp

EXPOSE 8080
CMD [ "npm", "start" ]
