let data = [];

function renderTodo(){
 
  document.querySelector('.todo').innerHTML = ''; //limpar o campo


    data.forEach(task => { //laço de repetição

        let li = document.createElement('li');

        li.innerHTML = `
        <input type="checkbox" id="task-${task.id}">
        <label for="task-${task.id}"> ${task.title}</label>
        <button type="button">x</button>
        `;

        li.querySelector('input').addEventListener("change", e => {

            if (e.target.checked) {

                li.classList.add('complete');

            } else {
                li.classList.remove('complete');

            }
        });

        li.querySelector('button').addEventListener('click', e => {

            let button = e.target; // botão
            let li = button.parentNode; // pai do botão
            let input = li.querySelector('input'); //procuramos o input 
            let id = input.id; // localizando o id
            let idArray = id.split('-');// encontramos o id todo
            let todoId = idArray[1];// obteve o número
            let title = li.querySelector('label').innerText;

            if (confirm(`Deseja realmente excluir a tarefa ${title}!`)) {

                 data = data.filter(task => task.id !== parseInt(todoId));

                 renderTodo();

            };
           

        });

        document.querySelector('.todo').append(li);
    });

}

document.querySelector('#new-task').addEventListener('keyup', e => {

    if (e.key === 'Enter') {
        console.log(e.target.value);

        data.push({
            id:data.length+1,
            title: e.target.value
        })

        e.target.value = ""; //limpando o valor

        renderTodo();
    };

});

renderTodo();