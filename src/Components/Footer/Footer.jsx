/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <footer>

      <div className="icons">

        <div className="instagram">
          <a href="https://www.instagram.com/" target="_blank" />
          <i className="bi bi-instagram"></i>
        </div>
        <div className="facebook">
          <a href="https://www.facebook.com/" target="_blank" />
          <i className="bi bi-facebook"></i>
        </div>
        <div className="celular">
          <a href="#" target="_blank">
            <i className="bi bi-camera-fill"></i>
          </a>
        </div>
      </div>

      <p>
        Feito com por <strong>Caio Custódio Moreira</strong>
      </p>
    </footer>

  );
}