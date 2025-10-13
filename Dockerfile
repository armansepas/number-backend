FROM oven/bun:latest

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN bun install --frozen-lockfile

COPY src ./src

EXPOSE 3000

CMD ["bun", "src/index.ts"]