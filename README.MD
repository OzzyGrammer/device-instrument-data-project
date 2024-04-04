# Time Series Data Visualization Web Application

This project aims to build a simple web application for visualizing time-series datasets captured from monitoring devices. The web application consists of a Python-based API backend, a NextJs frontend, and a Postgres database for storage. The dataset includes information about devices, parameters (sensors), and captured data, which can be numeric or text type.

## Project Overview

The web application allows users to view numeric and text parameter data over time. Users can easily select a particular device and visualize its data through basic tables with tables

## Technologies Used

- **Nextjs Frontend**: A JavaScript library for building user interfaces.
- **Django Backend**: Django intergrated with graphql APIS
- **Postgres Database**: I Chose PostgreSQL to store my data.
- **Charting Library**: I used a react-chartjs-2 package to visualise the data using charts.
- **Tanstack Table Library**: I decided to use Tables visualize parameter data, with filtering and pagination.

## Setup Instructions

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Set Up Backend**:
   - Navigate to the backend [directory](measurement-fu).
   - Instructions on project Readme [Django Project Readme](measurement-fu/README.MD)

3. **Set Up Frontend**:
   - Navigate to the frontend [directory](measurement-fu-fe).
   - Install Latest Version of node using [nvm](https://github.com/nvm-sh/nvm)
   - Install dependencies: `npm install`.
   - make sure the backend is running on port 8000
   - Instructions on project Readme [Django Project Readme](measurement-fu-fe/README.MD)

