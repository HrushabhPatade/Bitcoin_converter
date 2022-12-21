import { useState } from "react";
import axios from "axios";


function BtcINR(){
		const[ans,setAns] = useState("");
		const[ans2,setAns2] = useState("");
		const[currency, setCurrency] = useState("usd");

		const hCurrency = (event) => { setCurrency(event.target.value);}
	
		const find = (event) =>{
			event.preventDefault();

			if(currency=="usd"){
				let urladd = "https://api.coindesk.com/v1/bpi/currentprice.json";
				axios.get(urladd)
				.then(res => setAns("Bitcoin current value in USD : " + res.data.bpi.USD.rate))
				.catch(err => setAns("issue" + err));

				//let a = parseFloat(ans);
				

				let urladd1 = "https://api.exchangerate-api.com/v4/latest/USD";
				axios.get(urladd1)
				.then(res => setAns2("Bitcoin current value in INR according to USD : " + ans*(res.data.rates.INR)))
				.catch(err => setAns2("issue" + err));

			}
			else if(currency=="gbp"){
				let urladd = "https://api.coindesk.com/v1/bpi/currentprice.json";
				axios.get(urladd)
				.then(res => setAns("Bitcoin current value in GBD : " + res.data.bpi.GBP.rate))
				.catch(err => setAns("issue" + err));	
			}
			else {
				let urladd = "https://api.coindesk.com/v1/bpi/currentprice.json";
				axios.get(urladd)
				.then(res => setAns("Bitcoin current value in EUR : " + res.data.bpi.EUR.rate))
				.catch(err => setAns("issue" + err));	
			}








		}



	return(
		<>
			<center>
				<h1> Bitcoin App</h1>
				<form onSubmit = { find }> 
					<input type="radio" defaultChecked = {true} name="currency" value="usd" onChange = {hCurrency} /> USD
					<input type="radio" name="currency" value = "gbp" onChange = {hCurrency} /> GBP
					<input type="radio" name="currency" value="eur" onChange = {hCurrency} /> EUR
					<br/><br/>
					<input type="submit" value = "Find"/>
				</form>
				<h1> {ans} </h1>
				<br/><br/>
				<h1> { ans2 } </h1>
				

			</center>
		</>
	);







} 

export default BtcINR;