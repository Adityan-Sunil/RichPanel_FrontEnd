import axios from 'axios'
// import { useState } from 'react';


function Page(){
    return(
        <div className="Page">
            {props.name}
        </div>
    )
}

export default function Pages(){
    let pageIDS = [];
    let pagesarr = [];
    axios.get("https://graph.facebook.com/v11.0/160799502751423/accounts?access_token=EABXPLqBTATUBALPit2kBcGIgLSp6mGvO6LV2Woc5FyZCivKmPtFJ4JkqQ1n2COw3vj3dBHg3m1r4gH9KiwA9yXVZBkLe7UH3OJwsPpIPeHZChooqJozefeo7qizSSon40Hhkx2rBEM14SXOCkdVZA41ytCcDpyK7b5QyDbsbU97cAkzyWaPhlZBYCcTctVv51ZAsy2kP7fhCOXe9aaAGCtJgV0rHPw5J4ZD")
    .then((result) =>{
        let pages = result.data;
        pages.data.forEach(page => {
            pageIDS.push({name: page.name, id: page.id, token: page.access_token});
            console.log(page.name);
        });
    }).catch(err => {
        console.log(err);
    })
    console.log(pageIDS);
    pageIDS.forEach(ID => {
        pagesarr.push(<Page name={ID.name} />)
    });
    return(
        <div className="Pages">
            {pagesarr}
        </div>
    )
}