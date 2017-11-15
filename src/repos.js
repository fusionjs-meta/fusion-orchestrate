const api = require('./api');

module.exports = async function getRepos() {
  const {data} = await api.repos.getForOrg({
    org: 'fusionjs',
  });
  return data.map(item => {
    return {
      upstream: 'fusionjs',
      name: item.name,
    };
  });
};