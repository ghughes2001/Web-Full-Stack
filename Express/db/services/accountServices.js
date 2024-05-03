const UserAccountDetailsRepository = require('./userAccountDetails');
const logger = require('../logger/logger');

const getAccountDetails = async (request, response) => {
    const { userId } = request.query;
    const userAccountDetailsRepository = new UserAccountDetailsRepository();
    const existingUserAccountDetails = await userAccountDetailsRepository.select(userId);
    if (existingUserAccountDetails) {
        logger.info(`existingUserAccountDetails ${existingUserAccountDetails.first_name}`);
        return response.status(200).json({
            id: existingUserAccountDetails.id,
            userId: existingUserAccountDetails.user_id,
            firstName:existingUserAccountDetails.first_name,
            lastName: existingUserAccountDetails.last_name,
            addressOne: existingUserAccountDetails.address_1,
            addressTwo:existingUserAccountDetails.address_2,
            city: existingUserAccountDetails.city,
            state: existingUserAccountDetails.state,
            zipCode: existingUserAccountDetails.zip_code,
            phone: existingUserAccountDetails.phone_number,
            email: existingUserAccountDetails.email
        });
    } else {
        logger.info('No data for that account.');
        return response.status(204).json({});
    }
};

const putAccountDetails = async (request, response) => {
    const { userId, firstName, LastName, addressOne, addressTwo, city, states, zipCode, phone, email } = request.query;
    const userAccountDetailsRepository = new UserAccountDetailsRepository();
    const existingUserAccountDetails = await userAccountDetailsRepository.select(userId);
    
    if (existingUserAccountDetails)
    {
        logger.info(`updateAccountInformation ${updateAccountInformation.first_name}`);
        const updateAccountInformation = await userAccountDetailsRepository.update(userId, firstName, LastName, addressOne, addressTwo, city, states, zipCode, phone, email);
        return response.status(200).json({
            id: existingUserAccountDetails.id,
            userId: existingUserAccountDetails.user_id,
            firstName:existingUserAccountDetails.first_name,
            lastName: existingUserAccountDetails.last_name,
            addressOne: existingUserAccountDetails.address_1,
            addressTwo:existingUserAccountDetails.address_2,
            city: existingUserAccountDetails.city,
            states: existingUserAccountDetails.state,
            zipCode: existingUserAccountDetails.zip_code,
            phone: existingUserAccountDetails.phone_number,
            email: existingUserAccountDetails.email
        });
    }
    else{
        logger.info('No Record for that user.');
        return response.status(404).json({});
    }
};

const createAccountDetails = async (request, response) => {
    const {
        userId, firstName, LastName, addressOne, addressTwo, city, states, zipCode, phone, email
    } = request.body;
    const userAccountDetailsRepository = new UserAccountDetailsRepository();
    const userAccountDetails = await userAccountDetailsRepository.insert(
        userId, firstName, LastName, addressOne, addressTwo, city, states, zipCode, phone, email
    );
    return response.status(201).json({
        id: userAccountDetails.id
    });
};

module.exports = { createAccountDetails, getAccountDetails, putAccountDetails }