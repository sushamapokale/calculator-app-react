# pull the official base image
FROM node:14
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
RUN npm i
# add app
COPY . ./
# start app
CMD ["npm", "start"]

#go to this app directory in cmd
#and run - docker build -t anyname .