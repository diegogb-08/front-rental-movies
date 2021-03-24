import React from "react";



const Register = () => {
    return (
        <div className="registerContainer">
            <div className="headerReg">

                <div className="fakeFlixContainer">FakeFlix</div>
                <div className="buttonReg">Iniciar Sesión</div>    
    
            </div>

            <div className="formReg">
                <p className="pFormRegUp">¡Te damos de nuevo la bienvenida!</p>
                <p className="pFormRegUp">Es fácil suscribirse a Fakeflix</p>
                <p className="pFormRegMid">Escribe tu contraseña para empezar a disfrutar.</p>
                <p className="pFormRegMid">Correo</p>
                <div className="propsEmailReg">user@gmail.com</div>
                <div className="inputFormReg">Input</div>
                <div className="errorBoxReg">Error message</div>
                <div className="buttonFormReg">Continuar</div>
            </div>


            <div className="footerReg">

                <div className="footerRegUp">
                    <p className="pReg" className="pRegFirst">¿Preguntas? Contacta con nosotros.</p>
                </div>

                <div className="footerRegMid">
                    <p className="pReg">Preguntas frecuentes</p>
                    <p className="pReg">Centro de ayuda</p>
                    <p className="pReg">Términos de uso</p>
                    <p className="pReg">Privacidad</p>
                </div>

                <div className="footerRegDown">
                    <p className="pReg">Preferencias de cookies</p>
                    <p className="pReg" className="pRegLast">Información corporativa</p>
                </div>
            </div>    
        </div>
    )
};

export default Register;