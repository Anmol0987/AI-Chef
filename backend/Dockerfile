FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3001

CMD ["npm", "run", "start"]