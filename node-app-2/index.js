const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 
        "Content-Type": "text/html; charset=utf-8"
    });
    
    res.end(`
        <html>
            <head><meta charset="UTF-8"></head>
            <body style="background: #e8f5e9; padding: 20px;">
                <h1>🚀 App 2 (Порт 3001)</h1>
                <p>Это ВТОРОЕ Node.js приложение</p>
                <p><strong>Порт:</strong> 3001</p>
                <p><strong>URL:</strong> ${req.url}</p>
                <p><strong>Время:</strong> ${new Date().toISOString()}</p>
            </body>
        </html>
    `);
});

server.listen(3001, () => {
    console.log("App 2 запущен на порту 3001");
});
