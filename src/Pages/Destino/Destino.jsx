/* eslint-disable import/no-anonymous-default-export */
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import './Destino.css'

/* eslint-disable react/jsx-no-undef */
export default () => {
  return (
    <>
      <Header></Header>

      <div class="row">

        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input id="nome_completo" type="text" class="validate" />
              <label for="nome_completo">Nome Completo: </label>
            </div>

            <div class="input-field col s6">
              <input id="telefone" type="text" class="validate" />
              <label for="telefone">Telefone: </label>
            </div>

            <div class="input-field col s6">
              <input id="CPF" type="text" class="validate" />
              <label for="CPF">CPF: </label>
            </div>

            <div class="input-field col s6">
              <input id="e_mail" type="text" class="validate" />
              <label for="e_mail">E-mail: </label>
            </div>

            <div class="input-field col s6">
              <input id="data_partida" type="text" class="validate" />
              <label for="data_partida">Destino de partida:</label>
            </div>

            <div class="input-field col s6">
              <input id="data_partida" type="text" class="validate" />
              <label for="data_partida">Data de partida:</label>
            </div>

            <div class="input-field col s6">
              <input id="destino_chegada" type="text" class="validate" />
              <label for="destino_chegada">Destino de chegada:</label>
            </div>

            <div class="input-field col s6">
              <input id="data_chegada" type="text" class="validate" />
              <label for="data_chegada">Data de chegada:</label>
            </div>
            <input type="submit" value="ENVIAR" /><form></form>
          </div>
        </form >
      </div >

      <Footer></Footer>
    </>
  )
}