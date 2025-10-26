# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port for Railway
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

