# API NodeJS DankiClub

![Danki Code](https://github.com/dankiCodeBusiness/api-server-nodejs-dankiclub/blob/main/src/assets/cover.jpeg?raw=true)

API Restful

Libraries

- [express](https://www.npmjs.com/package/express)
- [uuid](https://www.npmjs.com/package/uuid)
- [multer](https://www.npmjs.com/package/multer)

```py

    location / {
        location ~* ^.+\.(jpeg|jpg|png|gif|bmp|ico|svg|css|js)$ {
            expires     max;
        }
        proxy_pass http://%ip%:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

```
