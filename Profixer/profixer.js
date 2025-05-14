const Orders = [
    {
        productName: 'TV Repair',
        productNumber: '1800 Rs',
        paymentStatus: 'Paid',
        status: 'Done'
    },
    {
        productName: 'Pipe Leakage',
        productNumber: '2500 Rs',
        paymentStatus: 'Refunded',
        status: 'Declined / Not Satisfied'
    },
    {
        productName: 'Fan Repair',
        productNumber: '3000 Rs',
        paymentStatus: 'Paid',
        status: 'Done'
    },
]

const sidemenu = document.querySelector('aside');
const menubtn = document.getElementById('menu-btn ');
const closebtn = document.getElementById('close-btn');
const darkmode = document.querySelector('.dark-mode')

darkmode.addEventListener("click", ()=>{
    document.body.classList.toggle('dark-mode-variables');
    darkmode.querySelector('span:nth-child(1)').classList.toggle('active')
    darkmode.querySelector('span:nth-child(2)').classList.toggle('active')
})


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined / Not Satisfied' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});