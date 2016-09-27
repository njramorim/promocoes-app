console.log('[[iniciando processo de salvar usuario..')

//chama dependencias
import {
  AsyncStorage
} from 'react-native'

//url
const url = 'http://localhost/server/'

export function saveUser(name, pass, mail) {
  console.log(
    'user: '+ name +
    ' / pass: ' + pass +
    ' / email: ' + mail
  )

  //passa as variaveis e salva usuario
  fetch(url + 'save_user.php', {
    method: "POST",
    body: JSON.stringify({
      username: name,
      password: pass,
      email: mail
    })
  })
  .then((response) => {
    console.log(response)
    return response.json()
  })
  .then((responseData) => {
    console.log(
        "POST Response",
        "Response Body -> " + JSON.stringify(responseData)
    )
  }).done();

  AsyncStorage.setItem('LOGIN', JSON.stringify(name))

  AsyncStorage.getItem('LOGIN', (err, result) => {
    console.log('pegando: ', result);
  });
}


console.log('..fim do processo de salvar usuario]]')
