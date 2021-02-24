import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    width: 80%;
    padding: 1% 10%;
    flex-direction: column;
    
    .header{
        background: white;
        width: 90%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1% 5%;

        img{
            width:95px;
            height: 95px;

            @media(max-width: 600px){
                width:75px;
                height: 75px;
            }
        }
        h1{
            font-family: 'Teko', sans-serif;
            font-size: 3.5rem;

            @media(max-width: 600px){
                font-size: 2.5rem;
            }
            @media(max-width: 450px){
                font-size: 2rem;
            }
        }
    }
`
export const Corpo = styled.div`
    display: flex;
    width: 80%;
    padding: 0 10%;
    flex-direction: column;

    .choice{
        background: white;
        display: flex;
        flex-direction: column;
        width: 90%;
        padding: 1% 5%;

        .label1{
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            @media(max-width: 1100px){
                flex-direction: column;
                align-items: flex-start;
            }

            p{
                margin-left: 20px;
                color: red;
                
                @media(max-width: 1100px){
                    margin-left:0;
                    margin-top: 10px;
                }
            }

            label{
                font-family: 'Teko', sans-serif;
                font-size: 1.5rem;
            }
         
            input{
                width: 80px;
                height: 17px;
                font-size: 1rem;
                margin-left: 20px;
                border: solid 1px black;
                border-radius: 3px;
                text-align: center;

                @media(max-width: 1100px){
                    margin-left:0;
                    margin-top: 10px;
                }
            }
            input::placeholder{
                text-align: center;
            }
            
            select{
                background: white;
                margin-left: 20px;
                border: solid 1px black;
                border-radius: 3px;
            }  
        } 
        .label2{
            width: 100%;
            display: flex;
            margin-bottom: 10px;
            flex-direction: column;

            label{
            font-family: 'Teko', sans-serif;
            font-size: 1.5rem;
            }

            .options{
                width: 100%;
                display: flex;
                align-items: center;
                margin-top: 10px;
                position: relative;

                label{

                    display: flex;
                    align-items: center;
                }

                    span{
                        position: relative;
                        margin-right: 20px;
                    }
                    
                    input[type=radio]{
                        opacity: 0;
                        width: 5px;

                    }

                    span:before{
                        content:'';
                        background: white;
                        border-radius: 30px;
                        border: solid black 1px;
                        width: 13px;
                        height: 13px;
                        display: inline-block;
                    }

                    input:checked ~ span:after{
                        content: '';
                        background: grey;
                        border-radius: 30px;
                        border: solid black 1px;
                        width: 7px;
                        height: 7px;
                        display: inline-block;
                        position: absolute;
                        left: 3px;
                        top: 6px;
                    }
             
                p{
                    font-family: 'Teko', sans-serif;
                    font-size: 1.2rem;
                                 
                }         
        }
            
    }
        button{
            background: white;
            width: 10%;
            border: solid 1px black;
            border-radius: 3px;
            margin-top: 10px;

            @media(max-width: 900px){
                width: 20%;
            }
        } 

        button:hover{
            background: black;
            color: white;
        }
    }
    .jokesconfig{
            display: flex;
            background: white;
            width: 90%;
            padding: 1% 5%;
            justify-content: space-between;

            .jokes{
                background: white;
                display: flex;
                flex-direction: column;
                width: 100%;

                li{
                    list-style: none;
                }

                p{
                    font-family: 'Montserrat', sans-serif;
                    font-size: 1.5rem;
                    line-height: 25px;
                    margin-bottom: 30px;
                }
            }
    }   
`