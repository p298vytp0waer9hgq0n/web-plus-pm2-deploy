require('dotenv').config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REPO, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'app',
    script: './dist/app.js',
  }],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'pre-deploy-local': `ssh-keygen -F ${DEPLOY_HOST} && scp .env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/backend`,
      'post-deploy': 'cd backend && nvm use 18 && npm i && npm run build && pm2 reload app',
    },
  },
};
