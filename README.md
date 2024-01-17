# Perf-test-scenarios

Ce répertoire contient les tests de performance des applications juritj.
Etat actuel : 
- API DBSDER : ok 
- API JURITJ : il reste le paramétrage des certificats à faire

## Outillage

Les tests se reposent sur la librairie [autocannon](https://github.com/mcollina/autocannon) permettant d'effectuer des tests de charge (load test) et des tests de stress (stress test).

## Paramétrage

Afin de garantir l'appel, il faut renseigner variables suivantes dans un fichier `.env` :
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

## Lancement en local

Au préalable, lancer l'application cible à tester. 
Au sein du **package.json**, on lance le script via les commandes :

```
    "test:connect:dbsder": pour tester la connexion à l'API DBSDER
    "test:sc1:dbsder": pour exécuter le premier scénario de test de perf sur l'API DBSDER
    "test:connect:juritj": pour tester la connexion à l'API JURITJ
    "test:sc1:juritj": pour exécuter le premier scénario de test de perf sur l'API JURITJ
```

## Lancement sur CI/CD
Lors du déploiement sur CI/CD, il est possible de lancer les étapes précédentes manuellement sur la pipeline. 

## Points d'attention

### JuriTJ Collecte 
L'exécution des scénarios entraine la création d'une décision via l'API JURITJ Collecte sur le bucket S3, et après normalisation, sur la DBSDER (via API DBSDER). 
La suppression de la décision nouvellement créée se fait manuellement sur la base des métadonnées de la décision (sourceId / sourceName). 

### API DBSDER 
L'exécution des scénarios entraine la création d'une décision en DBSDER. La suppression est automatisée (exécution en fin de scénarios). 