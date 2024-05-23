import axios from "axios"

const BASEURI = "http://localhost:3000/"
export const ApiEndPoints = {
    TRANSACTIONLIST: 'transactions',
    STATISTICS: "statistics",
    BARCHART: "bar-chart-data"
}
export const requestMethod={
    "GET":"GET"

}

export const serverCall = (endpoint, params, requestMethod) => {

    return new Promise((resolve, reject) => {

        axios({
            url: BASEURI + endpoint,
            method: requestMethod,
            params: params
        }).then((response) => {
            resolve(response.data)
        }).catch((err) => {
            reject(err)
        })
    })
}
