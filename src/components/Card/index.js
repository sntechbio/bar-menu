import React from "react";

function Card({titulo, texto, precoG, precoM, img, isM}) {
    return (
        <div className="card-deck col-sm-4 col-md-6 col-lg-6" style={{ padding: "30px" }}>
            <div class="card">
                <img className="card-img-top" src={img} alt="carne" style={{width: "360px", height: "350px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{texto}</p>
                </div>
                <div className="d-flex justify-content-between card-text pl-3 pr-3 pt-2" style={{ backgroundColor: "#363636", color: "white", fontSize: "20px" }}>
                    <p>Preço:</p>
                    <p>{precoG}</p>
                </div>
                {isM && (
                    <div className="d-flex justify-content-between card-text pl-3 pr-3 pt-2" style={{ backgroundColor: "#808080", color: "white", fontSize: "20px" }}>
                        <p>Menor:</p>
                        <p>{precoM}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card;

