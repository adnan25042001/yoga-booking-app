// Middleware for checking if the user has the right role
const checkRole = (role) => {
    return (req, res, next) => {
        // Check if the user has the right role
        if (req.user.role !== role) {
            return res.status(403).send({
                success: false,
                error: "Forbidden",
            });
        }

        // If the user has the right role, proceed to the next middleware or route handler
        next();
    };
};

module.exports = checkRole;
