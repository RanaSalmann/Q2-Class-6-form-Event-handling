import {contactInfoType} from "@/types/componentsType"

export default function displayContact2 (props:contactInfoType) {
    return (
    <div>
    <h1>Namee: {props.contactInfo.userName}</h1>
    <h1>Emaill: {props.contactInfo.email}</h1>
    <h1>Messagee: {props.contactInfo.onmessage}</h1>
    </div>
    );
}