FROM node:lts-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production=false
COPY . .
EXPOSE 5173
CMD ["yarn", "dev", "--host"]





