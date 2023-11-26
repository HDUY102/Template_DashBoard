const themeToggler=document.querySelector(".theme-toggler");

//change theme
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');
})
//fill table
// Employees.forEach(employ=>{
//     const tr=document.createElement('tr');
//     const trContent =   
//                         <td>${employ.Name}</td>;
//                         <td>${employ.Address}</td>;
//                         <td>${employ.Salary}</td>;
//                         <td class="${employ.shipping==='Chưa trả lương'? 'danger' : employ.shipping === 'Nợ Lương' ? 'warning':
//                         'primary'}">${employ.Status}</td>;
//                         <td class="primary">Details</td>
//                     ;
//                     tr.innerHTML=trContent;
//                     document.querySelector('table tbody').appendChild(tr);
    
// })