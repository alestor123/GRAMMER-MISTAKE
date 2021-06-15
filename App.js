const axios = require('axios')
module.exports = async str => {
  const { language, matches } = (await axios.get('https://api.languagetoolplus.com/v2/check?' + new URLSearchParams({ text: str, language: 'en-US', enabledOnly: false }).toString())).data
  return { language, matches }
}
