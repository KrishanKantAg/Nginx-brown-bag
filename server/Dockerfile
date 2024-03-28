FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copying rest of the application to app directory
COPY . .

# Expose the port and start the application
Expose 7777
CMD ["npm","run","start"]