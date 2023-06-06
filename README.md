#Project: Pollen App for NBIsweden

## Description

This project was developed for NBIsweden as an assignment for the position of a frontend system developer. The goal of the project is to enhance and improve a Pollen app that displays pollen data for various cities. The app utilizes a backend API implemented in the backend folder, which fetches pollen data from an external API. The current functionality allows users to view the data in a table and select specific cities, types of pollen, and years.

### Functionalities:

1. **City Selection**: The app supports generating city dropdown options based on the available cities in the dataset.
2. **Pollen Type and Year Selection**:  Users can select the type of pollen (e.g., Alnus, Betula, Poaceae) and the desired year.
3. **Data Visualization Enhancement**: The app presents pollen data using visually appealing and informative charts or other data visualization techniques.
4. **HTML Semantics Improvement**: The existing HTML structure of the app has been modified for better semantic markup.
5. **Framework Rebuild**:The app has been rebuilt using a suitable frontend framework (e.g., React, Vue, Angular) while retaining the original functionality and incorporating the enhancements from the previous functionalities.

### Tech Stack:
Vite-React
Typescript
node.js
Express.js
Docker
Docker Compose

## Docker Compose

This project utilizes Docker Compose to simplify the development environment setup and deployment process.
Docker Compose allows you to define and run multi-container Docker applications.
Both backend and frontend will start when you run docker-compose.

### Usage

Build docker:

```
docker compose build
```

Run:

```
docker compose up
```

Open http://localhost:5173 to view it in the browser. The API is on http://localhost:3002/

Stop:
Use Ctrl+C to stop the container

## Swagger API

At [api-docs](http://localhost:3002/api-docs)
