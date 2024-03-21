import React from "react";
import Card from "../Card";

function Menu() {
    return (
        <>
            <nav class="navbar navbar-light bg-dark d-flex justify-content-center">
                <a class="navbar-brand" href="#" style={{color: "white"}}>Cardápio</a>
            </nav>
            <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-center" style={{ maxWidth: "900px" }}>

                    <div className="card-group">
                        <Card
                            titulo={"Carne"}
                            texto={"Pode acompanhar batata ou macaxeira"}
                            precoG={"R$ 38,00"}
                            isM={true}
                            precoM={"R$ 35,00"}
                            img={"./../../img/prato1.jpg"}
                        />
                        <Card
                            titulo={"Charque"}
                            texto={"Pode acompanhar batata ou macaxeira"}
                            precoG={"R$ 38,00"}
                            isM={true}
                            precoM={"R$ 35,00"}
                            img={"./../../img/prato2.jpg"}
                        />
                        <Card
                            titulo={"Calabresa e batata"}
                            texto={"-"}
                            precoG={"R$ 38,00"}
                            isM={true}
                            precoM={"R$ 35,00"}
                            img={"./../../img/prato3.jpg"}
                        />
                        <Card
                            titulo={"Camarão"}
                            texto={"Pode acompanhar batata ou macaxeira"}
                            precoG={"R$ 50,00"}
                            isM={false}
                            precoM={"R$ 45,00"}
                            img={"./../../img/prato4.jpg"}
                        />
                        <Card
                            titulo={"Camarão"}
                            texto={"Apenas camarão"}
                            precoG={"R$ 40,00"}
                            isM={false}
                            precoM={"R$ 33,00"}
                            img={"./../../img/prato5.jpg"}
                        />
                        <Card
                            titulo={"Queijo"}
                            texto={"Com ou sem azeitona"}
                            precoG={"R$ 20,00"}
                            isM={true}
                            precoM={"R$ 13,00"}
                            img={"./../../img/prato6.jpg"}
                        />
                        <Card
                            titulo={"Batata"}
                            texto={"Pode acompanhar batata ou macaxeira"}
                            precoG={"R$ 15,00"}
                            isM={false}
                            precoM={"R$ 33,00"}
                            img={"./../../img/prato7.jpg"}
                        />
                        {/*  <Card
                        titulo={"Carne"}
                        texto={"Pode acompanhar batata ou macaxeira"}
                        precoG={"R$ 38,00"}
                        isM={true}
                        precoM={"R$ 33,00"}
                        img={"./../../img/prato8.jpg"}
                    /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;
