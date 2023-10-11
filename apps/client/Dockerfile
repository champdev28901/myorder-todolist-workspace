# Use an official node runtime as a parent image
FROM node:16-alpine

# Set the working directory in container
WORKDIR /app

# Copy package.json and package-lock.json
COPY ../package*.json ./

# Install dependencies
RUN npm ci

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Expose port 3000
EXPOSE 4200

# Start app
CMD ["npm", "start:client"]
