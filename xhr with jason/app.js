document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);


function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.thedogapi.com/v1/images/search', true);
    
    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);

            const customer = JSON.parse(this.responseText);
            console.log(customer)
            const output =  `
            <ul>
             <li>ID: ${customer.url}</li>
             <li>Name: ${customer.name}</li>
             <li>company: ${customer.company}</li>
             <li>phone: ${customer.phone}</li>
            </ul>
            `;
            document.getElementById('customer').innerHTML = output;


        }
    }
    
    xhr.send();
}

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);
    
    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);

            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(customer => {
                 output +=  `
            <ul>
             <li>ID: ${customer.id}</li>
             <li>Name: ${customer.name}</li>
             <li>company: ${customer.company}</li>
             <li>phone: ${customer.phone}</li>
            </ul>
            `;
                
            });

            document.getElementById('customers').innerHTML = output;


        }
    }
    
    xhr.send();
}