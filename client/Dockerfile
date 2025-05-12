FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5173
EXPOSE 4173
CMD ["npm", "run", "dev"]
