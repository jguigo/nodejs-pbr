let fs = require('fs');

    //cria um arquivo
// fs.writeFile('teste.txt', 'Hello World!', (error) => {
//     if(error) throw error;
//     console.log('Arquivo criado com sucesso.');
// })

    // acrescenta um arquivo/cria
// fs.appendFile('teste.txt', ' - Olá Mundo', (error) => {
//     if(error) throw error;
//     console.log('Arquivo atualizado com sucesso.');
// })

    // deleta um arquivo
// fs.unlink('teste.txt', (error) => {
//     if(error) throw error;
//     console.log('Arquivo deletado com sucesso.');
// })

    // renomeia um arquivo
// fs.rename('teste.txt','novoNome.txt' , (error) => {
//     if(error) throw error;
//     console.log('Arquivo renomeado com sucesso.');
// })

    //lê um arquivo e precisa passar o argumento de utf8 se não fica retornando buffer
// fs.readFile('novoNome.txt','utf8', (error, data) => {
//     if(error) throw error;
//     console.log(data);
// })

let args = process.argv.slice(2);

let fileName = args[0];

fs.readFile(fileName, 'utf8', (error, data) =>{
    if(error) throw error;
    fs.writeFile(fileName + '_Uppercase', data.toUpperCase(), (error)=>{
        if(error) throw error;
        console.log('Arquivo gerado com sucesso!');
    })    
})

