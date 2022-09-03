ARG NODE_VERSION=18

FROM node:$NODE_VERSION

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install --production=false

COPY . ./

RUN npx prisma generate && npm run build

EXPOSE 3000

CMD ["bash", "/app/startup.sh"]

# FROM node:$NODE_VERSION AS builder

# WORKDIR /app

# # Prepare node_modules
# COPY ./.yarn ./.yarn
# COPY ./package.json ./yarn.lock .yarnrc .
# RUN yarn install --frozen-lockfile --production

# # Run phase
# FROM gcr.io/distroless/nodejs:$NODE_VERSION AS runner

# WORKDIR /app

# COPY --from=builder /app .

# # Copy artifacts
# COPY ./next.config.js .
# COPY ./public ./public
# COPY ./.next ./.next

# CMD ["./node_modules/next/dist/bin/next", "start"]
