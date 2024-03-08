import React from "react";
import Card from "../Card";

function Menu() {
    return (
        <div className="d-flex justify-content-center">
            <Card
                titulo={"Carne"}
                texto={"Pode acompanhar batata ou macaxeira"}
                precoG={"R$ 38,00"}
                isM={true}
                precoM={"R$ 33,00"}
            />
        </div>
    )
}

export default Menu;