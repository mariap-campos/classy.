import React from 'react';
import './styles.css'



interface ButtonProps {

}

const Button: React.FC<ButtonProps> = (props) => {
    return(
        <div className="box-button">
        <button type='submit'>
            {props.children}  
        </button>      
        </div>
    );
}

export default Button;