# HOW TO START :

```zsh
# si jamais fais :
docker create network app-network

# ensuite :
cd ./docker
docker-compose -f docker-compose.dev.yml -p ms-users build --no-cache
docker-compose -f docker-compose.dev.yml -p ms-users up -d
```

Si problème, `restart ms_users_app` 1 ou 2 fois.
