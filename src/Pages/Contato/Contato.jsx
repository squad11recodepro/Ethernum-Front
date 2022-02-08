/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import './Contato.css'


/* eslint-disable react/jsx-no-undef */
export default () => {
  return (
    <>
      <Header></Header>
      <section id="div-do-meio">

        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input id="nome_completo" type="text" class="validate" />
                <label for="nome_completo">Nome Completo</label>
              </div>
              <div class="input-field col s6">
                <input id="email" type="text" class="validate" />
                <label for="email">E-mail</label>
              </div>
              <div class="input-field col s6">
                <textarea id="story" name="story" rows="10" cols="66"> </textarea>
                <input type="submit" value="ENVIAR" /><form></form>

              </div>
            </div>
          </form >

        </div >
      </section>

      <Footer></Footer>
    </>
  )
}

