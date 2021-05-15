# Local Run

```
docker run --rm -e PORT=80 -p 4040:80 -v $PWD:/app -w /app node npm start
```