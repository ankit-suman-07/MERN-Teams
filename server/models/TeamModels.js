const mongoose = require("mongoose");

const teamSchema = mongoose.Schema(
    {
        team_name: {
            type: String,
            required: true,
        },
        members: {
            type: [String],
        },
    },
);

const Team = mongoose.model('Teams', teamSchema);
module.exports = Team;