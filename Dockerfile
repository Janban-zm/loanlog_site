# Use Node.js base image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies
FROM base AS deps
# Install necessary dependencies for alpine
RUN apk add --no-cache libc6-compat

# Copy package.json and package-lock.json (use npm)
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Production image setup
FROM base AS runner
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Add user to run the app as non-root
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy the built Next.js app to the production image
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set the user to non-root
USER nextjs

# Expose the application port
EXPOSE 3000

# Set the port for the app
ENV PORT=3000

# Set the hostname for the app to allow external connections
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["node", "server.js"]
