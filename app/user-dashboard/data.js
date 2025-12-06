import { userInfoCall } from "@/services/user";

export const data = async () => {
    let mydata = await userInfoCall()
    console.log(`here is the data shown: ${mydata.email}`)
    return (mydata)}