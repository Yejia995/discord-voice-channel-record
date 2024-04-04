# ENABOT
A minimal Discord bot that logs voice channel activites.

<img src="https://github.com/Yejia995/enabot/assets/70046367/412135f1-bbcc-49db-810a-fe8900903e3e" width="300">


## How to use
### Docker Run
A single command would be enough to run the container:

```bash
docker run -d \
  -e BOT_TOKEN=<bot_token_here> \
  -e CHANNEL_ID=<channel_id_here> \
  docker.io/akizu/enabot:latest
```

> [!TIP]
> You may simply replace `docker` with `podman` if you're using podman.
