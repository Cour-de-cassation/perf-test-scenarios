# Perf-test-scenarios

Ce répertoire contient les tests de performance des applications juritj.

## Outillage

Les tests se reposent sur la librairie [autocannon](https://github.com/mcollina/autocannon) permettant d'effectuer des tests de charge (load test) et des tests de stress (stress test).

## Paramétrage

Afin de garantir l'appel, il faut renseigner variables suivantes :
````
DBSDER_API_URL=http://localhost:PORT
LABEL_API_KEY=LABEL_API_KEY
OPS_API_KEY=OPS_API_KEY
NORMALIZATION_API_KEY=NORMALIZATION_API_KEY

JURITJ_API_URL=http://localhost:PORT
CLIENT_PRIVATE_KEY="client authentication authority certificate"
CLIENT_CERT="client certificate"
CA_CERT="certification authority certificate"
CLIENT_PRIVATE_KEY_PASSPHRASE="client private key passphrase"
````

## Installation 

Pour installer les packages nécessaires au bon fonctionnement de l'application, ouvrir un terminal et entrer la commande suivante : 
```bash
npm install
```  
N'oubliez pas d'installer **husky** pour obtenir les hooks de commit/push
```bash
npx husky install
```

## Lancement

Au sein du **package.json**, on lance le script pour tester DbsderAPI via la commande :

```
npm run start:test:dbsder-api
```

