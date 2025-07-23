# Base image for building
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the app
RUN yarn build

# Base image for serving
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy your custom Nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/

# ✅ Copy the built app from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html


# Expose port 80
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]