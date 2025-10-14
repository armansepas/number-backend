FROM oven/bun:latest

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN bun install --frozen-lockfile

COPY src ./src

RUN bun run build

EXPOSE 9999

CMD ["bun", "run", "start"]