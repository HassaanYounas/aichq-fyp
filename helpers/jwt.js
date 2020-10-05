const expressJwt = require('express-jwt');

const config = require('./config.json');

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
            '/api/admin/login',
            '/api/admin/create',
            '/api/batch/all/slim'
        ]
    });
}

module.exports = jwt;