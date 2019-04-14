import axios from 'axios'

export class FundService{

    
    static getMutualFunds=async(number)=>{
        let dat=require("./testData.json")
        // let token="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMDI3LCJ1c2VybmFtZSI6Ijk4MTE4ODU5ODkiLCJleHAiOjE1NTUwNTM1OTQsImVtYWlsIjoia2xzYWRqbGFAYXNkLmFjb20iLCJtb2JpbGUiOiI5ODExODg1OTg5Iiwib3JpZ19pYXQiOjE1NTQ5NjcxOTR9.HyMcKYNtPrzLLSg9qrK9HfMdcT4vvyCB3ID14b6gPVw"
        //     let fundData= await axios.get(`https://dev.indiawealth.in/api/v2/funds/getList/?limit=16&offset=${number}`,
        //     {headers:{Authorization:token}}
        //     )
            let fundData={data:dat.data.slice(number,number+16),count:dat.count}
            return fundData;
    }


}
export default FundService