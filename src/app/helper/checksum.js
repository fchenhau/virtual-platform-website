import moment from moment

/**
 * Formula: 
 *  base64(
        body.users.main.password + '|' +
        body.users.main.username +'|' + 
        body.users.main.email + '|' +
        <current_utc_date in yyyy-mm-dd> + '|' +
        <current_utc_time in hh:mm:ss>  + '|' + 
        body_users.sub[0].username + '|' +
        body_users.sub[1].username + '|' +
    )
 * @param {Object} data 
 * @param {Array} subUsernames 
 */
export const calculateXChecksum = (mainUser = {}, subUsers = []) => {
    // Extract the required fields from mainUser
    const { password, username, email } = mainUser;

    // Extract the required fields from subUsers
    const subUsernames = subUsers.map((user) => { return user.username });
    const concatSubUsernames = subUsernames.join('|');

    // Get the required date
    const currentUtcDate = moment().format('yyyy-mm-dd');
    const currentUtcTime = moment().format('hh:mm:ss');

    // Concatenate string 
    let concatString = password + '|' + username + '|' + email + '|' + currentUtcDate + '|' + currentUtcTime + '|' + concatSubUsernames;
    const base64Encoded = new Buffer(concatString).toString('base64');

    return base64Encoded;
}


/**
 * Formula: 
    sha256(
        body.users.main.password + '|' +
        body.users.main.username + '|' +
        body.users.main.email + '|' +
        body.users.main.phone_no + '|' +
        body.users.sub.username + '|' +
    )
 * @param {Object} data 
 * @param {Array} subUsernames 
 */
export const calculateXSignature = (data = {}, subUsernames = []) => {
    const { password, username, email } = data;
    const currentUtcDate = moment().format('yyyy-mm-dd');
    const currentUtcTime = moment().format('hh:mm:ss');
}