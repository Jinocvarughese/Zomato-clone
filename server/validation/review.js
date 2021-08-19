import joi from "joi";

export const ValidateReviewId = (reviewId) => {
     const Schema = joi.object({
        _id: joi.string().required(),
     });  
     
     return Schema.validateAsync(reviewId);
};

export const ValidateNewReview = (newrevObj) => {
    const Schema = joi.object({
        searchString: joi.string().required(),
    });
    return Schema.validateAsync(newrevObj);
};