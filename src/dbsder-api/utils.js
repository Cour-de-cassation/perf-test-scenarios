const autocannon = require('autocannon')

const decision = {
  appeals: ['someAppeal'],
  chamberId: 'someChamberId',
  chamberName: 'someChamberName',
  dateCreation: '2023-01-01T00:00:00.000Z',
  dateDecision: '2023-02-01',
  decatt: [1, 2],
  jurisdictionCode: 'someJurisdictionCode',
  jurisdictionId: 'someJurisdictionId',
  jurisdictionName: 'someJurisdictionName',
  labelStatus: 'toBeTreated',
  occultation: {
    additionalTerms: 'someAdditionalTerms',
    categoriesToOmit: ['someCategoriesToOmit']
  },
  originalText: 'someOriginalText',
  parties: [
    {
      type: 'PP',
      nom: 'nom',
      prenom: 'prenom',
      civilite: 'M.',
      qualite: 'I'
    },
    {
      type: 'PP',
      nom: 'nom',
      prenom: 'prenom',
      civilite: 'Mme.',
      qualite: 'K'
    }
  ],
  registerNumber: 'someRegisterNumber',
  solution: 'someSolution',
  sourceId: 1,
  sourceName: 'juritj',
  publication: ['somePublication'],
  formation: 'someFormation',
  blocOccultation: 1,
  NAOCode: 'someNAOCode',
  natureAffaireCivil: 'someNatureAffaireCivil',
  natureAffairePenal: 'someNatureAffairePenal',
  codeMatiereCivil: 'someCodeMatiereCivil',
  codeDecision: '0aA',
  codeNature: '6C',
  codeService: '0A',
  debatPublic: true,
  indicateurQPC: true,
  libelleNAC: 'Demande en dommages-intérêts contre un organisme',
  libelleService: 'Libelle de service',
  libelleCodeDecision: 'some libelle code decision',
  libelleNatureParticuliere: 'Autres demandes en matière de frais et dépens',
  matiereDeterminee: true,
  numeroRoleGeneral: '01/12345',
  recommandationOccultation: 'aucune',
  pourvoiCourDeCassation: false,
  pourvoiLocal: false,
  selection: false,
  idDecisionTJ: 'TJ00001A01-1234520221121'
}

async function deleteDecision(createdDecisionId) {
  const instance = await autocannon({
    title: 'DELETE /api/v1/decisions/:id',
    method: 'DELETE',
    url: `${process.env.DBSDER_API_URL}/v1/decisions/${createdDecisionId}`,
    headers: {
      'x-api-key': process.env.OPS_API_KEY,
      'Content-Type': 'application/json'
    },
    amount: 1,
    connections: 1,
    workers: 1
  }).on('reqError', console.log)
  console.log(instance)
}

module.exports = { decision, deleteDecision }
