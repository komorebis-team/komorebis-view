import React from 'react'
import NavBarAvatar from "./NavBarAvatar";

export default function Header(){
    return (
        <div className="komorebiHeader">
            <div> <p className="komorebiLabel"> Komorebi Connect </p> </div>
            <div>
                <p>
                    <NavBarAvatar
                        img="https://via.placeholder.com/150"
                        name="Agustín Abreu Callejas"
                        role="Amazon Agent"
                    />
                </p>
            </div>
        </div>
    )
}