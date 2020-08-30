import moment from "moment"
import sha256 from "js-sha256"

/**
 * Formula: 
 *  base64(
        body.users.main.password + '|' +
        body.users.main.email + '|' +
        <current_utc_date in yyyy-mm-dd> + '|' +
        <current_utc_time in hh:mm:ss>  + '|' + 
        body_users.sub[0].email + '|' +
        body_users.sub[1].email + '|' +
    )
    * repeat for all sub users*
 * @param {Object} mainUser 
 * @param {Array} subUsers 
 */
export const calculateXChecksum = (mainUser = {}, subUsers = []) => {

    // Extract the required fields from mainUser
    const { password, email } = mainUser;

    // Extract the required fields from subUsers
    let concatSubUserEmails = "";
    if (subUsers.length > 0) {
        const subUserEmails = subUsers.map((user) => { return user.email });
        concatSubUserEmails = subUserEmails.join('|');
    }

    // Get the required date
    const currentUtcDate = moment().format('yyyy-mm-dd');
    const currentUtcTime = moment().format('hh:mm:ss');

    // Concatenate string 
    let concatString = password + '|' + email + '|' + currentUtcDate + '|' + currentUtcTime;

    if (subUsers.length > 0) {
        concatString = concatString + '|' + concatSubUserEmails;
    }
    
    const base64Encoded = new Buffer(concatString).toString('base64');

    return base64Encoded;
}


/**
 * Formula: 
    sha256(
        body.users.main.password + '|' +
        body.users.main.email + '|' +
        body.users.main.name + '|' +
        body.users.main.dob + '|' +
        body.users.main.phone_no + '|' +
        body.users.sub.email + '|' +
    )
    *repeat for every sub users*
 * @param {Object} mainUser 
 * @param {Array} subUsers 
 */
export const calculateXSignature = (mainUser = {}, subUsers = []) => {
 
    // Extract the required fields from mainUser
    const { password, email, name, dob, phone_no } = mainUser;

    // Extract the required fields from subUsers
    let concatSubUserEmails = "";
    if (subUsers.length > 0) {
        const subUserEmails = subUsers.map((user) => { return user.email });
        concatSubUserEmails = subUserEmails.join('|');
    }

    // Concatenate string 
    let concatString = password + '|' + email + '|' + name + '|' + dob + '|' + phone_no;

    if (subUsers.length > 0) {
        concatString = concatString + '|' + concatSubUserEmails;
    }

    const encryptedString = sha256(concatString);

    return encryptedString;
}