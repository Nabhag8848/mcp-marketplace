# Use Node.js 20 Alpine as base image for smaller size
FROM node:20-alpine

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Install Yarn
RUN corepack enable

# Copy source code
COPY . .

# Install dependencies
RUN yarn install 

# Build the application
RUN yarn nx build marketplace-server --configuration=production

# Expose the port that your app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "nx", "start", "marketplace-server", "--configuration=production"] 