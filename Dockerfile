FROM node:16-alpine AS builder

COPY . .

RUN npm ci --only=production && \
    npm install -g typescript && \
    tsc src/*.ts --outDir bin

FROM node:16-alpine
ENV NODE_ENV=production

COPY --from=builder /bin /app
COPY --from=builder /node_modules /app/node_modules

WORKDIR /app

CMD ["node", "/app/index.js"]