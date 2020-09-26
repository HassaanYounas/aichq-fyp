const expressJwt = require('express-jwt');

const config = require('./config.json');
// const patientService = require('../db/db.patient.service');
// const doctorService = require('../db/db.doctor.service');

async function isRevoked(req, payload, done) {
    const params = { id: payload.sub };
    // const patient = await patientService.getPatientByID(params);
    // const doctor = await doctorService.getDoctorByID(params);
    // if (!patient && !doctor) return done(null, true);
    // else done();
}

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            '/api/patient/register',
            '/api/patient/authenticate',
            '/api/doctor/register',
            '/api/doctor/authenticate'
        ]
    });
}

module.exports = jwt;