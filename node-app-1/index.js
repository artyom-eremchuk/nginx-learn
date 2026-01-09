const http = require("http");

const server = http.createServer((req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/html; charset=utf-8",
	});

	res.end(`
        <html>
            <head><meta charset="UTF-8"></head>
            <body style="background: #e3f2fd; padding: 20px;">
                <h1>🚀 App 1 (Порт 3000)</h1>
                <p>Это ПЕРВОЕ Node.js приложение</p>
                <p><strong>Порт:</strong> 3000</p>
                <p><strong>URL:</strong> ${req.url}</p>
                <p><strong>Время:</strong> ${new Date().toISOString()}</p>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
	console.log("App 1 запущен на порту 3000");
});
