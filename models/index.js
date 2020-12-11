const GroupProposalModel = require('./group-proposal.model');
const SupervisorModel = require('./supervisor.model');

module.exports = {
    Group: require('./group.model'),
    PendingGroup: require('./pending-group.model'),
    Supervisor: require('./supervisor.model'),
    Student: require('./student.model'),
    Batch: require('./batch.model'),
    Admin: require('./admin.model'),
    GroupToken: require('./group-token.model'),
    Department: require('./department.model'),
    GroupProposal: require('./group-proposal.model'),
    SupervisorProposal: require('./supervisor-proposal.model')
};