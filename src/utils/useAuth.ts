export function getUser() {

    const getUserLoginInfo = localStorage.getItem("user_details")
    const userInfo = JSON.parse(getUserLoginInfo as string)

    let lastName = "User"
    let firstName = "Guest"
    let userId = null
    let email = "name@example.com"
    const userToken: (string | null) = JSON.parse(localStorage.getItem("token") as string) || null


    let isLoggedIn

    if (getUserLoginInfo) {

        lastName = userInfo.lastName
        firstName = userInfo.firstName
        userId = userInfo.userId
        email = userInfo.email

    }

    if (userToken != null && userToken != "" && userToken != undefined) {
        isLoggedIn = true
    } else {
        isLoggedIn = false
    }

    return { lastName, firstName, userId, email, userToken, isLoggedIn }

}