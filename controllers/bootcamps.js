// @desc    Get All Bootcamps
// @route   /api/v1/bootcamps
// @access  Public
exports.getAllBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Show all bootcamps'
    });
}

// @desc    Get Single Bootcamp
// @route   /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Display bootcamp ${req.params.id}`
    });
}

// @desc    Create new Bootcamp
// @route   /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Create new bootcamp'
    });
}

// @desc    Update a Bootcamp
// @route   /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Update bootcamp ${req.params.id}`
    });
}

// @desc    Delete a Bootcamp
// @route   /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Delete bootcamp ${req.params.id}`
    });
}