import * as React from 'react';
import { TextField, PrimaryButton } from 'office-ui-fabric-react';
import { sp } from "@pnp/sp"

const AirplaneImage:any = require("../../../assets/airplane.png");

import './styles.css';

export const FormRegister: React.FunctionComponent = () => {


    const Users: string = "users"
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const onChangeName = React.useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
            setName(newValue || '');
        },
        [],
    );
    const onChangeEmail = React.useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
            setEmail(newValue || '');
        },
        [],
    );
    const onChangePhone = React.useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
            setPhone(newValue || '');
        },
        [],
    );

    
    const clearFields = () => {
        setName('');
        setEmail('');
        setPhone('');
    }

    const registerUser = event => {

        if (name != "" && email != "" && phone != "") {

            event.preventDefault();

            sp.web.lists.getByTitle(Users).items.add({
                name,
                email,
                phone

            }).then(i => {
                clearFields()
                alert("Obrigado por se cadastrar")

            })
        } else {
            alert("Preencha os campos obrigatórios")
        }

    }

    return (
        <div className="register-container">
            <img src={AirplaneImage} className="image"/>
            <TextField label="Name" required value={name} onChange={onChangeName} />
            <TextField label="E-mail" required value={email} onChange={onChangeEmail} />
            <TextField label="Phone" required value={phone} onChange={onChangePhone} />
            <PrimaryButton className="default-button" text="Register" onClick={registerUser} />

        </div>

    )

}
