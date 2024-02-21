$(document).ready(function(){
  $('#menu').click(function(){
      $('aside').toggle();
      $('#menu').css({
          'color':'black',
          'backgroundColor':'white'
      });
  });
  run(); // Call the run function when the document is ready
});

function run() {
  async function fetchdata() {
      let data = await fetch('https://jsonplaceholder.typicode.com/todos');
      let response = await data.json();

      let fildata = response.filter(e => e.completed === true);
      document.querySelector('#taskcompleted').innerHTML = fildata.length;

      let fildata1 = response.filter(e => e.completed === false);
      document.querySelector('#taskuncompleted').innerHTML = fildata1.length;

      document.querySelector('#showdata').innerHTML = response.map(e => `<tr>
          <td> ${e.userId} </td>
          <td> ${e.id} </td>
          <td>${e.title}</td>
          <td>${e.completed}</td>
          </tr>`).join(" ");
  }

  setInterval(fetchdata, 100); // Fetch data every 100 milliseconds
}
