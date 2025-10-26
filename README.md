# Express Performance Profiler

A lightweight Express middleware that measures and logs request processing time.  
Useful for performance tuning, debugging, API monitoring, and production observability.

## ✨ Features
- Logs request duration (in milliseconds)
- Flags slow endpoints
- Zero external dependencies
- Drop-in middleware

## 🚀 Installation
```bash
npm install express-performance-profiler
```

## 🧩 Usage
```javascript
const express = require("express");
const profiler = require("express-performance-profiler");

const app = express();
app.use(profiler({ slowThreshold: 500 })); // highlight requests > 500ms

app.get("/", (req, res) => {
  setTimeout(() => res.send("Hello world!"), 200);
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

## ⚙️ Options
| Option | Default | Description |
|--------|---------|-------------|
| slowThreshold | 1000 | Duration (ms) after which a request is considered slow |

## 📝 License
MIT
