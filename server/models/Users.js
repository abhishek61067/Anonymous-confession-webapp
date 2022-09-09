//Schema means database 

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        // title: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // postText: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    // Users.associate = (models) => {
    //     Users.hasMany(models.Posts, {
    //         onDelete: "cascade",
    //         // onDelete: "cascade" mean if the post is deleted, 
    //         // then, the comments associated with that post is going to get deleted as well.
    //     });
    // };

    return Users;
};
