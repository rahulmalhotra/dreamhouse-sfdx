#! /usr/bin/env node

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const DISPLAY_URL_JSON = JSON.parse(process.env.DISPLAY_URL_JSON);
const DISPLAY_USER_JSON = JSON.parse(process.env.DISPLAY_USER_JSON);

const TEXT = `
Here's your personal scratch org info.
You can open your org at ${DISPLAY_URL_JSON.result.url}.
Here are some other details of your org.
Org ID: ${DISPLAY_USER_JSON.result.orgId}
Username: ${DISPLAY_USER_JSON.result.username}
Password: ${DISPLAY_USER_JSON.result.password}
Instance URL: ${DISPLAY_USER_JSON.result.instanceUrl}
Login URL: ${DISPLAY_USER_JSON.result.loginUrl}
`;

const msg = {
    to: 'rahuldaphnis96@gmail.com',
    from: 'rahuldaphnis96@gmail.com',
    subject: 'Welcome to your new scratch org',
    text: TEXT,
};

sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));
