const { readFileSync } = require("fs")

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

const certificates = readCertificates()

function readCertificates() {
  const  privateKey= readFileSync('/certificates/private-key.pem', 'utf8')
  const  certAuthority= readFileSync('/certificates/ca.pem', 'utf8')
  const  clientCert= readFileSync('/certificates/client-cert.key', 'utf8')

  return { privateKey, certAuthority, clientCert }
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
  // tlsOptions: {
  //   ca: process.env.CA_CERT,
  //   cert: process.env.CLIENT_CERT,
  //   key: process.env.CLIENT_PRIVATE_KEY,
  //   passphrase: process.env.CLIENT_PRIVATE_KEY_PASSPHRASE
  // }
  tlsOptions: {
    ca: certificates.certAuthority,
    cert: certificates.certKey,
    key: certificates.privateKey,
    passphrase: process.env.CLIENT_PRIVATE_KEY_PASSPHRASE
  }
}


module.exports = { mandatoryDecisionMetadata, autocannonConf }
