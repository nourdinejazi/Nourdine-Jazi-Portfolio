
import { NextResponse } from "next/server";

import {google} from "googleapis"

export async function POST (
    req:Request
){
    try{
        const formData = await req.json()

        const credential = JSON.parse(
          Buffer.from(process.env.GOOGLE_SERVICE_KEY!, "base64").toString()
        );
      
        const auth = new google.auth.GoogleAuth({
          projectId: "personal-website-396016",
          credentials:{
            client_email: credential.client_email,
            private_key: credential.private_key,
          },
          scopes: "https://www.googleapis.com/auth/spreadsheets",
        });
      

      
        // Instance of Google Sheets API
        const googleSheets = google.sheets({
          auth ,
          version: 'v4'
      });
      
        const spreadsheetId = "1okGOgk0qPrKq9AuDbzzhm_a-cLgxGjdphSpSK23Fz10";
  
    const date = new Date()
   const res = await googleSheets.spreadsheets.values.append({
          auth,
          spreadsheetId,
          range: "Feuille 1!A:E",
          valueInputOption : "RAW",
          requestBody: {
              values: [
                   [
                    date,
                    formData.name,
                    formData.email,
                    formData.message
                    ]
                  ]
          }
        });


        return NextResponse.json(res)
    }catch(error){
        console.log('[Event_POST]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
    
}


