import joi from "joi";

export const ValidateUserId = (userId) => {
     const Schema = joi.object({
        _id: joi.string().required(),
     });  
     
     return Schema.validateAsync(userId);
};

export const ValidateUpdateId = (updateuserId) => {
    const Schema = joi.object({
       userid: joi.string().required(),
       userData: joi.string().required(),
    });  
    
    return Schema.validateAsync(updateuserId);
};