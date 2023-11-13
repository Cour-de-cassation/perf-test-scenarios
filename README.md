# Perf-test-scenarios

Ce répertoire contient les tests de performance des applications juritj.

## Outillage

Les tests se reposent sur la librairie [autocannon](https://github.com/mcollina/autocannon) permettant d'effectuer des tests de charge (load test) et des tests de stress (stress test).

## Paramétrage

Vous pouvez modifier le nombre d'appels via la variable d'environnement **DBSDER_API_AMOUNT**.

Afin de garantir l'appel, il faut renseigner variables suivantes :
````
DBSDER_API_URL=http://localhost:PORT # L'url de l'API
LABEL_API_KEY=LABEL_API_KEY # La clé API de l'applicatif
# À renseigner
DBSDER_API_AMOUNT=500 # Optionnel, le nombre de requêtes
````

## Lancement

Au sein du **package.json**, on lance le script pour tester DbsderAPI via la commande :

```
npm run start:test:dbsder-api
```

