# Use the official Nginx image as the base image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove the default nginx static assets
RUN rm -rf ./*

# Copy built Angular app from build stage
COPY ./dist/search-app /usr/share/nginx/html

# Copy custom nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
