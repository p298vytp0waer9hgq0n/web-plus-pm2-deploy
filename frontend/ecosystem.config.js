require('dotenv').config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'git@github.com:p298vytp0waer9hgq0n/web-plus-pm2-deploy',
      path: DEPLOY_PATH,
      'post-deploy': 'cd frontend && nvm use 16 && npm i && npm run build',
    },
  },
};
