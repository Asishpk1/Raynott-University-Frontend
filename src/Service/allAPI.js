import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"

//API Call for adding Reviews
export const addReviewAPI = async (reqbody) => {
    return await commonAPI("POST", `${SERVER_URL}/add-review`, reqbody)
}

// API Call for Getting All Reviews
export const getAllReviewsAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/get-reviews`, "")
}

//API Call Admission
export const addAdmissionAPI = async (reqBody) =>{
   return await commonAPI("POST",`${SERVER_URL}/add-admission`,reqBody)
}

//API Call for Admin Login
export const AdminLoginAPI = async (reqBody) =>{
   return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

//API Call to get Appointments
export const getAdmissionsAPI = async () =>{
   return await commonAPI("GET",`${SERVER_URL}/admissions`,{})
}
