FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 5173
CMD ["yarn", "run", "dev"]
