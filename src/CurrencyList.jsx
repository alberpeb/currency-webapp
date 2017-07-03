import React, { Component } from 'react';
import {saveToStorage, loadFromStorage} from './module/LocalStorage.js';
import {timeSince} from './module/timeSince.js';
import {url} from './url.js';


export default class CurrencyList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			purchasePrice: undefined,
			salesPrice: undefined,
		};
	}

	newCurrencyItem(data) {
		const newItem = {
			key: 'currency',
			items: {
				purchasePrice: data.purchasePrice,
				salesPrice: data.salesPrice,
				date: new Date(Date.now()).getTime(),
			}
		};
		saveToStorage(newItem);
	}

	_getCurrencyInfo() {
		const main = this;
		main.setState({
			infoStatus: 'loading',
		});
		fetch(url, {//'http://demo4365064.mockable.io/', {
			method: 'GET',
     		headers: {
     			'Accept': 'application/json',
     			'Content-Type': 'application/json',
      		},
		    mode: 'cors',
		    cache: 'default' })
		.then((response) => {
			setTimeout( () => {
				main.setState({
		        infoStatus: 'loaded'
		    });
		    }, 300);
		    return response.json();
		})
		.then((data) => {
			main.setState({
				purchasePrice: data.purchasePrice,
				salesPrice: data.salesPrice,
			});
			this.newCurrencyItem(data);
		})
		.catch( function() {
			main.setState({
				infoStatus: 'error',
		    });
		});
	}

	componentWillMount() {
		this._getCurrencyInfo();
	}

	render() {
		const {infoStatus} = this.state;
		let data = null;

		if(infoStatus === 'loaded'){
			data = loadFromStorage("currency").map((item, index) => 

					<li key={index}>

						<div className="card">
						  <div className="container">
						    <h4><b>venta: </b>{item.salesPrice}
						    	<b> compra: </b>{item.purchasePrice}</h4> 
						    <p>{timeSince(new Date(item.date))}</p> 
						  </div>
						</div>
					</li>
				);
		} else if (infoStatus === 'loading') {
			data = <div>Cargando</div>
		}
		return(
		<div>
			<h1>Precio del dolar</h1>
			{data}
		</div>
		);
	}
}


