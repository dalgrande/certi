#dockerfile to run a express app
FROM node:latest
# Create app directory
WORKDIR ./
# Install app dependencies
COPY . .
RUN npm install
# Bundle app source
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]

