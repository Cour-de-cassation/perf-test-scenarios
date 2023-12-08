const mandatoryDecisionMetadata = {
  nomJuridiction: 'Juridictions civiles de première instance',
  idJuridiction: 'TJ75011',
  numeroRegistre: 'A',
  numeroRoleGeneral: '01/12345',
  codeService: '0A',
  dateDecision: '20231121',
  libelleService: 'Libelle de service',
  codeDecision: '55C',
  libelleCodeDecision: 'some libelle code decision',
  codeNAC: '11F',
  libelleNAC: 'Demande en dommages-intérêts contre un organisme',
  codeNature: '6C',
  libelleNature: 'Autres demandes en matière de frais et dépens',
  decisionPublique: true,
  recommandationOccultation: 'aucune',
  selection: false,
  matiereDeterminee: true,
  pourvoiLocal: false,
  pourvoiCourDeCassation: false,
  debatPublic: true
}

const autocannonConf = {
  title: 'POST /decisions on JURITJ API',
  url: `${process.env.JURITJ_API_URL}/v1/decisions`,
  method: 'POST',
  form: {
    decisionIntegre: {
      type: 'file',
      path: 'src/juritj-api/wordperfect-example-file.wpd'
    },
    metadonnees: {
      type: 'text',
      value: JSON.stringify(mandatoryDecisionMetadata)
    }
  },  
  tlsOptions: readCerts() 
}

function readCerts() {
  const fs = require('fs')
  const caCert = fs.readFileSync('/tmp/ca-cert.pem')
  const cert = fs.readFileSync('/tmp/certif.pem')
  const key = fs.readFileSync('/tmp/cert-key.key')
  return { 
    ca: caCert,
    cert: cert,
    key: key,
    passphrase: process.env.CLIENT_PRIVATE_KEY_PASSPHRASE
  }

}
module.exports = { mandatoryDecisionMetadata, autocannonConf }
