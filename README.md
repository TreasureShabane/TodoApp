Todo App Frontend

This is the frontend for the Todo App assessment. It is a static JavaScript app that works with the Todo API backend.

How to Run

Clone the repo:
git clone https://github.com/TreasureShabane/TodoApp.git

Navigate into the folder:
cd todo-frontend

Start a local server (Python example):
python -m http.server 8000

Open your browser at:
http://localhost:8000

Folder Structure

app/

controllers/todo.controller.js     → Handles UI events

models/todo.model.js               → Defines the Todo model

services/todo.service.js           → Communicates with the backend API

app.module.js                      → Initializes the app

index.html                           → Main HTML file

styles.css                           → Styles

API Integration

Make sure the backend is running at:
https://localhost:7133/api/todo

The frontend uses fetch calls in todo.service.js to access:

GET /GetTodoItems

GET /GetTodoItemById/{id}

POST /CreateTodoItem

PUT /UpdateTodoItem

DELETE /DeleteTodoItem/{id}

Notes

Works with the provided backend repo.

Make sure to allow CORS or run both frontend and backend on localhost.

Comments in the JS files guide where to link buttons to backend calls.
