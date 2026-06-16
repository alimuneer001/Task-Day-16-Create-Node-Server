# Basic Node.js HTTP Server and File Reading Task

This is a beginner-level Node.js practice project.
In this task, I created a basic Node.js HTTP server and a file-reading script using built-in Node.js modules.

## Task Requirements

The task was to:

1. Write a Node.js script to read a `.txt` file and print its contents.
2. Write a Node.js script to create a basic HTTP server that responds with `"Hello World"`.
3. Create a `package.json` file from scratch.
4. Submit a basic Node.js HTTP server and file-reading script.

## Project Structure

```txt
practice/
├── app.js
├── message.txt
├── read-file.js
├── package.json
├── package-lock.json
└── README.md
```

## Files Explanation

### `app.js`

This file creates a basic HTTP server using Node.js built-in `http` module.

The server runs on port `3000` and sends this response to the browser:

```txt
Hello World from Node.js server
```

When the server starts, the terminal shows:

```txt
Server is running on http://localhost:3000
```

### `message.txt`

This is a simple text file that contains sample text.

The content of this file is read by the `read-file.js` script.

### `read-file.js`

This file reads the content of `message.txt` using Node.js built-in `fs` module.

It also uses the `path` module to safely locate the `message.txt` file.

When the script runs, it prints the file content in the terminal.

### `package.json`

This file contains the project information, npm scripts, project type, and development dependencies.

The project uses CommonJS, so `require()` is used in the JavaScript files.

## Technologies Used

* Node.js
* JavaScript
* HTTP module
* File System module
* Path module
* Nodemon

## NPM Scripts

The following scripts are available in this project:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js",
  "read": "node read-file.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

## How to Install

First, install the project dependencies:

```bash
npm install
```

## How to Run the HTTP Server

To run the server normally:

```bash
npm start
```

Or:

```bash
npm run start
```

To run the server with nodemon:

```bash
npm run dev
```

Then open this URL in the browser:

```txt
http://localhost:3000
```

Expected browser output:

```txt
Hello World from Node.js server
```

## How to Run the File Reading Script

To read the text file, run:

```bash
npm run read
```

Expected terminal output:

```txt
File content:
Hello Ali!
This text is coming from message.txt file.
Node.js is reading this file.
```

## Final Output

This project successfully includes:

* A basic Node.js HTTP server
* A file-reading script
* A manually created `package.json` file
