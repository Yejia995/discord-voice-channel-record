FROM node:21
WORKDIR /app
COPY * /app
RUN npm install
CMD ["node", "index.js"]