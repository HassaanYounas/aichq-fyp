function errorHandler(err, req, res, next) {
    if (typeof(err) === 'string') {
        return res.status(400).json({ message: err });
    } else if (err.name === 'Validation Error') {
        return res.status(400).json({ message: err.message });
    } else if (err.name === 'Unauthorized Error') {
        return res.status(401).json({ message: 'Invalid Token' });
    } else return res.status(500).json({ message: err.message });
}

module.exports = errorHandler;