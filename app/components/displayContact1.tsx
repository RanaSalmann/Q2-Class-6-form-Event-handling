import {contactInfoType} from "@/types/componentsType"

export default function DisplayContact1 (props:contactInfoType) {
    return (
    <div>
    <h1>Name: {props.contactInfo.userName}</h1>
    <h1>Email: {props.contactInfo.email}</h1>
    <h1>Message: {props.contactInfo.onmessage}</h1>
    </div>
    )
}