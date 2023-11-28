const decision = {
  _id: 'someID',
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
  selection: false
}

const autocannonConf = {
  title: 'PUT /api/v1/decisions',
  url: `${process.env.DBSDER_API_URL}/v1/decisions`,
  method: 'PUT',
  headers: {
    'x-api-key': process.env.NORMALIZATION_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ decision: decision })
}

module.exports = { decision, autocannonConf }
